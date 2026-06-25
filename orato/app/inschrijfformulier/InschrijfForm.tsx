"use client";

import Link from "next/link";
import { FormEvent, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, useCallback, useMemo, useState } from "react";
import { Noto_Serif_Display } from "next/font/google";
import QuoteBadge from "../components/ardie/QuoteBadge";
import TurnstileWidget from "../components/TurnstileWidget";
import { inschrijfDataOptions, isInschrijfDateInPast } from "./inschrijfData";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

type FacturatieType = "" | "zakelijk" | "privé";
type FactuurNaarType = "" | "email" | "post";

type FormState = {
  gekozenDatum: string;
  naam: string;
  email: string;
  telefoon: string;
  woonadres: string;
  woonplaats: string;
  organisatieNaam: string;
  organisatieAdres: string;
  organisatiePlaats: string;
  facturatie: FacturatieType;
  factuurNaar: FactuurNaarType;
  factuurEmail: string;
  factuurEmailZelfdeAlsPersoonlijk: boolean;
  factuurPostadres: string;
  geboortedatum: string;
  dieetwensen: string;
  opmerkingen: string;
  akkoord: boolean;
  turnstileToken: string;
};

const initialState: FormState = {
  gekozenDatum: "",
  naam: "",
  email: "",
  telefoon: "",
  woonadres: "",
  woonplaats: "",
  organisatieNaam: "",
  organisatieAdres: "",
  organisatiePlaats: "",
  facturatie: "",
  factuurNaar: "",
  factuurEmail: "",
  factuurEmailZelfdeAlsPersoonlijk: false,
  factuurPostadres: "",
  geboortedatum: "",
  dieetwensen: "",
  opmerkingen: "",
  akkoord: false,
  turnstileToken: "",
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

type InschrijfFormProps = {
  title?: string;
  description?: string;
  compact?: boolean;
  initialSelectedDate?: string;
};

const InschrijfForm = ({
  title = "",
  description = "Fijn dat je meedoet. Alvast bedankt voor je inschrijving. Mocht je nog vragen hebben, ik beantwoord ze graag.",
  compact = false,
  initialSelectedDate = "",
}: InschrijfFormProps) => {
  const initialAvailableDate = isInschrijfDateInPast(initialSelectedDate)
    ? ""
    : initialSelectedDate;
  const [formData, setFormData] = useState<FormState>(() => ({
    ...initialState,
    gekozenDatum: initialAvailableDate,
  }));
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const errors: FieldErrors = useMemo(
    () => ({
      gekozenDatum:
        formData.gekozenDatum && !isInschrijfDateInPast(formData.gekozenDatum)
          ? ""
          : "Kies een beschikbare dag.",
      naam: formData.naam.trim().length > 1 ? "" : "Vul je naam in.",
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "Vul een geldig e-mailadres in.",
      telefoon: formData.telefoon.trim().length >= 10 ? "" : "Vul een telefoonnummer in.",
      facturatie: formData.facturatie ? "" : "Kies zakelijk of privé.",
      organisatieNaam:
        formData.facturatie !== "zakelijk" || formData.organisatieNaam.trim().length > 1
          ? ""
          : "Vul de organisatienaam in voor zakelijke facturatie.",
      factuurNaar: formData.factuurNaar ? "" : "Kies waar de factuur naartoe moet.",
      factuurEmail:
        formData.factuurNaar !== "email" || /^\S+@\S+\.\S+$/.test(formData.factuurEmail)
          ? ""
          : "Vul een geldig factuur e-mailadres in.",
      factuurPostadres:
        formData.factuurNaar !== "post" || formData.factuurPostadres.trim().length > 5
          ? ""
          : "Vul een postadres in voor de factuur.",
      akkoord: formData.akkoord ? "" : "Je moet akkoord gaan met de voorwaarden.",
      turnstileToken: formData.turnstileToken ? "" : "Bevestig dat je geen robot bent.",
    }),
    [
      formData.akkoord,
      formData.email,
      formData.facturatie,
      formData.factuurEmail,
      formData.factuurNaar,
      formData.factuurPostadres,
      formData.gekozenDatum,
      formData.naam,
      formData.organisatieNaam,
      formData.telefoon,
      formData.turnstileToken,
    ],
  );

  const hasErrors = Boolean(
    errors.gekozenDatum ||
      errors.naam ||
      errors.email ||
      errors.telefoon ||
      errors.facturatie ||
      errors.organisatieNaam ||
      errors.factuurNaar ||
      errors.factuurEmail ||
      errors.factuurPostadres ||
      errors.akkoord ||
      errors.turnstileToken,
  );
  const handleTurnstileVerify = useCallback((token: string) => {
    setFormData((prev) => ({ ...prev, turnstileToken: token }));
  }, []);
  const handleTurnstileExpire = useCallback(() => {
    setTouched((prev) => ({ ...prev, turnstileToken: true }));
  }, []);

  const markTouched = (fields: (keyof FormState)[]) => {
    setTouched((prev) => {
      const next = { ...prev };
      fields.forEach((field) => {
        next[field] = true;
      });
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredFields: (keyof FormState)[] = [
      "gekozenDatum",
      "naam",
      "email",
      "telefoon",
      "facturatie",
      "factuurNaar",
      "akkoord",
      "turnstileToken",
    ];

    if (formData.factuurNaar === "email") {
      requiredFields.push("factuurEmail");
    }

    if (formData.factuurNaar === "post") {
      requiredFields.push("factuurPostadres");
    }

    if (formData.facturatie === "zakelijk") {
      requiredFields.push("organisatieNaam");
    }

    markTouched(requiredFields);
    setShowSuccess(false);
    setSubmitError("");

    if (hasErrors || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms/inschrijving", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Verzenden is niet gelukt.");
      }

      setFormData({
        ...initialState,
        gekozenDatum: initialAvailableDate,
      });
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

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
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
    <div
      className={`relative rounded-3xl border border-orato-dark/15 bg-white shadow-[0_20px_80px_-30px_rgba(20,20,20,0.35)] ${
        compact ? "p-5 md:p-6" : "p-6 md:p-8"
      }`}
    >
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h2 className={`${notoSerifDisplay.className} text-3xl text-orato-dark md:text-4xl`}>
              {title}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-orato-dark/80">{description}</p>
          </div>

          <Link
            href="/Contact"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-orato-dark/15 px-4 text-sm font-semibold text-orato-dark transition hover:border-orato-orange hover:text-orato-orange"
          >
            CONTACT
          </Link>
        </div>

        <p className="text-xs uppercase tracking-[0.24em] text-orato-dark/55">
          * verplicht · klik de keuzemogelijkheden aan
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit} noValidate>
        <FormSection title="Datum">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-orato-dark">Kies een dag *</legend>
            <div className="grid gap-3">
              {inschrijfDataOptions.map((option) => {
                const isPastDate = isInschrijfDateInPast(option);

                return (
                  <ChoiceCard
                    key={option}
                    checked={formData.gekozenDatum === option}
                    name="gekozenDatum"
                    value={option}
                    onChange={(value) => updateField("gekozenDatum", value)}
                    onBlur={() => onFieldBlur("gekozenDatum")}
                    label={option}
                    disabled={isPastDate}
                    helperText={isPastDate ? "Deze dag is niet meer beschikbaar." : undefined}
                  />
                );
              })}
            </div>
            <ErrorText message={showError("gekozenDatum")} />
          </fieldset>
        </FormSection>

        <FormSection title="Persoonlijke gegevens">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="naam">
                Naam *
              </label>
              <Input
                id="naam"
                name="naam"
                placeholder="Voornaam Achternaam"
                value={formData.naam}
                onChange={(event) => updateField("naam", event.target.value)}
                onBlur={() => onFieldBlur("naam")}
                aria-invalid={Boolean(showError("naam"))}
                error={Boolean(showError("naam"))}
                required
              />
              <ErrorText message={showError("naam")} />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="email">
                E-mailadres *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="naam@voorbeeld.nl"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                onBlur={() => onFieldBlur("email")}
                aria-invalid={Boolean(showError("email"))}
                error={Boolean(showError("email"))}
                required
              />
              <ErrorText message={showError("email")} />
            </LabelInputContainer>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="telefoon">
                Telefoonnummer *
              </label>
              <Input
                id="telefoon"
                name="telefoon"
                placeholder="+31 6 12345678"
                value={formData.telefoon}
                onChange={(event) => updateField("telefoon", event.target.value)}
                onBlur={() => onFieldBlur("telefoon")}
                aria-invalid={Boolean(showError("telefoon"))}
                error={Boolean(showError("telefoon"))}
                required
              />
              <ErrorText message={showError("telefoon")} />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="geboortedatum">
                Geboortedatum
              </label>
              <Input
                id="geboortedatum"
                name="geboortedatum"
                type="date"
                value={formData.geboortedatum}
                onChange={(event) => updateField("geboortedatum", event.target.value)}
              />
            </LabelInputContainer>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="woonadres">
                Woonadres
              </label>
              <Input
                id="woonadres"
                name="woonadres"
                placeholder="Straat + huisnummer"
                value={formData.woonadres}
                onChange={(event) => updateField("woonadres", event.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="woonplaats">
                Postcode + plaats
              </label>
              <Input
                id="woonplaats"
                name="woonplaats"
                placeholder="Postcode + plaats"
                value={formData.woonplaats}
                onChange={(event) => updateField("woonplaats", event.target.value)}
              />
            </LabelInputContainer>
          </div>
        </FormSection>

        <FormSection title="Organisatie (optioneel)">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="organisatieNaam">
                Naam {formData.facturatie === "zakelijk" ? "*" : ""}
              </label>
              <Input
                id="organisatieNaam"
                name="organisatieNaam"
                placeholder="Organisatienaam"
                value={formData.organisatieNaam}
                onChange={(event) => updateField("organisatieNaam", event.target.value)}
                onBlur={() => onFieldBlur("organisatieNaam")}
                aria-invalid={Boolean(showError("organisatieNaam"))}
                error={Boolean(showError("organisatieNaam"))}
                required={formData.facturatie === "zakelijk"}
              />
              <ErrorText message={showError("organisatieNaam")} />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="organisatieAdres">
                Straat + huisnummer
              </label>
              <Input
                id="organisatieAdres"
                name="organisatieAdres"
                placeholder="Straat + huisnummer"
                value={formData.organisatieAdres}
                onChange={(event) => updateField("organisatieAdres", event.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="organisatiePlaats">
                Postcode + plaats
              </label>
              <Input
                id="organisatiePlaats"
                name="organisatiePlaats"
                placeholder="Postcode + plaats"
                value={formData.organisatiePlaats}
                onChange={(event) => updateField("organisatiePlaats", event.target.value)}
              />
            </LabelInputContainer>
          </div>
        </FormSection>

        <FormSection title="Facturatie">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-orato-dark">Facturatie *</legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ChoiceCard
                checked={formData.facturatie === "zakelijk"}
                name="facturatie"
                value="zakelijk"
                onChange={(value) => updateField("facturatie", value as FacturatieType)}
                onBlur={() => onFieldBlur("facturatie")}
                label="Zakelijk"
              />
              <ChoiceCard
                checked={formData.facturatie === "privé"}
                name="facturatie"
                value="privé"
                onChange={(value) => updateField("facturatie", value as FacturatieType)}
                onBlur={() => onFieldBlur("facturatie")}
                label="Privé"
              />
            </div>
            <ErrorText message={showError("facturatie")} />
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-orato-dark">Factuur sturen naar *</legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ChoiceCard
                checked={formData.factuurNaar === "email"}
                name="factuurNaar"
                value="email"
                onChange={(value) => updateField("factuurNaar", value as FactuurNaarType)}
                onBlur={() => onFieldBlur("factuurNaar")}
                label="E-mailadres"
              />
              <ChoiceCard
                checked={formData.factuurNaar === "post"}
                name="factuurNaar"
                value="post"
                onChange={(value) => updateField("factuurNaar", value as FactuurNaarType)}
                onBlur={() => onFieldBlur("factuurNaar")}
                label="Postadres"
              />
            </div>
            <ErrorText message={showError("factuurNaar")} />
          </fieldset>

          {formData.factuurNaar === "email" && (
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="factuurEmail">
                Factuur e-mailadres *
              </label>
              <label className="inline-flex items-center gap-3 rounded-xl border border-orato-dark/10 bg-orato-light/35 px-3 py-2 text-sm text-orato-dark">
                <input
                  type="checkbox"
                  name="factuurEmailZelfdeAlsPersoonlijk"
                  className="h-4 w-4 cursor-small rounded border-orato-dark/30 text-orato-orange focus:ring-orato-orange"
                  checked={formData.factuurEmailZelfdeAlsPersoonlijk}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    updateField("factuurEmailZelfdeAlsPersoonlijk", checked);
                    updateField("factuurEmail", checked ? formData.email : "");
                    setTouched((prev) => ({ ...prev, factuurEmail: true }));
                  }}
                />
                <span>Zelfde als persoonlijke e-mailadres</span>
              </label>
              <Input
                id="factuurEmail"
                name="factuurEmail"
                type="email"
                placeholder="factuur@voorbeeld.nl"
                value={formData.factuurEmail}
                onChange={(event) => {
                  updateField("factuurEmail", event.target.value);
                  if (formData.factuurEmailZelfdeAlsPersoonlijk) {
                    updateField("factuurEmailZelfdeAlsPersoonlijk", false);
                  }
                }}
                onBlur={() => onFieldBlur("factuurEmail")}
                aria-invalid={Boolean(showError("factuurEmail"))}
                error={Boolean(showError("factuurEmail"))}
              />
              <ErrorText message={showError("factuurEmail")} />
            </LabelInputContainer>
          )}

          {formData.factuurNaar === "post" && (
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="factuurPostadres">
                Factuur postadres *
              </label>
              <TextArea
                id="factuurPostadres"
                name="factuurPostadres"
                rows={3}
                placeholder="Straat + huisnummer, postcode + plaats"
                value={formData.factuurPostadres}
                onChange={(event) => updateField("factuurPostadres", event.target.value)}
                onBlur={() => onFieldBlur("factuurPostadres")}
                aria-invalid={Boolean(showError("factuurPostadres"))}
                error={Boolean(showError("factuurPostadres"))}
              />
              <ErrorText message={showError("factuurPostadres")} />
            </LabelInputContainer>
          )}
        </FormSection>

        <FormSection title="Aanvullende informatie">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="dieetwensen">
                Waar mag de kok rekening mee houden?
              </label>
              <TextArea
                id="dieetwensen"
                name="dieetwensen"
                rows={4}
                placeholder="Waar mag de kok rekening mee houden?"
                value={formData.dieetwensen}
                onChange={(event) => updateField("dieetwensen", event.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <label className="text-sm font-medium text-orato-dark" htmlFor="opmerkingen">
                Opmerkingen
              </label>
              <TextArea
                id="opmerkingen"
                name="opmerkingen"
                rows={4}
                placeholder="Ruimte voor vragen of extra toelichting."
                value={formData.opmerkingen}
                onChange={(event) => updateField("opmerkingen", event.target.value)}
              />
            </LabelInputContainer>
          </div>
        </FormSection>

        <FormSection title="Afronden">
          <LabelInputContainer>
            <label
              className={`flex cursor-small cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-relaxed transition ${
                formData.akkoord
                  ? "border-orato-orange bg-orato-orange/10 text-orato-dark"
                  : "border-orato-dark/15 bg-white text-orato-dark/85 hover:border-orato-orange/60"
              }`}
            >
              <input
                type="checkbox"
                name="akkoord"
                className="mt-1 h-4 w-4 cursor-small rounded border-orato-dark/30 text-orato-orange focus:ring-orato-orange"
                checked={formData.akkoord}
                onChange={(event) => updateField("akkoord", event.target.checked)}
                onBlur={() => onFieldBlur("akkoord")}
              />
              <span>
                Ik ga akkoord met de{" "}
                <Link className="underline underline-offset-4 hover:text-orato-orange" href="/Info/AlgemeneVoorwaarden">
                  Algemene voorwaarden
                </Link>{" "}
                en{" "}
                <Link className="underline underline-offset-4 hover:text-orato-orange" href="/Info/PrivacyVerklaring">
                  Privacyverklaring
                </Link>{" "}
                van Orato. *
              </span>
            </label>
            <ErrorText message={showError("akkoord")} />
          </LabelInputContainer>

          <LabelInputContainer>
            <TurnstileWidget
              onVerify={handleTurnstileVerify}
              onExpire={handleTurnstileExpire}
              resetKey={turnstileResetKey}
            />
            <ErrorText message={showError("turnstileToken")} />
          </LabelInputContainer>

          <div className="flex items-center gap-4 overflow-visible">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex w-full cursor-small items-center justify-center rounded-xl bg-orato-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-orato-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orato-orange"
            >
              <span className="absolute inset-y-0 left-0 h-full w-0 rounded-xl bg-orato-orange transition-all duration-300 group-hover:w-full" />
              <span className="relative">
                {isSubmitting ? "BEZIG MET VERZENDEN..." : "VERZENDEN"}
              </span>
            </button>

            <QuoteBadge
              id="inschrijfformulier-form-quote"
              quote="Yesterday is history, tomorrow is a mystery, but today is a gift. That's why it's called the present."
              tooltipAlign="right"
              className="shrink-0"
            />
          </div>

          <div className="space-y-2 pt-2 text-xs leading-relaxed text-orato-dark/70">
            {submitError && (
              <p className="text-sm font-medium text-orato-red" role="alert">
                {submitError}
              </p>
            )}

            {showSuccess && (
              <p
                className="rounded-xl bg-orato-green px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
                role="status"
              >
                Dank je wel! Je inschrijving is verzonden.
              </p>
            )}
          </div>
        </FormSection>
      </form>
    </div>
  );
};

const FormSection = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section className="space-y-4 rounded-2xl border border-orato-dark/10 bg-orato-light/20 p-4 md:p-5">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-orato-orange" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-orato-dark/75">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

const LabelInputContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
};

const Input = ({
  className = "",
  error = false,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) => {
  return (
    <input
      className={`cursor-small h-11 w-full rounded-xl border bg-white px-4 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20 ${
        error ? "border-orato-red/80 ring-1 ring-orato-red/20" : "border-orato-dark/20"
      } ${className}`}
      {...props}
    />
  );
};

const TextArea = ({
  className = "",
  error = false,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }) => {
  return (
    <textarea
      className={`cursor-small w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-orato-dark outline-none transition focus:border-orato-orange focus:ring-2 focus:ring-orato-orange/20 ${
        error ? "border-orato-red/80 ring-1 ring-orato-red/20" : "border-orato-dark/20"
      } ${className}`}
      {...props}
    />
  );
};

const ChoiceCard = ({
  checked,
  disabled = false,
  name,
  value,
  label,
  helperText,
  onChange,
  onBlur,
}: {
  checked: boolean;
  disabled?: boolean;
  name: string;
  value: string;
  label: string;
  helperText?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}) => {
  return (
    <label
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
        disabled
          ? "cursor-not-allowed border-orato-dark/10 bg-orato-dark/5 text-orato-dark/38"
          : checked
          ? "border-orato-orange bg-orato-orange/10 text-orato-dark"
          : "border-orato-dark/15 bg-white text-orato-dark/85 hover:border-orato-orange/60"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        onBlur={onBlur}
        className="mt-1 h-4 w-4 cursor-small border-orato-dark/30 text-orato-orange focus:ring-orato-orange disabled:cursor-not-allowed disabled:opacity-45"
      />
      <span>
        <span>{label}</span>
        {helperText ? (
          <span className="mt-1 block text-xs font-medium text-orato-dark/45">{helperText}</span>
        ) : null}
      </span>
    </label>
  );
};

const ErrorText = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }

  return <p className="text-xs font-medium text-orato-red">{message}</p>;
};

export default InschrijfForm;
