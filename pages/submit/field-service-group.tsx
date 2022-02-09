import React from "react";
import Head from "next/head";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import { useTimeSubmitStore } from "./../../libs/stores";
import PrimaryButton from "../../components/PrimaryButton";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const FieldServiceGroupPage = () => {
  const router = useRouter();
  const { setFieldServiceGroup } = useTimeSubmitStore();

  const formik = useFormik({
    initialValues: {
      fsGroup: "Diles Group",
    },
    onSubmit: ({ fsGroup }) => {
      setFieldServiceGroup(fsGroup);
      router.push("/submit/month");
    },
  });

  return (
    <AppContainer>
      <Head>
        <title>Field Service Group</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <CenterComponent>
          <h1>Field Service Group</h1>
          <select
            onChange={formik.handleChange}
            name="fsGroup"
            placeholder="Field Service Group"
            className="input"
          >
            <option value="Diles Group">Diles Group</option>
          </select>
          <PrimaryButton>Next</PrimaryButton>
        </CenterComponent>
      </form>
    </AppContainer>
  );
};

export default FieldServiceGroupPage;
