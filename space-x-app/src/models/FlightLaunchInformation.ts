import { ExternalLinks } from "./ExternalLinks";
import { RocketDetails } from "./RocketDetails";

export interface FlightLaunchInformation {
  flightNumber?: number;
  missionName: string;
  launchSuccess?: boolean;
  launchSite: string;
  launchDateUtc?: Date;
  isLaunchDateToBeDecided?: boolean;
  details: string;
  rocketDetails?: RocketDetails;
  links?: ExternalLinks;
}
