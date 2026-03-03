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

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const captchaQuestion = useMemo(() => ({ left: 4, right: 3 }), []);
  const captchaResult = captchaQuestion.left + captchaQuestion.right;

  const isCaptchaValid = Number(formData.captcha) === captchaResult;
  const isNaamValid = formData.naam.trim().length > 1;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);

  const canSubmit = isNaamValid && isEmailValid && isCaptchaValid;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!canSubmit) {
      return;
    }

    setFormData(initialState);
  };

  const updateField = (key: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="rounded-3xl border border-orato-dark/15 bg-white p-6 shadow-[0_20px_80px_-30px_rgba(20,20,20,0.35)] md:p-8">
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
              required
            />
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
              required
            />
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
            required
          />
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

        {isSubmitted && !canSubmit && (
          <p className="text-sm font-medium text-orato-red">
            Vul naam, e-mailadres en CAPTCHA correct in.
          </p>
        )}

        {isSubmitted && canSubmit && (
          <p className="text-sm font-medium text-orato-green">
            Dank je wel! Je bericht is klaar om verzonden te worden.
          </p>
        )}
      </form>
    </div>
  );
};

const LabelInputContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
};

const Input = ({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`h-11 w-full rounded-xl border border-orato-dark/20 bg-orato-light/30 px-4 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20 ${className}`}
      {...props}
    />
  );
};

export default ContactForm;
