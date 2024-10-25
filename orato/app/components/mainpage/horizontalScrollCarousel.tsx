"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Tangerine } from "next/font/google";
const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });

const Example = () => {
  return (
    <div>

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-63%"]);

  return (
    //here i change the height of the section to 300vh or bigger for the length of the scroll
    <section ref={targetRef} className="relative h-[300vh]  bg-rgb">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className={`group relative h-[100vh] w-[80vw] flex flex-col items-center justify-start overflow-hidden ${card.bg}`}
    >
      <span className={`${tangerine.className} ${card.hidden} text-4xl text-white mt-4`}>
        ‘Even stil staan . . . om verder te komen!’
      </span>

      {/* Image container with max width and centered */}
      <div className="w-full mt-12 md:mt-32 aspect-video relative md:max-w-4xl 2xl:max-w-7xl max-w-6xl max-h-80 2xl:max-h-full mx-auto">
        <Image
          src={card.url}
          alt={card.title}
          fill
          style={{ objectFit: 'cover' }}
          className={`${card.border}`}
        />
      </div>

      {/* Text container with responsive widths */}
      <div className="w-full flex flex-col items-center  mt-4">
        <div className="w-11/12 md:w-3/4 2xl:w-full10/12  text-left">
          <h1 className={`${card.size} font-bold ${card.extra} cursor-invert cursor-big mt-6`}>
            {card.title}
          </h1>
          <p className={`text-lg ${card.extra} my-8`}>{card.description}</p>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            normalGradient={`${card.color}`}
            hoverGradient="#ee7901"
            className={`${card.bg} flex items-center space-x-1 cursor-small mx-1 ${card.extra}`}
          >
            <span>Meer info</span>
          </HoverBorderGradient>
        </div>
      </div>

      <div className={`${tangerine.className} ${card.hidden2} h-full text-xl text-white relative bottom-`}>
        ‘Even stil staan . . . om verder te komen!’
      </div>
    </div>
  );
};

export default Example;


type CardType = {
  url: string;
  title: string;
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
    description: "Voor mensen die zich in de context van hun werk, persoonlijk willen ontwikkelen. Aan de slag met weten wat je wilt, jezelf zijn en daarnaar handelen met gewenst resultaat.",
    id: 1,
    bg: "bg-orato-dark ",
    color: "#1d99d6",
    extra: "text-white",
    size: "text-5xl md:text-8xl xl:text-9xl",
    hidden: "visible",
    hidden2: "invisible",
  },
  {
    url: "/Homepage/Onderwerpen/test.jpg",
    title: "Supervisie",
    description: "Omdat je als ervaren coach professioneel en persoonlijk wilt blijven leren.",
    id: 2,
    bg: "bg-orato-light",
    color: "#5c5ba5",
    border: "rounded-full",
    extra: "text-black",
    size: "text-5xl md:text-8xl xl:text-9xl",
    hidden: "invisible",
    hidden2: "hidden",
  },
  {
    url: "/Homepage/Onderwerpen/Presenteren.jpg",
    firstLetter: "P",
    title: "Presenteren",
    description: "Jezelf laten zien en horen zoals dat past bij jou en je functie. Persoonlijke uitstraling en effectieve communicatie op z’n best.",
    id: 3,
    bg: "bg-orato-dark",
    color: "#77b829",
    extra: "text-white",
    size: "text-4xl md:text-8xl xl:text-9xl",
    hidden: "invisible",
    hidden2: "visible",


  },
];
