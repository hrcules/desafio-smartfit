import { Location } from "./location.interface";

export interface UnitsResponse {
  data: {
    current_country_id: number;
    locations: Location[];
  };
}
