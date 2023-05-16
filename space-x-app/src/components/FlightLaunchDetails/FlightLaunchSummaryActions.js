import { Box, Button } from "@mui/material";

const FlightLaunchSummaryActions = (props) => {
  const links = props.links;

  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
      <Button size="small" href={links.wikipediaLink}>
        Learn more from wiki
      </Button>
      <Button size="small" href={links.videoLink}>
        Watch launch video
      </Button>
    </Box>
  );
};

export default FlightLaunchSummaryActions;
