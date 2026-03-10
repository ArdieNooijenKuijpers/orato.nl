"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
export type ArdieTimelineEntry = {
  year: string;
  title: string;
  summary?: string;
  details: string[];
  image?: {
    src: string;
    alt: string;
    placement?: "card" | "edge";
    tall?: boolean;
    wide?: boolean;
  };
  accentColor?: "red" | "orange" | "blue" | "green";
};

type RedThreadTimelineProps = {
  entries: ArdieTimelineEntry[];
};

const TOP_PADDING = 60;
const DESKTOP_ROW_GAP = 88;
const MOBILE_ROW_GAP = 44;

const accentStyles: Record<NonNullable<ArdieTimelineEntry["accentColor"]>, string> = {
  red: "border-orato-red/35 bg-orato-red/10",
  orange: "border-orato-orange/35 bg-orato-orange/10",
  blue: "border-orato-blue/35 bg-orato-blue/10",
  green: "border-orato-green/35 bg-orato-green/10",
};

const estimateLineBlockHeight = (lines: string[], charsPerLine: number, lineHeight: number) =>
  lines.reduce((total, line) => total + Math.max(1, Math.ceil(line.length / charsPerLine)) * lineHeight, 0);

const estimateCardHeight = (entry: ArdieTimelineEntry, mobile: boolean) => {
  const summaryHeight = entry.summary ? (mobile ? 48 : 56) : 0;
  const detailsHeight = estimateLineBlockHeight(
    entry.details,
    mobile ? 42 : 72,
    mobile ? 22 : 24
  );
  const imageHeight =
    entry.image && entry.image.placement !== "edge"
      ? entry.image.tall
        ? mobile
          ? 340
          : 420
        : entry.image.wide
          ? mobile
            ? 300
            : 360
        : mobile
          ? 272
          : 320
      : 0;
  const chromeHeight = mobile ? 176 : 206;

  return chromeHeight + summaryHeight + detailsHeight + imageHeight;
};

const buildLayout = (entries: ArdieTimelineEntry[], mobile: boolean) => {
  const gap = mobile ? MOBILE_ROW_GAP : DESKTOP_ROW_GAP;
  let currentTop = TOP_PADDING;

  return entries.map((entry) => {
    const height = Math.max(mobile ? 260 : 390, estimateCardHeight(entry, mobile));
    const top = currentTop;
    currentTop += height + gap;

    return {
      top,
      height,
      centerY: top + height / 2,
    };
  });
};

const getDesktopPoint = (index: number, y: number) => {
  const x = 50 + Math.sin((index + 1) * 1.05) * 24;

  return { x, y };
};

const getMobilePoint = (index: number, y: number) => {
  const x = 50 + Math.sin((index + 1) * 0.95) * 6;

  return { x, y };
};

const buildPath = (points: Array<{ x: number; y: number }>) => {
  if (points.length === 0) {
    return "";
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i += 1) {
    const previous = points[i - 1];
    const current = points[i];
    const controlY = (previous.y + current.y) / 2;

    path += ` C ${previous.x} ${controlY}, ${current.x} ${controlY}, ${current.x} ${current.y}`;
  }

  return path;
};

const TimelineCard = ({
  entry,
  align,
  reducedMotion,
}: {
  entry: ArdieTimelineEntry;
  align: "left" | "right";
  reducedMotion: boolean;
}) => {
  const accentClass = accentStyles[entry.accentColor ?? "red"];

  return (
    <motion.article
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, x: align === "left" ? 36 : -36 }
      }
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-white/12 bg-orato-light px-6 py-6 text-orato-dark shadow-[0_24px_80px_-36px_rgba(0,0,0,0.65)] ${
        align === "left" ? "justify-self-start" : "justify-self-end"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orato-red via-orato-orange to-orato-blue" />
      <div className={`mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${accentClass}`}>
        {entry.year}
      </div>
      <h3 className="text-2xl font-semibold text-orato-dark">{entry.title}</h3>
      {entry.summary ? <p className="mt-3 text-base font-medium text-orato-dark/85">{entry.summary}</p> : null}
      <div className="mt-4 space-y-3 text-sm leading-6 text-orato-dark/80">
        {entry.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
      {entry.image?.placement !== "edge" ? (
        entry.image ? (
          <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-orato-dark/10 bg-orato-light/60">
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              width={1200}
              height={900}
              className={`w-full object-cover ${
                entry.image.tall
                  ? "h-[22rem] md:h-[26rem]"
                  : entry.image.wide
                    ? "h-72 md:h-[23rem]"
                    : "h-72 md:h-80"
              }`}
            />
          </div>
        ) : null
      ) : null}
    </motion.article>
  );
};

