import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";
import PrimaryLink from "../../components/PrimaryLink";
import { useTimeSubmitStore } from "../../libs/stores";

const SubmitCongregationPage = () => {
  const router = useRouter();

  const { setCongregation } = useTimeSubmitStore();

  const formik = useFormik({
    initialValues: {
      congregation: "Casa Grande West",
    },
    onSubmit: ({ congregation }) => {
      setCongregation(congregation);
      router.push("/submit/field-service-group");
    },
  });

  return (
    <AppContainer>
      <Head>
        <title>Start Form</title>
      </Head>
      <main>
        <form onSubmit={formik.handleSubmit}>
          <CenterComponent>
            <h1>Congregation</h1>

            <select
              value={formik.values.congregation}
              name="congregation"
              className="input"
              onChange={formik.handleChange}
            >
              <option value="Casa Grande West">Casa Grande West</option>
            </select>

            <PrimaryButton>Next</PrimaryButton>
          </CenterComponent>
        </form>
      </main>
    </AppContainer>
  );
};

export default SubmitCongregationPage;
