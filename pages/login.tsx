import React from "react";
import AppContainer from "../components/AppContainer";
import CenterComponent from "../components/CenterComponent";
import PrimaryButton from "../components/PrimaryButton";

const LoginPage = () => {
  return (
    <AppContainer>
      <CenterComponent>
        <h1>Sign In</h1>
        <p>View time that has been submitted.</p>
        <PrimaryButton>Sign in With Google</PrimaryButton>
      </CenterComponent>
    </AppContainer>
  );
};

export default LoginPage;
