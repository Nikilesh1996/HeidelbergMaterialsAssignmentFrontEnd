import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import styles from "./FlightLaunchSummaryDetails.module.css";
import { FlightLaunchInformation } from "../../models/FlightLaunchInformation";

const FlightLaunchSummaryDetails = (props) => {
  const data: FlightLaunchInformation = props.data;

  const getLaunchDateString = () => {
    const epochSeconds: number = Date.parse(data.launchDateUtc);
    const launchDate: Date = new Date(epochSeconds);
    const formattedLaunchDateString: string = launchDate.toLocaleDateString(
      "en-us",
      {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

    return formattedLaunchDateString;
  };

  return (
    <CardContent sx={{ flex: "1 0 auto" }}>
      <Typography gutterBottom variant="h5" component="div">
        {data.missionName}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {data.details}
      </Typography>

      <div className={styles["row-space"]}></div>
      <Typography variant="body2" color="text.secondary">
        {`Launched from ${
          data.launchSite
        } on ${getLaunchDateString()}. This launch was ${
          data.launchSuccess ? "" : "not"
        } successful. `}
      </Typography>
    </CardContent>
  );
};

export default FlightLaunchSummaryDetails;
