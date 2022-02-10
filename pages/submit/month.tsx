import { collection, orderBy, query } from "firebase/firestore";
import { useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";
import { errorToast } from "../../libs/customToast";
import { useTimeSubmitStore } from "../../libs/stores";
import { successToast } from "./../../libs/customToast";
import { db } from "./../../libs/firebase";

const MonthPage: NextPage = () => {
  const router = useRouter();
  const { setMonth, month, fieldServiceGroup } = useTimeSubmitStore();

  const monthsRef = collection(db, "months");
  const q = query(monthsRef, orderBy("order", "asc"));

  const [months, loading, error] = useCollection(q);

  const formik = useFormik({
    initialValues: {
      month: "",
      year: 2022,
    },
    onSubmit: ({ month }) => {
      if (month !== "" && fieldServiceGroup !== "") {
        setMonth(month);
        successToast("Saved");
        router.push("/submit/name");
      } else if (fieldServiceGroup == "") {
        errorToast("Restart process");
        router.push("/submit/congregation");
      } else {
        errorToast("Month not selected");
      }
    },
  });

  return (
    <AppContainer>
      <Head>
        <title>Select Month</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <CenterComponent>
          <h1>Month</h1>

          <select
            value={formik.values.month}
            onChange={formik.handleChange}
            className="input"
            name="month"
          >
            <option value="">Select Month</option>

            {months?.docs.map((doc) => {
              return (
                <option key={doc.id} value={doc.id}>
                  {" "}
                  {doc.data().month}{" "}
                </option>
              );
            })}
          </select>

          <PrimaryButton>Next</PrimaryButton>
        </CenterComponent>
      </form>
    </AppContainer>
  );
};

export default MonthPage;
