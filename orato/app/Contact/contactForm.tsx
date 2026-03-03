"use client";

import { FormEvent, InputHTMLAttributes, ReactNode, useMemo, useState } from "react";
import { Noto_Serif_Display } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

type FormState = {
  naam: string;
  email: string;
  telefoon: string;
  organisatie: string;
  bericht: string;
  captcha: string;
};

const initialState: FormState = {
  naam: "",
  email: "",
  telefoon: "",
  organisatie: "",
  bericht: "",
  captcha: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const captchaQuestion = useMemo(() => ({ left: 4, right: 3 }), []);
  const captchaResult = captchaQuestion.left + captchaQuestion.right;

  const errors: FieldErrors = useMemo(
    () => ({
      naam: formData.naam.trim().length > 1 ? "" : "Vul je naam in.",
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "Vul een geldig e-mailadres in.",
      captcha: Number(formData.captcha) === captchaResult ? "" : "CAPTCHA is niet correct.",
    }),
    [captchaResult, formData.captcha, formData.email, formData.naam],
  );

  const hasErrors = Boolean(errors.naam || errors.email || errors.captcha);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched((prev) => ({ ...prev, naam: true, email: true, captcha: true }));
    setShowSuccess(false);

    if (hasErrors) {
      return;
    }

    setFormData(initialState);
    setTouched({});
    setShowSuccess(true);
  };

  const updateField = (key: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (showSuccess) {
      setShowSuccess(false);
    }
  };

  const onFieldBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const showError = (key: keyof FormState) => {
    const message = errors[key];
    return touched[key] && message ? message : "";
  };

  return (
    <div className="relative rounded-3xl border border-orato-dark/15 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(20,20,20,0.35)] md:p-8">
      <div className="mb-8 space-y-3">
        <h2 className={`${notoSerifDisplay.className} text-3xl text-orato-dark md:text-4xl`}>
          Contactformulier
        </h2>
        <p className="text-sm leading-relaxed text-orato-dark/80">
          Neem gerust vrijblijvend contact met me op zodat ik kan meedenken in
          mogelijkheden. Dat kan via e-mail, telefoon, LinkedIn of onderstaand
          contactformulier.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <LabelInputContainer>
            <label className="text-sm font-medium text-orato-dark" htmlFor="naam">
              Naam (verplicht)
            </label>
            <Input
              id="naam"
              name="naam"
              placeholder="Jouw naam"
              value={formData.naam}
              onChange={(e) => updateField("naam", e.target.value)}
              onBlur={() => onFieldBlur("naam")}
              aria-invalid={Boolean(showError("naam"))}
              error={Boolean(showError("naam"))}
              required
            />
            <ErrorTooltip message={showError("naam")} />
          </LabelInputContainer>

          <LabelInputContainer>
            <label className="text-sm font-medium text-orato-dark" htmlFor="email">
              E-mailadres (verplicht)
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="naam@voorbeeld.nl"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              onBlur={() => onFieldBlur("email")}
              aria-invalid={Boolean(showError("email"))}
              error={Boolean(showError("email"))}
              required
            />
            <ErrorTooltip message={showError("email")} />
          </LabelInputContainer>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <LabelInputContainer>
            <label className="text-sm font-medium text-orato-dark" htmlFor="telefoon">
              Telefoonnummer
            </label>
            <Input
              id="telefoon"
              name="telefoon"
              placeholder="+31"
              value={formData.telefoon}
              onChange={(e) => updateField("telefoon", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <label
              className="text-sm font-medium text-orato-dark"
              htmlFor="organisatie"
            >
              Organisatie
            </label>
            <Input
              id="organisatie"
              name="organisatie"
              placeholder="Bedrijfsnaam"
              value={formData.organisatie}
              onChange={(e) => updateField("organisatie", e.target.value)}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <label className="text-sm font-medium text-orato-dark" htmlFor="bericht">
            Bericht
          </label>
          <textarea
            id="bericht"
            name="bericht"
            placeholder="Waar kan ik je mee helpen?"
            rows={5}
            value={formData.bericht}
            onChange={(e) => updateField("bericht", e.target.value)}
            className="w-full resize-none rounded-xl border border-orato-dark/20 bg-orato-light/30 px-4 py-3 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <label className="text-sm font-medium text-orato-dark" htmlFor="captcha">
            CAPTCHA: hoeveel is {captchaQuestion.left} + {captchaQuestion.right}?
          </label>
          <Input
            id="captcha"
            name="captcha"
            inputMode="numeric"
            placeholder="Antwoord"
            value={formData.captcha}
            onChange={(e) => updateField("captcha", e.target.value)}
            onBlur={() => onFieldBlur("captcha")}
            aria-invalid={Boolean(showError("captcha"))}
            error={Boolean(showError("captcha"))}
            required
          />
          <ErrorTooltip message={showError("captcha")} />
        </LabelInputContainer>

        <button
          type="submit"
          className="group relative mt-2 inline-flex w-full items-center justify-center rounded-xl bg-orato-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-orato-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orato-orange"
        >
          <span className="absolute inset-y-0 left-0 h-full w-0 rounded-xl bg-orato-orange transition-all duration-300 group-hover:w-full" />
          <span className="relative">VERZENDEN</span>
        </button>

        <p className="pt-2 text-xs leading-relaxed text-orato-dark/70">
          Je krijgt automatisch een bevestiging van je bericht per e-mail. Ik
          gebruik je gegevens alleen om je e-mail te beantwoorden.
        </p>
      </form>

      {showSuccess && (
        <p className="pointer-events-none absolute right-8 top-8 rounded-lg bg-orato-green px-3 py-2 text-xs font-medium text-white shadow-lg">
          Dank je wel! Je bericht is klaar om verzonden te worden.
        </p>
      )}
    </div>
  );
};

const LabelInputContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="relative flex w-full flex-col gap-2">{children}</div>;
};

const Input = ({
  className = "",
  error = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) => {
  return (
    <input
      className={`h-11 w-full rounded-xl border bg-orato-light/30 px-4 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20 ${
        error ? "border-orato-red/80 ring-1 ring-orato-red/20" : "border-orato-dark/20"
      } ${className}`}
      {...props}
    />
  );
};

const ErrorTooltip = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }

  return (
    <span className="pointer-events-none absolute -top-2 left-3 z-20 -translate-y-full rounded-md bg-orato-red px-2 py-1 text-xs font-medium text-white shadow-md">
      {message}
    </span>
  );
};

export default ContactForm;
