export interface Journey {
  journeyKey: string;
  designator: {
    arrival: string;
    departure: string;
  };
  fares: object;
}
