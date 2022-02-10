import type { NextPage } from "next";
import Head from "next/head";
import CenterComponent from "../components/CenterComponent";
import PrimaryLink from "../components/PrimaryLink";
import AppContainer from "./../components/AppContainer";

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Time Submit App</title>
        <meta name="description" content="Submit time the easy way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CenterComponent>
          <h1>Time Submit</h1>
          <p>An easy way to submit time</p>
          <PrimaryLink href="/submit/congregation">Start Now</PrimaryLink>
        </CenterComponent>
      </main>
    </AppContainer>
  );
};

export default Home;
