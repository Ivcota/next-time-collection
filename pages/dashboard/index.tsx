import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AppContainer from "../../components/AppContainer";
import AuthCheck from "../../components/AuthCheck";
import ListComponent from "../../components/ListComponent";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryLink from "../../components/PrimaryLink";
import { auth } from "../../libs/firebase";

import styles from "../../styles/DashboardPage.module.css";

const DashboardPage = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user?.email !== "ivcotad@gmail.com") {
      signOut(auth);
    }
  }, [user]);

  return (
    <AppContainer>
      <AuthCheck>
        <div className={styles["center-items"]}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles["text-content"]}>
            {user?.displayName?.split(" ")[0]}, what would you like to do?
          </p>
          <ListComponent>
            <PrimaryLink href="/dashboard/group-time">
              Check Group&#39;s Time
            </PrimaryLink>
            <PrimaryButton> Send Notifications </PrimaryButton>
            <PrimaryLink href={`/dashboard/publishers/${user?.uid}`}>
              Add or Remove Publishers
            </PrimaryLink>
            <PrimaryButton onClick={() => signOut(auth)}>Log Out</PrimaryButton>
          </ListComponent>
        </div>
      </AuthCheck>
    </AppContainer>
  );
};

export default DashboardPage;
