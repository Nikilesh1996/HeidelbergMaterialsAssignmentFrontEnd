import React from "react";
import { StagePayload } from "../../../models/StagePayload";
import NothingToDisplay from "./NothingToDisplay";
import PayloadDetails from "./PayloadDetails";

const PayloadList = (props) => {
  const payloads: Array<StagePayload> = props.payloads;

  return (
    <>
      {payloads && payloads.length > 0 ? (
        payloads
          .map((x) => {
            return { ...x, id: Math.random().toString() };
          })
          .map((payload) => <PayloadDetails key={payload.id} data={payload} />)
      ) : (
        <NothingToDisplay />
      )}
    </>
  );
};

export default PayloadList;
