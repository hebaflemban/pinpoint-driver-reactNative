import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.101.8:8000/",
});

export default instance;
