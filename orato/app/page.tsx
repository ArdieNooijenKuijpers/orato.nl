import Head from "next/head";
import Image from "next/image";
import {Noto_Serif_Display} from "next/font/google";


const noto_Serif_Display = Noto_Serif_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Metadata section */}
      <Head>
        <title>Orato - Home</title>
        <meta
          name="description"
          content="Orato Coaching, Presenting and Supervision"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {/* Page layout */}
      <div className="flex flex-col min-h-screen">
        {/* Main content */}
        <main className="flex-grow flex items-center justify-center p-4 ">
          <div className="flex static flex-col md:flex-row justify-center items-center text-center md:text-left md:space-x-8">

            <div className="flex flex-col text-left items-center md:items-start mt-4 md:mt-0">
              {/* #TODO! */}
              <div
                className={`${noto_Serif_Display.className}
 
                sm:text-xl
                sm:ml-10 
                
                md:text-8xl 
                md:ml-10

                lg:text-9xl 
                lg:ml-10

                xl: text
                xl:ml-10 
                `}
              >
                WELKOM BIJ
              </div>
              <div className=" lg:absolute  bottom-1/2 right-1/4 text-sm sm:text-xs md:ml-96 md:text-xs lg:text-sm font-light mt-2 ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HET
                JUISTE ADRES VOOR COACHING
                <br />
                SUPERVISIE, PRESENTEREN EN COMMUNICEREN.
              </div>
              <div
                className={` text-5xl font-bold -ml-10  sm:text-6xl md:text-8xl lg:text-9xl
                   `}
              >
                ORATO
              </div>
              
              <div
                className={`${noto_Serif_Display.className} text-4xl ml-10
                 font-normal sm:text-6xl md:text-8xl lg:text-9xl`}
              >
                VOOR JOU
              </div>

            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Orato. All rights reserved.</p>
      </footer>
    </>
  );
}
