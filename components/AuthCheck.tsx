import React, { useEffect } from "react";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../libs/firebase";
import CenterComponent from "./CenterComponent";
import { useRouter } from "next/router";

const AuthCheck: FC = ({ children }) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (user) {
    return <>{children}</>;
  } else {
    return (
      <CenterComponent>
        <h1>You need to log in.</h1>
      </CenterComponent>
    );
  }
};

export default AuthCheck;
