import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./FlightLaunchDetails.module.css";
import { FlightLaunchInformation } from "../../models/FlightLaunchInformation";
import FlightLaunchesQueryService from "../../services/FlightLaunchesQueryService";
import FlightLaunchSummary from "./FlightLaunchSummary";
import { useSearchParams } from "react-router-dom"
import { withRouter } from "react-router-dom";

const FlightLaunchDetails = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const flightNumber: number = searchParams.get("flightNumber");

  const [flightLaunchInformation, setFlightLaunchInformation] = useState();
  const service: FlightLaunchesQueryService = new FlightLaunchesQueryService();

  const initComponentFlightDetailsInformation = () => {
    service.getLaunchById(flightNumber).then((response) => {
      setFlightLaunchInformation(response);
    });
  };

  useEffect(() => {
    initComponentFlightDetailsInformation();
  }, [flightNumber]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          {flightLaunchInformation && (
            <FlightLaunchSummary summary={flightLaunchInformation} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FlightLaunchDetails;
