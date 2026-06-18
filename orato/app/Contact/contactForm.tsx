"use client";

import { FormEvent, InputHTMLAttributes, ReactNode, useCallback, useMemo, useState } from "react";
import { Noto_Serif_Display } from "next/font/google";
import TurnstileWidget from "../components/TurnstileWidget";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

type FormState = {
  naam: string;
  email: string;
  telefoon: string;
  organisatie: string;
  bericht: string;
  turnstileToken: string;
};

const initialState: FormState = {
  naam: "",
  email: "",
  telefoon: "",
  organisatie: "",
  bericht: "",
  turnstileToken: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const errors: FieldErrors = useMemo(
    () => ({
      naam: formData.naam.trim().length > 1 ? "" : "Vul je naam in.",
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "Vul een geldig e-mailadres in.",
      turnstileToken: formData.turnstileToken ? "" : "Bevestig dat je geen robot bent.",
    }),
    [formData.email, formData.naam, formData.turnstileToken],
  );

  const hasErrors = Boolean(errors.naam || errors.email || errors.turnstileToken);
  const handleTurnstileVerify = useCallback((token: string) => {
    setFormData((prev) => ({ ...prev, turnstileToken: token }));
  }, []);
  const handleTurnstileExpire = useCallback(() => {
    setTouched((prev) => ({ ...prev, turnstileToken: true }));
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched((prev) => ({ ...prev, naam: true, email: true, turnstileToken: true }));
    setShowSuccess(false);
    setSubmitError("");

    if (hasErrors || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Verzenden is niet gelukt.");
      }

      setFormData(initialState);
      setTouched({});
      setShowSuccess(true);
      setTurnstileResetKey((key) => key + 1);
    } catch (error) {
      setTurnstileResetKey((key) => key + 1);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Verzenden is niet gelukt. Probeer het later opnieuw.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (key: keyof FormState, value: string) => {
    const nextValue =
      key === "telefoon" ? value.replace(/[^\d+\s()-]/g, "") : value;

    setFormData((prev) => ({ ...prev, [key]: nextValue }));
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
              placeholder="Voornaam achternaam"
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
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="+31 6 12345678"
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
            placeholder="Waar mag ik je mee helpen?"
            rows={5}
            value={formData.bericht}
            onChange={(e) => updateField("bericht", e.target.value)}
            className="w-full resize-none rounded-xl border border-orato-dark/20 bg-orato-light/30 px-4 py-3 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <TurnstileWidget
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
            resetKey={turnstileResetKey}
          />
          <ErrorTooltip message={showError("turnstileToken")} />
        </LabelInputContainer>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative mt-2 inline-flex w-full items-center justify-center rounded-xl bg-orato-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-orato-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orato-orange"
        >
          <span className="absolute inset-y-0 left-0 h-full w-0 rounded-xl bg-orato-orange transition-all duration-300 group-hover:w-full" />
          <span className="relative">
            {isSubmitting ? "BEZIG MET VERZENDEN..." : "VERZENDEN"}
          </span>
        </button>

        {submitError && (
          <p className="text-sm font-medium text-orato-red" role="alert">
            {submitError}
          </p>
        )}

        <p className="pt-2 text-xs leading-relaxed text-orato-dark/70">
          Je krijgt automatisch een bevestiging van je bericht per e-mail. Ik
          gebruik je gegevens alleen om je e-mail te beantwoorden.
        </p>
      </form>

      {showSuccess && (
        <p className="pointer-events-none absolute right-8 top-8 rounded-lg bg-orato-green px-3 py-2 text-xs font-medium text-white shadow-lg">
          Dank je wel! Je bericht is verzonden.
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
