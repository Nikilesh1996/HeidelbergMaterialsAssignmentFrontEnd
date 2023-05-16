import { Card, CardContent, Typography } from "@mui/material";
import { RocketFirstStage } from "../../../models/RocketFirstStage";
import React from "react";
import NothingToDisplay from "./NothingToDisplay";
import CoreList from "./CoreList";
import styles from './RocketFirstStageDetails.module.css';

const RocketFirstStageDetails = (props) => {
  const data: RocketFirstStage = props.data;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          First Stage Details : Cores
        </Typography>
        <div className={styles['content-visibility-adjustment']}>
          <CoreList cores={data.cores} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RocketFirstStageDetails;
