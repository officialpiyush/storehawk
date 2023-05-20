import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@fontsource/lobster";

import "@/styles/globals.css";
import Navbar from "@/components/global/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="h-screen bg-[#D6F18E]">
      <div
        className="absolute left-0 right-0 top-0 z-10 h-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/wave.png)",
        }}
      >
        {/* <img className=" h-40 w-full" src="/wave.png" alt="" /> */}
      </div>
      <div className="max-w-7xl absolute left-0 right-0 top-0 z-20 mx-auto flex h-screen flex-col px-2">
        <div className="py-4">
          <Navbar />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
