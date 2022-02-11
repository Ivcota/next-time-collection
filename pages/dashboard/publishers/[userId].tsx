import { NextPage } from "next";
import React from "react";
import AppContainer from "../../../components/AppContainer";
import AuthCheck from "../../../components/AuthCheck";

const PublisherByIdPage: NextPage = () => {
  return (
    <AuthCheck>
      <AppContainer>
        <h1>Publishers</h1>
      </AppContainer>
    </AuthCheck>
  );
};

export default PublisherByIdPage;
