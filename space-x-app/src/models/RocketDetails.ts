import { RocketFirstStage } from "./RocketFirstStage";
import { RocketSecondStage } from "./RocketSecondStage";

export interface RocketDetails {
  rocketName: string;
  rocketType: string;
  firstStage?: RocketFirstStage;
  secondStage?: RocketSecondStage;
}
