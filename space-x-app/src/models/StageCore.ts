export interface StageCore {
  coreSerial: string;
  hasGridFins?: boolean;
  hasLegs?: boolean;
  isReused?: boolean;
  isLandingSuccessful?: boolean;
  landingType: string;
  landingVehicle: string;
}
