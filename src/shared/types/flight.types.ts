export interface IFlightAirplane {
  image: string;
  name: string;
}

export interface IFlightAirline {
  code: string;
  name: string;
  country: string;
  isoCode: string;
}

export interface IFlightRoute {
  speed: number;
  altitude: number;
}

export interface IFlightLocation {
  city: string;
  country: string;
  countryCode: string;
  timezone: string;
  code: string;
}

export interface IFlight {
  airplane: IFlightAirplane;
  route: IFlightRoute;
  logo: string;
  colorGradient: [string, string];
  airline: IFlightAirline;
  aircraftReg: string;
  from: IFlightLocation;
  to: IFlightLocation;
  progress: number;
}
