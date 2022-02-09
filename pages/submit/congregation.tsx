import Head from "next/head";
import React from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryLink from "../../components/PrimaryLink";

const SubmitCongregationPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Start Form</title>
        <meta name="description" content="Submit time the easy way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CenterComponent>
          <h1>Congregation</h1>

          <select className="input">
            <option value="Casa Grande West">Casa Grande West</option>
          </select>

          <PrimaryLink href="/submit/field-service-group">Next</PrimaryLink>
        </CenterComponent>
      </main>
    </AppContainer>
  );
};

export default SubmitCongregationPage;
