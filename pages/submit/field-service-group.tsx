import React from "react";
import { useTimeSubmitStore } from "./../../libs/stores";

const FieldServiceGroupPage = () => {
  const { congregation } = useTimeSubmitStore();

  return (
    <div>
      <p>{congregation}</p>
    </div>
  );
};

export default FieldServiceGroupPage;
