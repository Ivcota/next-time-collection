import { doc, setDoc } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import styles from "../../styles/FinishedPage.module.css";
import { db } from "./../../libs/firebase";
import { useTimeSubmitStore } from "./../../libs/stores";

const FinishedPage = () => {
  const {
    hours,
    firstName,
    lastName,
    month,
    placements,
    congregation,
    videos,
    bibleStudies,
    returnVisits,
    fieldServiceGroup,
  } = useTimeSubmitStore();

  const router = useRouter();

  const sendDoc = async () => {
    toast.promise(
      setDoc(
        doc(
          db,
          "submitted-time",
          `${firstName}-${lastName} ${month} ${fieldServiceGroup} `
        ),
        {
          firstName,
          lastName,
          month,
          hours,
          placements,
          videos,
          fieldServiceGroup,
          congregation,
          bibleStudies,
          returnVisits,
        }
      ),
      {
        loading: "Turning your time in...",
        error: <b>Could not send.</b>,
        success: <b>Time has been submitted!</b>,
      },
      {
        style: {
          fontWeight: "normal",
        },
      }
    );
  };

  useEffect(() => {
    if (hours === 0) {
      console.log(hours);
      router.push("/");
    } else {
      sendDoc();
    }
  }, []);

  return (
    <AppContainer>
      <Head>
        <title>You&#39;re Done</title>
      </Head>

      <CenterComponent>
        <h1>Thank You {firstName}!</h1>
        <p className={styles["short-text"]}>
          You can leave this page at any time.
        </p>
        <br />
      </CenterComponent>
    </AppContainer>
  );
};

export default FinishedPage;
