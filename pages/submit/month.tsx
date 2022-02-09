import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";

const MonthPage: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Select Month</title>
      </Head>
      <form>
        <CenterComponent>
          <h1>Month</h1>

          <PrimaryButton>Next</PrimaryButton>
        </CenterComponent>
      </form>
    </AppContainer>
  );
};

export default MonthPage;
