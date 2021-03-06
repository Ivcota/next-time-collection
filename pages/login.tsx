import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import AppContainer from "../components/AppContainer";
import CenterComponent from "../components/CenterComponent";
import PrimaryButton from "../components/PrimaryButton";
import { auth } from "../libs/firebase";

const LoginPage = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <AppContainer>
      <CenterComponent>
        <h1>Sign In</h1>
        <p>View time that has been submitted.</p>
        <PrimaryButton onClick={() => signInWithGoogle()}>
          Sign in With Google
        </PrimaryButton>
      </CenterComponent>
    </AppContainer>
  );
};

export default LoginPage;
