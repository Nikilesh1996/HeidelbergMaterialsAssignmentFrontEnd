import React from "react";
import { StageCore } from "../../../models/StageCore";
import CoreDetails from "./CoreDetails";
import NothingToDisplay from "./NothingToDisplay";

const CoreList = (props) => {
  const cores: Array<StageCore> = props.cores;

  return (
    <>
      {cores && cores.length > 0 ? (
        cores
          .map((core) => {
            return { ...core, id: Math.random().toString() };
          })
          .map((core) => <CoreDetails key={core.id} data={core} />)
      ) : (
        <NothingToDisplay />
      )}
    </>
  );
};

export default CoreList;
