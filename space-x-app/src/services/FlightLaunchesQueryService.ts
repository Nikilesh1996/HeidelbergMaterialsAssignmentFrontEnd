import { FlightQuery } from "../models/FlightQuery";

export default class FlightLaunchesQueryService {
  baseUrl: string = "http://localhost:47528/api/flightlaunches";

  async getAllLaunches() {
    const url = `${this.baseUrl}/allLaunches`;

    return await fetch(url, {
      method: "get",
      headers: this.getDefaultHeaders(),
    }).then((response) => response.json());
  }

  async getLaunchById(flightNumber: number) {
    const url = `${this.baseUrl}/launch/${flightNumber}`;

    return await fetch(url, {
      method: "get",
      headers: this.getDefaultHeaders(),
    }).then((response) => response.json());
  }

  async getLaunchesWithFilter(queryParams: FlightQuery) {
    const url = `${this.baseUrl}/launches`;

    return await fetch(url, {
      method: "post",
      headers: this.getDefaultHeaders(),
      body: JSON.stringify(queryParams),
    }).then((response) => response.json());
  }

  private getDefaultHeaders() {
    return {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    };
  }
}
