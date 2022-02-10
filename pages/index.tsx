import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CenterComponent from "../components/CenterComponent";
import PrimaryLink from "../components/PrimaryLink";
import { auth } from "../libs/firebase";
import styles from "../styles/Home.module.css";
import AppContainer from "./../components/AppContainer";

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
