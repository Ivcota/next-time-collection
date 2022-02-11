import React, { FC } from "react";
import PrimaryButton from "./PrimaryButton";

interface Props {
  fireBaseKey: any;
  publisher: any;
}

const PublisherComponent: FC<Props> = ({ fireBaseKey, publisher }) => {
  return (
    <PrimaryButton key={fireBaseKey}>
      {(publisher as any).firstName} {(publisher as any).lastName}
    </PrimaryButton>
  );
};

export default PublisherComponent;
