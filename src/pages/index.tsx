import Head from "next/head";
import { useEffect, useState } from "react";
import { Launch } from "@/types/launchType";
import { getLaunches } from "./api/_service";

import Card from "@/components/Card/Card";

export default function Home() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  const handleLaunches = () => {
    getLaunches().then((res) => {
      setLaunches(res);
      console.log(res);
    });
  };

  useEffect(() => {
    handleLaunches();
    console.log("loaded");
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Next Space Launch</h1>

      {launches.map((launch, i) => (
        <Card key={i} {...launch} />
      ))}
    </>
  );
}
