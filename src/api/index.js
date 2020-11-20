import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const fetchData = async () => {
  try {
    const data = await axios.get(url);
    return {
      confirmed: data.data.statewise[0].confirmed,
      deaths: data.data.statewise[0].deaths,
      recovered: data.data.statewise[0].recovered,
      lastupdatedtime: data.data.statewise[0].lastupdatedtime,
    };
  } catch (e) {}
};

export const fetchState = async () => {
  try{
    const response = await axios.get(url);
    return response.data.statewise;
  } catch(e) {}
}