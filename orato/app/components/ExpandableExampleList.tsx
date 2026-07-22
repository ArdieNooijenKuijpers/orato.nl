"use client";

import { useState } from "react";

type ExpandableExampleListProps = {
  items: string[];
  accent: "blue" | "green";
  initiallyVisible?: number;
};

const accentClasses = {
  blue: "bg-orato-blue/10 text-orato-blue group-hover:bg-orato-blue",
  green: "bg-orato-green/10 text-orato-green group-hover:bg-orato-green",
};

export default function ExpandableExampleList({
  items,
  accent,
  initiallyVisible = 10,
}: ExpandableExampleListProps) {
  const [showAll, setShowAll] = useState(false);
  const hasMoreItems = items.length > initiallyVisible;

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const isHidden = hasMoreItems && !showAll && index >= initiallyVisible;

          return (
            <article
              key={item}
              className={`group rounded-[1.4rem] border border-orato-dark/10 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-28px_rgba(20,20,20,0.28)] ${
                isHidden ? "hidden" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 group-hover:text-white ${accentClasses[accent]}`}
                >
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-orato-dark/82">{item}</p>
              </div>
            </article>
          );
        })}
      </div>

      {hasMoreItems ? (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-orato-dark/15 bg-white px-5 text-sm font-semibold uppercase tracking-[0.14em] text-orato-dark transition hover:border-orato-dark hover:bg-orato-dark hover:text-white"
          >
            {showAll ? "Toon minder" : `Lees meer (${items.length - initiallyVisible})`}
          </button>
        </div>
      ) : null}
    </>
  );
}
