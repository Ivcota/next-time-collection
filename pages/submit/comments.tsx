// import React from "react";
// import { NextPage } from "next";
// import Head from "next/head";
// import AppContainer from "../../components/AppContainer";
// import CenterComponent from "../../components/CenterComponent";
// import PrimaryButton from "../../components/PrimaryButton";
// import { useFormik } from "formik";
// import { useRouter } from "next/router";
// import { useTimeSubmitStore } from "../../libs/stores";

// const CommentsPage: NextPage = () => {
//   const router = useRouter();
//   //   const { hours, setComm } = useTimeSubmitStore();
//   const formik = useFormik({
//     initialValues: {
//       comment: "",
//     },

//     onSubmit: ({ comment }) => {},
//   });

//   return (
//     <AppContainer>
//       <Head>
//         <title>Submit Time</title>
//       </Head>

//       <form onSubmit={formik.handleSubmit}>
//         <CenterComponent>
//           <h1>Comments</h1>

//           <input
//             placeholder="Comment"
//             className="input "
//             onChange={formik.handleChange}
//             autoComplete="off"
//             name="comment"
//             type="text"
//           />

//           <PrimaryButton>Next</PrimaryButton>
//         </CenterComponent>
//       </form>
//     </AppContainer>
//   );
// };

// export default CommentsPage;
