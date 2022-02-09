import { useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";
import { errorToast, successToast } from "./../../libs/customToast";
import { useTimeSubmitStore } from "./../../libs/stores";

const NamePage: NextPage = () => {
  const router = useRouter();
  const { month, setFirstName, setLastName } = useTimeSubmitStore();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: ({ firstName, lastName }) => {
      if (month !== "") {
        setFirstName(firstName);
        setLastName(lastName);
        successToast("Saved");
        router.push("/");
      } else {
        errorToast("Please do not refresh the page");
        errorToast("Restart process.");
      }
    },
  });

  return (
    <AppContainer>
      <Head>
        <title>Submit Name</title>
      </Head>

      <form onSubmit={formik.handleSubmit}>
        <CenterComponent>
          <h1>Name</h1>
          <input
            placeholder="First Name"
            className="input input--close"
            onChange={formik.handleChange}
            autoComplete="off"
            required={true}
            name="firstName"
            type="text"
          />
          <input
            autoComplete="off"
            required={true}
            placeholder="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            className="input input--close input--bottom"
            type="text"
          />
          <PrimaryButton>Next </PrimaryButton>
        </CenterComponent>
      </form>
    </AppContainer>
  );
};

export default NamePage;
