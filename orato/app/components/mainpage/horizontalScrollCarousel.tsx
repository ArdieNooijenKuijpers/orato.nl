"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
        className={`group relative h-[100vh] w-[80vw] overflow-hidden ${card.bg}`}
      >   
        {/* Image container */}
        <div className="absolute top-36 left-0 w-full h-auto">
          <Image
            src={card.url}
            alt={card.title}
            layout="responsive"
            width={100} // Full width
            height={56.25} // Aspect ratio (16:9 in this case)
            objectFit="cover"
            className="cursor-invert"
          />
        </div>
  
        {/* Title, description, and button */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h1 className="text-3xl font-bold text-white">{card.title}</h1>
          <p className="text-lg text-white">{card.description}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Learn More
          </button>
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
};

const cards: CardType[] = [
  {
    url: "/Homepage/supervisie-small.jpg",
    title: "Title 1",
    description: "Description 1",
    id: 1,
    bg: "bg-orato-dark",
  },
  {
    url: "/Homepage/supervisie-small.jpg",
    title: "Title 2",
    id: 2,
    bg: "bg-orato-light",
  },
  {
    url: "/Homepage/supervisie-small.jpg",
    title: "Title 3",
    id: 3,
    bg: "bg-orato-dark",
  },
];
