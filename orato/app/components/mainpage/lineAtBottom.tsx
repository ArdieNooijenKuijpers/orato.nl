import { Tangerine } from "next/font/google";
const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });

const LineAtBottom = () => {
  return (
    <span className={`${tangerine.className} text-4xl absolute bottom-3 left-32 md:left-32 lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden md:block`}>
      &lsquo;Even stil staan . . . om verder te komen!&rsquo;
    </span>
  );
};
export default LineAtBottom;
