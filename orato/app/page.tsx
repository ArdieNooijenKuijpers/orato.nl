import Head from "next/head";


export default function Home() {
  return (
    <>
      {/* Metadata section */}
      <Head>
        <title>Orato - Home</title>
        <meta name="description" content="Orato Coaching, Presenting and Supervision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {/* Page layout */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar can go here if you want it on all pages */}

        {/* Main content */}
        <main className="flex-grow container mx-auto p-4">

        </main>

        {/* Footer */}

      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Orato. All rights reserved.</p>
        </footer>
    </>
  );
}
