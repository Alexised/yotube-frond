import axios from "axios";

export const searchVideo = axios.create({
  baseURL: "http://localhost:6060/searchVideo",
});

