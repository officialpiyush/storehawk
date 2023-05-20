import { type AppType } from "next/app";

import { api } from "@/utils/api";

import { Lobster } from "next/font/google";

const _lobster = Lobster({
  weight: "400",
  variable: "--font-lobster",
  preload: false,
});

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
