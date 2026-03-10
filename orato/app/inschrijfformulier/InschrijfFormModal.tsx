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

    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
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
            <div className="fixed inset-0 z-[400] p-4 md:p-6">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-orato-dark/70 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              <div className="relative flex h-full items-center justify-center">
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={headingId}
                  className="relative z-10 flex h-full max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-orato-light shadow-[0_30px_120px_-40px_rgba(0,0,0,0.8)] md:max-h-[calc(100vh-3rem)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="sticky top-0 z-20 shrink-0 border-b border-orato-dark/10 bg-orato-light/95 px-5 py-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
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
                  </div>

                  <div
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch] md:p-4"
                    onWheel={(event) => event.stopPropagation()}
                  >
                    <InschrijfForm title={title} description={description} compact />
                  </div>
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
