import { CardMedia } from "@mui/material";

const FlightLaunchMissionPatch = (props) => {
  const links = props.links;

  return (
    <CardMedia
      component="img"
      sx={{ width: 200 }}
      image={links.missionPatch}
      alt="Space x mission patch"
    />
  );
};

export default FlightLaunchMissionPatch;
