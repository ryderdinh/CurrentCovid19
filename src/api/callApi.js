import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";

export default async function callApi(endpoint) {
  try {
    const result = await axios({
      method: "GET",
      url: `${API_URL}/${endpoint}`,
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
}
