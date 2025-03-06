import axios from "axios";

const API = axios.create({
  baseURL: "https://dashboard-server-1-fcxo.onrender.com/",
  headers: { "Content-Type": "application/json" },
});

export default API;
