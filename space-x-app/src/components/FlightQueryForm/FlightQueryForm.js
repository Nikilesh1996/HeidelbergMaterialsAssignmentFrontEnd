import { Button, Grid, Paper } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useState } from "react";
import { FlightQuery } from "../../models/FlightQuery";

import styles from "./FlightQueryForm.module.css";

const DEFAULT_START_DATE = new Date(2000, 0, 1);
const DEFAULT_END_DATE = new Date();

const FlightQueryForm = (props) => {
  const { onSubmit } = props;

  const [enteredStartDate, setEnteredStartDate] = useState(DEFAULT_START_DATE);
  const [enteredEndDate, setEnteredEndDate] = useState(DEFAULT_END_DATE);

  const endDateChangeHandler = (event) => {
    setEnteredEndDate(event.toDate());
  };

  const startDateChangeHandler = (event) => {
    setEnteredStartDate(event.toDate());
  };

  const onClearButtonClickHandler = () => {
    setEnteredStartDate(DEFAULT_START_DATE);
    setEnteredEndDate(DEFAULT_END_DATE);

    onSubmit(null);
  };

  const onSubmitHanlder = (event) => {
    event.preventDefault();
    const queryParams : FlightQuery = {
      startDateUtc: enteredStartDate, 
      endDateUtc: enteredEndDate
    };
    
    onSubmit(queryParams);
  };

  return (
    <Paper elevation={3}>
      <form className={styles["form-input"]} onSubmit={onSubmitHanlder}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={4}>
            <label>Start date</label>
            <DatePicker
              value={dayjs(enteredStartDate)}
              onChange={startDateChangeHandler}
              minDate={dayjs(new Date(2000, 0, 1))}
              maxDate={dayjs(enteredEndDate)}
              disableFuture={true}
            />
          </Grid>

          <Grid item xs={4}>
            <label>End Date</label>
            <DatePicker
              value={dayjs(enteredEndDate)}
              onChange={endDateChangeHandler}
              minDate={dayjs(enteredStartDate)}
              disableFuture={true}
            />
          </Grid>

          <Grid item xs={2}>
            <Button variant="outlined" onClick={onClearButtonClickHandler}>
              Clear
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FlightQueryForm;
