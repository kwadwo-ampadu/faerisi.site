import React from "react";
import { Meta } from "@/layouts";
import Head from "next/head";

import dynamic from "next/dynamic";
const View = dynamic(() => import("@/views/Fairy"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Faerisi App</title>
        <meta
          name="description"
          content="Be visible and unlock profitability"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Meta />
      <View />
    </>
  );
}
