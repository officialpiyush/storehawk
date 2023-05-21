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
import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const userId = api.hedera.hello.useQuery();
  const { data, error } = api.hedera.getTopic.useQuery({
    subTopic: "todo",
  });

  const addDataMutation = api.hedera.addMessage.useMutation();

  useEffect(() => {
    console.log(data);

    // addDataMutation.mutate({
    //   message: "hello",
    //   subTopic: "todo",
    // });
  }, [data]);

  return (
    <div className="h-screen bg-[#D6F18E] font-sans">
      <div
        className="absolute left-0 right-0 top-0 z-10 h-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/wave.png)",
        }}
      >
        <Head>
          <title>StoreHawk</title>
          <meta name="description" content="soon:tm:" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        {/* <img className=" h-40 w-full" src="/wave.png" alt="" /> */}
      </div>
      <div className="absolute left-0 right-0 top-0 z-20 mx-auto flex h-screen max-w-7xl flex-col px-2">
        <div className="py-4">
          <Navbar />
        </div>
        <div className="mb-4 h-full w-full flex-1 overflow-y-auto pt-16">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default api.withTRPC(MyApp);
