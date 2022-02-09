import React from "react";
import Head from "next/head";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import { useTimeSubmitStore } from "./../../libs/stores";
import PrimaryButton from "../../components/PrimaryButton";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../libs/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { toast } from "react-hot-toast";
import { errorToast } from "../../libs/customToast";
import { successToast } from "./../../libs/customToast";

const FieldServiceGroupPage = () => {
  const { congregation } = useTimeSubmitStore();

  const fieldServiceGroupsRef = collection(db, "field-service-groups");
  const q = query(
    fieldServiceGroupsRef,
    where("congregation", "==", congregation)
  );
  const [fieldServiceGroups, loading, error] = useCollection(q);

  const router = useRouter();
  const { setFieldServiceGroup } = useTimeSubmitStore();

  const formik = useFormik({
    initialValues: {
      fsGroup: "",
    },
    onSubmit: ({ fsGroup }) => {
      if (fsGroup !== "") {
        setFieldServiceGroup(fsGroup);
        successToast("Saved");
        router.push("/submit/month");
      } else {
        errorToast("Please select a field service group");
      }
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
            value={formik.values.fsGroup}
          >
            <option value="">Select Field Service Group</option>
            {fieldServiceGroups?.docs.map((doc) => {
              return (
                <option key={doc.id} value={doc.id}>
                  {doc.data().name}
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

export default FieldServiceGroupPage;