export default function RedThreadTimeline({ entries }: RedThreadTimelineProps) {
  const reducedMotion = useReducedMotion() ?? false;

  const desktopLayout = buildLayout(entries, false);
  const mobileLayout = buildLayout(entries, true);
  const desktopPoints = desktopLayout.map((item, index) => getDesktopPoint(index, item.centerY));
  const mobilePoints = mobileLayout.map((item, index) => getMobilePoint(index, item.centerY));
  const desktopHeight = (desktopLayout.at(-1)?.top ?? TOP_PADDING) + (desktopLayout.at(-1)?.height ?? 0) + TOP_PADDING;
  const mobileHeight = (mobileLayout.at(-1)?.top ?? TOP_PADDING) + (mobileLayout.at(-1)?.height ?? 0) + TOP_PADDING;
  const desktopPath = buildPath(desktopPoints);
  const mobilePath = buildPath(mobilePoints);

  return (
    <>
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-7xl" style={{ height: desktopHeight }}>
          <svg
            viewBox={`0 0 100 ${desktopHeight}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="red-thread-line" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff3b2a" stopOpacity="0.98" />
                <stop offset="18%" stopColor="#ef2a18" stopOpacity="1" />
                <stop offset="62%" stopColor="#da391f" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1008" stopOpacity="0.98" />
              </linearGradient>
            </defs>
            <path d={desktopPath} stroke="rgba(176,22,12,0.58)" strokeWidth="3.4" fill="none" />
            <motion.path
              d={desktopPath}
              stroke="url(#red-thread-line)"
              strokeWidth="5.2"
              strokeLinecap="round"
              fill="none"
              initial={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
              whileInView={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 28px rgba(218,57,31,0.48))" }}
            />
          </svg>

          {entries.map((entry, index) => {
            const point = desktopPoints[index];
            const layout = desktopLayout[index];
            const align = point.x >= 50 ? "right" : "left";

            return (
              <div
                key={`${entry.year}-${entry.title}`}
                className="absolute left-0 grid w-full grid-cols-[1fr_5rem_1fr] items-center gap-6"
                style={{
                  top: layout.top,
                  minHeight: layout.height,
                }}
              >
                <div className="relative z-10 flex items-center">
                  {align === "left" ? <TimelineCard entry={entry} align="left" reducedMotion={reducedMotion} /> : null}
                </div>

                <div className="relative z-20 flex h-full items-center justify-center">
                  <motion.div
                    initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                    whileInView={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-orato-orange/40 bg-orato-orange/20 shadow-[0_0_18px_rgba(238,121,1,0.3)]"
                    style={{ left: `calc(${point.x}% - 0.75rem)` }}
                  >
                    <span className="absolute inset-1 rounded-full bg-orato-red" />
                  </motion.div>
                  <span
                    className="pointer-events-none absolute top-[calc(50%+1.6rem)] text-xs font-semibold uppercase tracking-[0.16em] text-white/65"
                    style={{ left: `calc(${point.x}% - 1.1rem)` }}
                  >
                    {entry.year}
                  </span>
                </div>

                <div className="relative z-10 flex items-center">
                  {align === "right" ? <TimelineCard entry={entry} align="right" reducedMotion={reducedMotion} /> : null}
                </div>

                {entry.image?.placement === "edge" ? (
                  <div
                    className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 xl:block ${
                      align === "left" ? "right-4" : "left-4"
                    }`}
                  >
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.9)]">
                      <Image
                        src={entry.image.src}
                        alt={entry.image.alt}
                        width={entry.image.wide ? 760 : 620}
                        height={entry.image.wide ? 620 : 820}
                        className={`object-cover opacity-95 ${
                          entry.image.wide
                            ? "h-[25.5rem] w-[29rem]"
                            : entry.image.tall
                              ? "h-[31rem] w-[22rem]"
                              : "h-[29rem] w-[25rem]"
                        }`}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="relative mx-auto max-w-2xl px-4" style={{ minHeight: mobileHeight }}>
          <svg
            viewBox={`0 0 100 ${mobileHeight}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="red-thread-line-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff3b2a" stopOpacity="0.98" />
                <stop offset="45%" stopColor="#ef2a18" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1008" stopOpacity="0.98" />
              </linearGradient>
            </defs>
            <path d={mobilePath} stroke="rgba(176,22,12,0.56)" strokeWidth="2.7" fill="none" />
            <motion.path
              d={mobilePath}
              stroke="url(#red-thread-line-mobile)"
              strokeWidth="4.4"
              strokeLinecap="round"
              fill="none"
              initial={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.4 }}
              whileInView={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          <div className="relative z-10 space-y-8 py-10">
            {entries.map((entry, index) => {
              const point = mobilePoints[index];
              const accentClass = accentStyles[entry.accentColor ?? "red"];

              return (
                <motion.article
                  key={`${entry.year}-${entry.title}-mobile`}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
                  whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative pl-16"
                >
                  <div
                    className="absolute top-8 h-5 w-5 rounded-full border border-orato-orange/40 bg-orato-orange/20"
                    style={{ left: `calc(${point.x}% - 0.65rem)` }}
                  >
                    <span className="absolute inset-1 rounded-full bg-orato-red" />
                  </div>

                  <div className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-orato-light p-5 text-orato-dark shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)]">
                    <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentClass}`}>
                      {entry.year}
                    </div>
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    {entry.summary ? <p className="mt-2 text-sm font-medium text-orato-dark/85">{entry.summary}</p> : null}
                    <div className="mt-3 space-y-3 text-sm leading-6 text-orato-dark/80">
                      {entry.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                    {entry.image ? (
                      <div className="mt-4 overflow-hidden rounded-[1.35rem] border border-orato-dark/10">
                        <Image
                          src={entry.image.src}
                          alt={entry.image.alt}
                          width={1200}
                          height={900}
                          className={`w-full object-cover ${
                            entry.image.tall ? "h-80" : entry.image.wide ? "h-72" : "h-64"
                          }`}
                        />
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
