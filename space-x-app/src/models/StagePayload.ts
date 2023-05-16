export interface StagePayload {
  isReused?: boolean;
  customers?: Array<string>;
  nationality?: string;
  manufacturer: string;
  payloadType: string;
  payloadMassInKg?: number;
  orbit: string;
  capSerial: string;
  massReturnedInKgs?: number;
  flightTimeInSeconds?: number;
  cargoManifest: string;
}
