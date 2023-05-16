import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { StagePayload } from "../../../models/StagePayload";
import styles from "./PayloadDetails.module.css";

const PayloadDetails = (props) => {
  const data: StagePayload = props.data;

  const getCommaSeperatedString = (array: Array<string>) => {
    const value = array.reduce((previous, current) => `${previous},${current}`);
    return value;
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.capSerial} {data.payloadType} {data.cargoManifest}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {`This payload was ${
              data.isReused ? "" : "not"
            } reused. Customers included ${getCommaSeperatedString(
              data.customers
            )}.Orbit is ${data.orbit}. Manufactured by ${data.manufacturer}${
              data.nationality ? ` in ${data.nationality}.` : "."
            }`}
          </Typography>
        </CardContent>
      </Card>
      <div className={styles["margin-bottom-min"]}></div>
    </>
  );
};

export default PayloadDetails;
