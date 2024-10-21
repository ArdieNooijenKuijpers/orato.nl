import Head from "next/head";
import Image from "next/image";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}
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
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left md:space-x-8">
            <Image
              src="/orato bloem.png"
              alt="Orato"
              width={300}
              height={300}
              priority
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                Orato
              </span>
              <span className="text-sm sm:text-base md:text-sm font-light mt-2 md:ml-8 lg:ml-12">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WELKOM! HET JUISTE ADRES VOOR COACHING
                <br />
                SUPERVISIE, PRESENTEREN EN COMMUNICEREN
              </span>
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
