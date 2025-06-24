export interface tFlightItem {
  from: string;
  fromCode?: string;
  to: string;
  toCode?: string;
  numberRoute: number;
  airline: string;
  logo: string;
  progress: number;
}
