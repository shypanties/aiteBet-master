import axios from "axios";

const BASE_URL = "http://localhost:5000";

export default {
  fetchAllScores: async () => {
    let res = await axios.get(`${BASE_URL}/scores`);
    return res.data || [];
  },
  createNewScore: async (body) => {
    let res = await axios.post(`${BASE_URL}/scores`, body);
    return res.data || [];
  },
};
