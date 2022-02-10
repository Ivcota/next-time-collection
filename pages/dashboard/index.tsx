import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AppContainer from "../../components/AppContainer";
import AuthCheck from "../../components/AuthCheck";
import PrimaryButton from "../../components/PrimaryButton";
import { auth } from "../../libs/firebase";

import styles from "../../styles/DashboardPage.module.css";

const DashboardPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AppContainer>
      <AuthCheck>
        <div className={styles["center-items"]}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles["text-content"]}>
            {user?.displayName?.split(" ")[0]}, welcome to the dashboard. This
            page does not have any functionality at the moment. Feel free to
            logout below.
          </p>
          <PrimaryButton onClick={() => signOut(auth)}> Log Out </PrimaryButton>
        </div>
      </AuthCheck>
    </AppContainer>
  );
};

export default DashboardPage;
