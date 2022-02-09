import Head from "next/head";
import React, { useEffect } from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import styles from "../../styles/FinishedPage.module.css";
import { useTimeSubmitStore } from "./../../libs/stores";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./../../libs/firebase";
import { toast } from "react-hot-toast";

const FinishedPage = () => {
  const {
    hours,
    firstName,
    lastName,
    month,
    placements,
    congregation,
    videos,
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
        <title>You're Done</title>
      </Head>

      <CenterComponent>
        <h1>Thank You Iverson!</h1>
        <p className={styles["short-text"]}>
          Your time has been submitted, <br /> you can leave this page at any
          time.
        </p>
        <br />
      </CenterComponent>
    </AppContainer>
  );
};

export default FinishedPage;
