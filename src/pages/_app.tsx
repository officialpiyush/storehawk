import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@fontsource/lobster";
import "@fontsource/work-sans";
import "@fontsource/work-sans/100.css";
import "@fontsource/work-sans/200.css";
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/800.css";
import "@fontsource/work-sans/900.css";

import Navbar from "@/components/global/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="h-screen bg-[#D6F18E] font-sans">
      <div
        id="backgroundImage"
        className="absolute left-0 right-0 top-0 bottom-0 z-10 h-40 bg-cover bg-center bg-no-repeat bg-[url('/wave.png')]"
      >
        <Head>
          <title>StoreHawk</title>
          <meta name="description" content="soon:tm:" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        {/* <img className=" h-40 w-full" src="/wave.png" alt="" /> */}
      </div>
      <div className="absolute left-0 right-0 top-0 z-20 flex h-screen flex-col ">
        <div id="navbarColor" className="w-full py-4">
          <Navbar />
        </div>
        <div className="mx-auto mb-4 h-full w-full max-w-7xl flex-1 overflow-y-auto px-2 pt-16">
          <Component {...pageProps} />
        </div>
      </div>

      <ToastContainer theme="dark" />
    </div>
  );
};

export default api.withTRPC(MyApp);
