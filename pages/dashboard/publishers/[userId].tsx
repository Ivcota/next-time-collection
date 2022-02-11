import { collection, query as qpop, where } from "firebase/firestore";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AppContainer from "../../../components/AppContainer";
import AuthCheck from "../../../components/AuthCheck";
import PublisherComponent from "../../../components/PublisherComponent";
import { db } from "../../../libs/firebase";

const PublisherByIdPage: NextPage = () => {
  const { query } = useRouter();
  const collectionRef = collection(db, "field-service-groups");
  const q = qpop(
    collectionRef,
    where("overseerAccountId", "==", query.userId || "")
  );
  const [groups, loading, error] = useCollection(q);

  return (
    <AuthCheck>
      <AppContainer>
        <h1>Publishers</h1>
        {(groups?.docs[0].get("publishers") as []).map((doc: any) => {
          return (
            <div key={doc.id} className="spacer">
              <PublisherComponent fireBaseKey={doc.id} publisher={doc} />
            </div>
          );
        })}
      </AppContainer>
    </AuthCheck>
  );
};

export default PublisherByIdPage;
