import { Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import FlightLaunchList from "../FlightLaunchLists/FlightLaunchList";
import FlightQueryForm from "../FlightQueryForm/FlightQueryForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LaunchDetails } from "../../models/LaunchDetails";
import { FlightQuery } from "../../models/FlightQuery";
import { createSearchParams, useNavigate } from "react-router-dom";

const FlightLaunches = (props) => {
  const navigate = useNavigate();  
  const [queryParams, setQueryParams] = useState(null);

  const reRouteToDetailsPage = (row : LaunchDetails) => {
    navigate({
        pathname: '/launchDetails',
        search : createSearchParams({
            flightNumber : row.flightNumber
        }).toString()
    })
  }
  
  const onFormSubmitHandler = (queryParams : FlightQuery) => {
    setQueryParams(queryParams);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FlightQueryForm onSubmit={onFormSubmitHandler} />
        </Grid>

        <Grid item xs={12}>
          <FlightLaunchList parameters={queryParams} onRowSelect={reRouteToDetailsPage}/>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default FlightLaunches;
