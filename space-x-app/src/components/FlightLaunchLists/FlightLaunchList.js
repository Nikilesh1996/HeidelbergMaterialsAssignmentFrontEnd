import { Paper, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import styles from "./FlightLaunchList.module.css";
import { LaunchDetails } from "../../models/LaunchDetails";
import { FlightQuery } from "../../models/FlightQuery";
import FlightLaunchesQueryService from "../../services/FlightLaunchesQueryService";
import { Flight } from "@mui/icons-material";
import NoFlightLaunches from "./NoFlightLaunches";

const HEADER_CONFIGURATION: GridColDef[] = [
  { field: "rocketName", headerName: "Rocket Name", flex: 1 },
  { field: "rocketType", headerName: "Rocket Type", flex: 1 },
  { field: "missionName", headerName: "Mission Name", flex: 1 },
  { field: "launchDateUtc", headerName: "Launch Date", flex: 1 },
];

const PAGE_SIZE = 6;

const FlightLaunchList = (props) => {
  const queryParameters: FlightQuery = props.parameters;

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [dataGridItems, setDataGridItems] = useState([]);

  const launchService: FlightLaunchesQueryService =
    new FlightLaunchesQueryService();

  const initComponentWithAllLaunches = () => {
    setIsDataLoaded(false);

    launchService.getAllLaunches().then((result: LaunchDetails[]) => {
      const resultWithIds = result.map((x, index) => {
        return { ...x, id: index };
      });

      setDataGridItems(resultWithIds);
      setIsDataLoaded(true);
    });
  };

  const initComponentWithQueryParams = () => {
    setIsDataLoaded(false);

    launchService
      .getLaunchesWithFilter(queryParameters)
      .then((result: LaunchDetails[]) => {
        const resultWithIds = result.map((x, index) => {
          return { ...x, id: index };
        });

        setDataGridItems(resultWithIds);
        setIsDataLoaded(true);
      });
  };

  useEffect(() => {
    if (queryParameters == null) {
      initComponentWithAllLaunches();
    } else {
      initComponentWithQueryParams();
    }
  }, [queryParameters]);

  const onRowClickHandler = (event) => {
    const selectedRow: LaunchDetails = dataGridItems.find(x => x.id === event.id);
    props.onRowSelect(selectedRow);
  };

  return (
    <Paper elevation={3}>
      <div className={styles.table}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={12}>
            {dataGridItems && dataGridItems.length > 0 ? (
              <DataGrid
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: PAGE_SIZE,
                    },
                  },
                }}
                onRowClick={onRowClickHandler}
                pageSizeOptions={[5]}
                loading={!isDataLoaded}
                rows={dataGridItems}
                columns={HEADER_CONFIGURATION}
              />
            ) : (
              <NoFlightLaunches />
            )}
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default FlightLaunchList;
