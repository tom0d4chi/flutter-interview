import axios from "axios";

export async function fetchCarByImmat(immat: string) {
    const response = await axios.get(
      `https://public-api-dev-nejfeydtja-oa.a.run.app/api/v1/underwriting/car/finitions_theoriques_by_license_plate?license_plate=${immat}`
    );
    return response.data;
  }