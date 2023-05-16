import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RocketDetails } from "../../../models/RocketDetails";
import RocketFirstStageDetails from "./RocketFirstStageDetails";
import RocketSecondStageDetails from "./RocketSecondStageDetails";
import RocketIcon from "@mui/icons-material/Rocket";

import styles from "./RocketDetailedInfo.module.css";

const RocketDetailedInfo = (props) => {
  const rocketDetails: RocketDetails = props.data;

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <Card>
          <CardContent style={{ display: "flex", justifyContent: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              <RocketIcon />
              <span className={styles["right-margin"]}>
                {rocketDetails.rocketName} - {rocketDetails.rocketType}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          {rocketDetails.firstStage && (
            <Grid item xs={6}>
              <RocketFirstStageDetails data={rocketDetails.firstStage} />
            </Grid>
          )}

          {rocketDetails.secondStage && (
            <Grid item xs={6}>
              <RocketSecondStageDetails data={rocketDetails.secondStage} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RocketDetailedInfo;
