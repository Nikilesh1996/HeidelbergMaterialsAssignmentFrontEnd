import React from "react";
import styles from "./FlightLaunchSummary.module.css";
import { FlightLaunchInformation } from "../../models/FlightLaunchInformation";
import { Box, Card, CardMedia, Grid, Paper } from "@mui/material";
import FlightLaunchSummaryDetails from "./FlightLaunchSummaryDetails";
import FlightLaunchSummaryActions from "./FlightLaunchSummaryActions";
import FlightLaunchMissionPatch from "./FlightLaunchMissionPatch";
import RocketSecondStageDetails from "./RocketStages/RocketSecondStageDetails";
import RocketFirstStageDetails from "./RocketStages/RocketFirstStageDetails";
import RocketDetailedInfo from "./RocketStages/RocketDetailedInfo";

// Fixed number of columns
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
};

// Variable number of columns
const gridContainer2 = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column",
};

const gridItem = {
  margin: "8px",
  border: "1px solid red",
};

const FlightLaunchSummary = (props) => {
  const summary: FlightLaunchInformation = props.summary;

  return (
    <div className={styles["outer-container"]}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", padding: "1em" }}>
            {summary && summary.links && summary.links.missionPatch && (
              <FlightLaunchMissionPatch links={summary.links} />
            )}

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FlightLaunchSummaryDetails data={summary} />

              {summary && summary.links && (
                <FlightLaunchSummaryActions links={summary.links} />
              )}
            </Box>
          </Card>
        </Grid>

        {summary.rocketDetails && (
          <>
            <Grid item xs={12}>
              <RocketDetailedInfo data={summary.rocketDetails} />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default FlightLaunchSummary;
