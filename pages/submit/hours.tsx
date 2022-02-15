import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AppContainer from "../../components/AppContainer";
import CenterComponent from "../../components/CenterComponent";
import PrimaryButton from "../../components/PrimaryButton";
import { errorToast } from "./../../libs/customToast";
import { useTimeSubmitStore } from "./../../libs/stores";

const HoursPage = () => {
  const router = useRouter();
  const {
    setHours,
    setPlacements,
    setVideos,
    firstName,
    setBibleStudies,
    setReturnVisits,
  } = useTimeSubmitStore();
  const formik = useFormik({
    initialValues: {
      hours: 0,
      videos: 0,
      placements: 0,
      bibleStudies: 0,
      returnVisits: 0,
    },
    onSubmit: ({ hours, placements, videos, bibleStudies, returnVisits }) => {
      if (firstName !== "") {
        setHours(hours);
        setPlacements(placements);
        setBibleStudies(bibleStudies);
        setReturnVisits(returnVisits);
        setVideos(videos);
        router.push("/submit/finished");
      } else {
        errorToast("Please do not refresh the page");
        errorToast("Restart process.");
        router.push("/");
      }
    },
  });

  return (
    <AppContainer>
      <Head>
        <title>Submit Time</title>
      </Head>

      <form onSubmit={formik.handleSubmit}>
        <CenterComponent>
          <h1>Almost Done</h1>

          <input
            placeholder="Hours"
            className="input input--close"
            onChange={formik.handleChange}
            autoComplete="off"
            name="hours"
            type="number"
            required={true}
          />
          <input
            placeholder="Placements"
            className="input input--close"
            onChange={formik.handleChange}
            autoComplete="off"
            name="placements"
            type="number"
            required={true}
          />
          <input
            placeholder="Bible Studies"
            className="input input--close"
            onChange={formik.handleChange}
            autoComplete="off"
            name="bibleStudies"
            type="number"
            required={true}
          />
          <input
            placeholder="Return Visits"
            className="input input--close"
            onChange={formik.handleChange}
            autoComplete="off"
            name="returnVisits"
            type="number"
            required={true}
          />
          <input
            placeholder="Videos"
            className="input input--close input--bottom"
            onChange={formik.handleChange}
            autoComplete="off"
            name="videos"
            required={true}
            type="number"
          />

          <PrimaryButton>Next</PrimaryButton>
        </CenterComponent>
      </form>
    </AppContainer>
  );
};

export default HoursPage;
