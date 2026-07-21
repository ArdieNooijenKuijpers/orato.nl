"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import QuoteBadge from "./QuoteBadge";

type HighlightedText = {
  text: string;
  highlights?: string[];
};

type TimelineImage = {
  src: string;
  alt: string;
  placement?: "card" | "edge";
  tall?: boolean;
  wide?: boolean;
  contain?: boolean;
  quote?: string;
  badgeLabel?: string;
  badgeIcon?: "crown";
  whiteBackground?: boolean;
};

export type ArdieTimelineEntry = {
  year: string;
  title: string;
  summary?: string;
  details: HighlightedText[];
  images?: TimelineImage[];
  accentColor?: "red" | "orange" | "blue" | "green";
};

type RedThreadTimelineProps = {
  entries: ArdieTimelineEntry[];
};

const TOP_PADDING = 60;
const DESKTOP_ROW_GAP = 88;
const MOBILE_ROW_GAP = 44;
const END_TAIL_HEIGHT = 180;

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
    entry.details.map((detail) => detail.text),
    mobile ? 42 : 72,
    mobile ? 22 : 24
  );
  const imageHeight = (entry.images ?? []).reduce((total, image, index) => {
    const baseHeight = image.tall
      ? mobile
        ? 340
        : 420
      : image.wide
        ? mobile
          ? 300
          : 360
        : mobile
          ? 272
          : 320;

    return total + baseHeight + (index > 0 ? 16 : 0);
  }, 0);
  const textHeight = (mobile ? 176 : 206) + summaryHeight + detailsHeight;

  if (!mobile && entry.images?.length) {
    return Math.max(textHeight, imageHeight);
  }

  return textHeight + imageHeight;
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

const getDesktopMarkerX = (pointX: number) => {
  const centerSnapThreshold = 6;

  return Math.abs(pointX - 50) <= centerSnapThreshold ? pointX : 50;
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

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const renderHighlightedText = (text: string, highlights?: string[]) => {
  if (!highlights?.length) {
    return text;
  }

  const uniqueHighlights = Array.from(new Set(highlights))
    .filter(Boolean)
    .sort((first, second) => second.length - first.length);

  if (uniqueHighlights.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${uniqueHighlights.map((item) => escapeRegExp(item)).join("|")})`, "gi");
  const segments = text.split(pattern);

  return segments.map((segment, index) => {
    const isHighlight = uniqueHighlights.some(
      (item) => item.toLocaleLowerCase() === segment.toLocaleLowerCase()
    );

    return isHighlight ? (
      <strong
        key={`${segment}-${index}`}
        className="font-semibold text-orato-dark"
      >
        {segment}
      </strong>
    ) : (
      <span key={`${segment}-${index}`}>{segment}</span>
    );
  });
};

const CrownBadge = () => (
  <Image
    src="/Ardie/crown-gold-transparent.png"
    alt=""
    aria-hidden="true"
    width={8000}
    height={8000}
    className="h-52 w-52 object-contain drop-shadow-[0_18px_30px_rgba(120,78,0,0.28)]"
  />
);

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
          : { opacity: 0, x: align === "left" ? -36 : 36 }
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
          <p key={detail.text}>{renderHighlightedText(detail.text, detail.highlights)}</p>
        ))}
      </div>
    </motion.article>
  );
};

const TimelineImageCard = ({
  entry,
  align,
  reducedMotion,
}: {
  entry: ArdieTimelineEntry;
  align: "left" | "right";
  reducedMotion: boolean;
}) => {
  if (!entry.images?.length) {
    return null;
  }

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, x: align === "left" ? -48 : 48 }
      }
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
      className={`grid w-full gap-4 ${
        align === "left" ? "justify-self-end" : "justify-self-start"
      }`}
    >
      {entry.images.map((image) => (
        <div
          key={image.src}
          className={`relative rounded-[1.75rem] border shadow-[0_24px_70px_-35px_rgba(0,0,0,0.9)] ${
            image.whiteBackground ? "border-orato-dark/10 bg-white" : "border-white/10 bg-white/5"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.wide ? 760 : 620}
            height={image.wide ? 620 : 820}
            className={`opacity-95 ${
              image.contain
                ? "h-auto w-full object-contain"
                : `object-cover ${
                    image.wide
                      ? "h-[24rem] w-full"
                      : image.tall
                        ? "h-[30rem] w-full"
                        : "h-[24rem] w-full"
                  }`
            }`}
          />
          {image.badgeLabel ? (
            image.badgeIcon === "crown" ? (
              <div className="pointer-events-none absolute -right-14 -top-28 z-20 rotate-[18deg] text-[#d4a11d]">
                <CrownBadge />
              </div>
            ) : (
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-orato-dark shadow-lg">
                <span>{image.badgeLabel}</span>
              </div>
            )
          ) : null}
          {image.quote ? (
            <div className="pointer-events-none absolute bottom-4 left-4 z-20 rounded-full bg-white p-1 shadow-[0_18px_40px_-24px_rgba(20,20,20,0.45)]">
              <QuoteBadge
                id={`timeline-image-quote-${image.src.replace(/[^a-z0-9]/gi, "-")}`}
                quote={image.quote}
                className="pointer-events-auto"
                tooltipAlign="right"
              />
            </div>
          ) : null}
        </div>
      ))}
    </motion.div>
  );
};

