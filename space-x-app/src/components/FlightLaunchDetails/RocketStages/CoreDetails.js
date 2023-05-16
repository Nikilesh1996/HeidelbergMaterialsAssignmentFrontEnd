import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { StageCore } from "../../../models/StageCore";
import styles from "./CoreDetails.module.css";

const CoreDetails = (props) => {
  const data: StageCore = props.data;

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.coreSerial} {data.landingVehicle} {data.landingType}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`This core was ${data.isReused ? "" : "not"} reused. Landing did ${
              data.isLandingSuccessful ? "" : "not"
            } succeed. It did ${data.hasGridFins ? "" : "not"} have gridfins.`}
          </Typography>
        </CardContent>
      </Card>
      <div className={styles["margin-bottom-min"]}></div>
    </>
  );
};

export default CoreDetails;
