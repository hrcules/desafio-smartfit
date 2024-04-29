import axios from "axios";
import { UnitsResponse } from "../utils/types/units-response.interface";

const baseURL = "https://test-frontend-developer.s3.amazonaws.com/data";

const request = axios.create({
  baseURL,
  timeout: 10000, // 10s timeout
});

export const getAllUnits = async () => {
  try {
    const response: UnitsResponse = await request.get("locations.json");

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};
