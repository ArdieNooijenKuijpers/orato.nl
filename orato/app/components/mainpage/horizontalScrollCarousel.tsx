"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Tangerine } from "next/font/google";

const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });

const Example = () => {
  return (
    <div>
      {/* Horizontal scroll layout for desktop */}
      <div className="hidden md:block">
        <HorizontalScrollCarousel />
      </div>
      {/* Vertical scroll layout for mobile */}
      <div className="block md:hidden">
        <VerticalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-63%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-rgb cursor-scroll">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden cursor-scroll">
        <motion.div style={{ x }} className="flex">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const VerticalScrollCarousel = () => {
  // Adding items-center centers the cards horizontally
  return (
    <div className="flex flex-col items-center">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className={`group relative h-screen w-[80vw] flex flex-col items-center overflow-hidden ${card.bg} px-4 pb-6 pt-16 md:pt-24`}
    >
      {/* Top text element */}
      <span
        className={`${tangerine.className} ${card.hidden} min-h-[2.5rem] text-3xl md:min-h-[3rem] md:text-4xl lg:min-h-[3.5rem] lg:text-5xl text-white`}
      >
        ‘Even stil staan . . . om verder te komen!’
      </span>

      {/* Image container with fixed responsive height */}
      <div className="relative w-full mx-auto mt-4 h-48 md:h-60 lg:h-80 xl:h-96">
        <Image
          src={card.url}
          alt={card.title}
          fill
          sizes="(max-width: 767px) 100vw, 80vw"
          style={{ objectFit: "cover" }}
          className={`${card.border}`}
        />
      </div>

      {/* Text and button container */}
      <div className="w-full flex flex-col items-center mt-4">
        <div className="w-11/12 md:w-3/4 2xl:w-10/12 text-left ">
          <h1
            className={`${
              card.size ? card.size : "text-3xl md:text-4xl lg:text-5xl "
            } font-bold ${card.extra} mt-4`}
          >
            {card.title}
          </h1>
          <p className={`text-base md:text-lg ${card.extra} my-4`}>
            {card.description}
          </p>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            normalGradient={`${card.color}`}
            hoverGradient="#ee7901"
            className={`${card.bg} flex items-center space-x-1 cursor-pointer cursor-small ${card.extra}`}
          >
            <Link href={card.href} className="inline-block px-2 py-1">
              <span>Meer info</span>
            </Link>
          </HoverBorderGradient>
        </div>
      </div>

      {/* Bottom text element */}
      <div className={`${tangerine.className} ${card.hidden2} mt-auto pt-4 text-xl text-white`}>
        ‘Even stil staan . . . om verder te komen!’
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  href: string;
  description?: string;
  id: number;
  bg: string;
  bgcorner?: string;
  color?: string;
  border?: string;
  extra?: string;
  size?: string;
  firstLetter?: string;
  hidden?: string;
  hidden2?: string;
};

const cards: CardType[] = [
  {
    url: "/Homepage/Onderwerpen/Coaching.jpg",
    title: "Coaching",
    href: "/Onderwerpen/Coaching",
    description:
      "Voor mensen die zich in de context van hun werk, persoonlijk willen ontwikkelen. Aan de slag met weten wat je wilt, jezelf zijn en daarnaar handelen met gewenst resultaat.",
    id: 1,
    bg: "bg-orato-dark",
    color: "#1d99d6",
    extra: "text-white",
    size: "text-5xl md:text-8xl xl:text-9xl cursor-invert cursor-big",
    hidden: "visible",
    hidden2: "invisible",
  },
  {
    url: "/Homepage/Onderwerpen/test.jpg",
    title: "Supervisie",
    href: "/Onderwerpen/Supervisie",
    description:
      "Omdat je als ervaren coach professioneel en persoonlijk wilt blijven leren.",
    id: 2,
    bg: "bg-orato-light",
    color: "#5c5ba5",
    border: "rounded-full",
    extra: "text-black",
    size: "text-5xl md:text-8xl xl:text-9xl cursor-invert cursor-big",
    hidden: "invisible",
    hidden2: "invisible",
  },
  {
    url: "/Homepage/Onderwerpen/Presenteren.jpg",
    firstLetter: "P",
    title: "Presenteren",
    href: "/Onderwerpen/Presenteren",
    description:
      "Jezelf laten zien en horen zoals dat past bij jou en je functie. Persoonlijke uitstraling en effectieve communicatie op z’n best.",
    id: 3,
    bg: "bg-orato-dark",
    color: "#77b829",
    extra: "text-white",
    size: "text-4xl md:text-8xl xl:text-9xl cursor-invert cursor-big",
    hidden: "invisible",
    hidden2: "visible",
  },
];
