import { Card, CardContent, Typography } from "@mui/material";
import { RocketSecondStage } from "../../../models/RocketSecondStage";
import React from "react";
import NothingToDisplay from "./NothingToDisplay";
import PayloadList from "./PayloadList";
import styles from "./RocketSecondStageDetails.module.css";

const RocketSecondStageDetails = (props) => {
  const data: RocketSecondStage = props.data;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Second Stage Details : Payloads
        </Typography>
        <div className={styles['content-visibility-adjustment']}>
          <PayloadList payloads={data.payloads} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RocketSecondStageDetails;
