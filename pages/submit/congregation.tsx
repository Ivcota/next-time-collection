import { collection } from "firebase/firestore";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { toast } from "react-hot-toast";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";
import { errorToast, successToast } from "../../libs/customToast";
import { useTimeSubmitStore } from "../../libs/stores";
import { db } from "./../../libs/firebase";

const SubmitCongregationPage = () => {
  const congregationsRef = collection(db, "congregations");
  const [congregations, loading, error] = useCollection(congregationsRef);

  const router = useRouter();
  const { setCongregation } = useTimeSubmitStore();

  const formik = useFormik({
    initialValues: {
      congregation: "",
    },
    onSubmit: ({ congregation }) => {
      if (congregation !== "") {
        setCongregation(congregation);
        successToast("Saved");
        router.push("/submit/field-service-group");
      } else {
        errorToast("Please select a congregation");
      }
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
              <option value="">Select Congregation</option>;
              {congregations?.docs.map((doc) => {
                return (
                  <option value={doc.id} key={doc.id}>
                    {doc.data().name}
                  </option>
                );
              })}
            </select>

            <PrimaryButton>Next</PrimaryButton>
          </CenterComponent>
        </form>
      </main>
    </AppContainer>
  );
};

export default SubmitCongregationPage;
