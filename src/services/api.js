import axios from "axios";

const api = axios.create({
  baseURL: "https://shielded-reaches-13251.herokuapp.com/",
});

export default api;