export default function RedThreadTimeline({ entries }: RedThreadTimelineProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const markerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState<number | null>(null);

  const desktopLayout = buildLayout(entries, false);
  const mobileLayout = buildLayout(entries, true);
  const desktopPoints = desktopLayout.map((item, index) => getDesktopPoint(index, item.centerY));
  const mobilePoints = mobileLayout.map((item, index) => getMobilePoint(index, item.centerY));
  const desktopTailPoint = desktopPoints.at(-1) && desktopLayout.at(-1)
    ? {
        x: desktopPoints.at(-1)!.x,
        y: desktopLayout.at(-1)!.top + desktopLayout.at(-1)!.height + END_TAIL_HEIGHT,
      }
    : null;
  const mobileTailPoint = mobilePoints.at(-1) && mobileLayout.at(-1)
    ? {
        x: mobilePoints.at(-1)!.x,
        y: mobileLayout.at(-1)!.top + mobileLayout.at(-1)!.height + END_TAIL_HEIGHT,
      }
    : null;
  const desktopHeight =
    (desktopLayout.at(-1)?.top ?? TOP_PADDING) +
    (desktopLayout.at(-1)?.height ?? 0) +
    TOP_PADDING +
    END_TAIL_HEIGHT;
  const mobileHeight =
    (mobileLayout.at(-1)?.top ?? TOP_PADDING) +
    (mobileLayout.at(-1)?.height ?? 0) +
    TOP_PADDING +
    END_TAIL_HEIGHT;
  const desktopPath = buildPath(
    desktopTailPoint ? [...desktopPoints, desktopTailPoint] : desktopPoints
  );
  const mobilePath = buildPath(
    mobileTailPoint ? [...mobilePoints, mobileTailPoint] : mobilePoints
  );

  useEffect(() => {
    const updateActiveMarker = () => {
      if (window.innerWidth < 768) {
        setActiveMarkerIndex(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let nearestIndex: number | null = null;
      let nearestDistance = Number.POSITIVE_INFINITY;

      markerRefs.current.forEach((marker, index) => {
        if (!marker) {
          return;
        }

        const rect = marker.getBoundingClientRect();
        const markerCenter = rect.top + rect.height / 2;
        const distance = Math.abs(markerCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveMarkerIndex(nearestDistance <= 80 ? nearestIndex : null);
    };

    updateActiveMarker();
    window.addEventListener("scroll", updateActiveMarker, { passive: true });
    window.addEventListener("resize", updateActiveMarker);

    return () => {
      window.removeEventListener("scroll", updateActiveMarker);
      window.removeEventListener("resize", updateActiveMarker);
    };
  }, []);

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
                <stop offset="0%" stopColor="#ff5a45" stopOpacity="1" />
                <stop offset="18%" stopColor="#ff4128" stopOpacity="1" />
                <stop offset="62%" stopColor="#eb4a2d" stopOpacity="1" />
                <stop offset="98.6%" stopColor="#cf2f1d" stopOpacity="1" />
                <stop offset="99.35%" stopColor="#9b1b10" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6f0f08" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="red-thread-line-base" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cd2414" stopOpacity="0.74" />
                <stop offset="98.6%" stopColor="#b42517" stopOpacity="0.74" />
                <stop offset="99.35%" stopColor="#7c140c" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7c140c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={desktopPath} stroke="url(#red-thread-line-base)" strokeWidth="3.4" fill="none" />
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
              style={{ filter: "drop-shadow(0 0 32px rgba(255,72,45,0.62))" }}
            />
          </svg>

          {entries.map((entry, index) => {
            const point = desktopPoints[index];
            const layout = desktopLayout[index];
            const align = point.x >= 50 ? "right" : "left";
            const markerX = getDesktopMarkerX(point.x);

            return (
              <div
                key={`${entry.year}-${entry.title}`}
                className="absolute left-0 grid w-full grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] items-center gap-6"
                style={{
                  top: layout.top,
                  minHeight: layout.height,
                }}
              >
                <div className="relative z-10 col-start-1 flex h-full items-center">
                  {align === "left" ? (
                    <TimelineCard entry={entry} align="left" reducedMotion={reducedMotion} />
                  ) : entry.images?.length ? (
                    <TimelineImageCard entry={entry} align="right" reducedMotion={reducedMotion} />
                  ) : null}
                </div>

                <div
                  className="pointer-events-none absolute inset-y-0 z-20"
                  style={{
                    left: `${markerX}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <motion.div
                      ref={(element) => {
                        markerRefs.current[index] = element;
                      }}
                      initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                      whileInView={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                      animate={
                        reducedMotion
                          ? { opacity: 1, scale: 1 }
                          : activeMarkerIndex === index
                            ? {
                                opacity: 1,
                                scale: [1, 1.12, 1],
                                boxShadow: [
                                  "0 0 0 rgba(255,255,255,0.16)",
                                  "0 0 18px rgba(255,255,255,0.42)",
                                  "0 0 0 rgba(255,255,255,0.16)",
                                ],
                              }
                            : {
                                opacity: 1,
                                scale: 1,
                                boxShadow: "0 0 0 rgba(255,255,255,0.18)",
                              }
                      }
                      viewport={{ once: true, amount: 0.3 }}
                      transition={
                        activeMarkerIndex === index
                          ? { duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                          : { duration: 0.25, ease: "easeOut" }
                      }
                      className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white/15 shadow-[0_0_14px_rgba(255,255,255,0.22)] backdrop-blur-sm"
                    >
                      {activeMarkerIndex === index ? (
                        <motion.span
                          aria-hidden="true"
                          className="absolute -inset-1.5 rounded-full border border-white/45"
                          animate={
                            reducedMotion
                              ? { opacity: 1, scale: 1 }
                              : { opacity: [0.45, 0, 0.45], scale: [1, 1.5, 1] }
                          }
                          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
                        />
                      ) : null}
                      <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                    </motion.div>
                    <span className="mt-4 min-w-[5rem] whitespace-nowrap text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      {entry.year}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 col-start-3 flex h-full items-center">
                  {align === "right" ? (
                    <TimelineCard entry={entry} align="right" reducedMotion={reducedMotion} />
                  ) : entry.images?.length ? (
                    <div className="ml-auto">
                      <TimelineImageCard entry={entry} align="left" reducedMotion={reducedMotion} />
                    </div>
                  ) : null}
                </div>
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
                <stop offset="0%" stopColor="#ff5a45" stopOpacity="1" />
                <stop offset="45%" stopColor="#ff4128" stopOpacity="1" />
                <stop offset="98.6%" stopColor="#cf2f1d" stopOpacity="1" />
                <stop offset="99.35%" stopColor="#9b1b10" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6f0f08" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="red-thread-line-mobile-base" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cd2414" stopOpacity="0.7" />
                <stop offset="98.6%" stopColor="#b42517" stopOpacity="0.7" />
                <stop offset="99.35%" stopColor="#7c140c" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#7c140c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={mobilePath} stroke="url(#red-thread-line-mobile-base)" strokeWidth="2.7" fill="none" />
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
              style={{ filter: "drop-shadow(0 0 24px rgba(255,72,45,0.56))" }}
            />
          </svg>

          <div className="relative z-10 space-y-8 py-10">
            {entries.map((entry, index) => {
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
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/12 bg-orato-light p-5 text-orato-dark shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)]">
                    <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${accentClass}`}>
                      {entry.year}
                    </div>
                    <h3 className="text-xl font-semibold">{entry.title}</h3>
                    {entry.summary ? <p className="mt-2 text-sm font-medium text-orato-dark/85">{entry.summary}</p> : null}
                    <div className="mt-3 space-y-3 text-sm leading-6 text-orato-dark/80">
                      {entry.details.map((detail) => (
                        <p key={detail.text}>
                          {renderHighlightedText(detail.text, detail.highlights)}
                        </p>
                      ))}
                    </div>
                    {entry.images?.map((image) => (
                      <div
                        key={image.src}
                        className={`relative mt-4 rounded-[1.35rem] border border-orato-dark/10 ${
                          image.whiteBackground ? "bg-white" : ""
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={900}
                            className={`w-full object-cover ${
                              image.contain
                                ? "h-auto object-contain"
                                : image.tall
                                  ? "h-80"
                                  : image.wide
                                    ? "h-72"
                                    : "h-64"
                            }`}
                        />
                        {image.badgeLabel ? (
                          image.badgeIcon === "crown" ? (
                            <div className="pointer-events-none absolute -right-5 -top-14 z-20 rotate-[18deg] text-[#d4a11d]">
                              <Image
                                src="/Ardie/crown-gold-transparent.png"
                                alt=""
                                aria-hidden="true"
                                width={8000}
                                height={8000}
                                className="h-32 w-32 object-contain drop-shadow-[0_12px_20px_rgba(120,78,0,0.28)]"
                              />
                            </div>
                          ) : (
                            <div className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-orato-dark shadow-lg">
                              <span>{image.badgeLabel}</span>
                            </div>
                          )
                        ) : null}
                        {image.quote ? (
                          <div className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-full bg-white p-1 shadow-[0_18px_40px_-24px_rgba(20,20,20,0.45)]">
                            <QuoteBadge
                              id={`timeline-mobile-image-quote-${image.src.replace(/[^a-z0-9]/gi, "-")}`}
                              quote={image.quote}
                              className="pointer-events-auto origin-center scale-[0.82]"
                              badgeClassName="text-orato-dark"
                              tooltipAlign="left"
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
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
