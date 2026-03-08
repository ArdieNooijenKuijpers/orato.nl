"use client";

import { ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import InschrijfForm from "./InschrijfForm";

type InschrijfFormModalProps = {
  triggerLabel?: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

const InschrijfFormModal = ({
  triggerLabel = "Schrijf je in",
  triggerClassName,
  title = "Inschrijven",
  description = "Schrijf je direct in voor de dag ‘Authentiek presenteren met Relational Presence’.",
  children,
}: InschrijfFormModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const headingId = useId();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          triggerClassName ??
          "inline-flex h-11 items-center justify-center rounded-xl bg-orato-orange px-5 text-sm font-semibold text-white transition hover:bg-orato-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-orato-orange"
        }
      >
        {children ?? triggerLabel}
      </button>

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[400] flex items-center justify-center bg-orato-dark/70 p-4 backdrop-blur-sm md:p-6">
              <button
                type="button"
                aria-label="Sluit inschrijfformulier"
                className="absolute inset-0 cursor-default"
                onClick={() => setIsOpen(false)}
              />

              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={headingId}
                className="relative z-10 h-[80vh] w-[80vw] max-w-6xl overflow-hidden rounded-[2rem] border border-white/15 bg-orato-light shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)]"
              >
                <div className="h-full overflow-y-auto p-3 md:p-4">
                  <div className="sticky top-0 z-20 mb-3 flex items-center justify-between rounded-2xl bg-orato-light/95 px-2 pt-2 pb-3 backdrop-blur-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-orato-dark/55">Modal</p>
                      <h2 id={headingId} className="text-lg font-semibold text-orato-dark">
                        {title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orato-dark/10 bg-white text-orato-dark transition hover:border-orato-orange hover:text-orato-orange"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <InschrijfForm title={title} description={description} compact />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default InschrijfFormModal;
