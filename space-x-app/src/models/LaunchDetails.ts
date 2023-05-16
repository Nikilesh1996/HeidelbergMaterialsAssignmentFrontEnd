export interface LaunchDetails {
  flightNumber: string;
  rocketName: string;
  rocketType: string;
  launchDateUtc?: Date;
  missionName: string;
  isLaunchDateToBeDecided?: boolean;
}
