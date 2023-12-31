import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
// import About from "./about";
// import Programs from "./programs";
// import Heart2Art from "./Heart2Art";

import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gurti Foundation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />

        <Footer />
      </main>
    </>
  );
}
