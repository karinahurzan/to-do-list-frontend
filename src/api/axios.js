import axios from "axios";

export const api = axios.create({
  baseURL: "https://to-do-list-nce4.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
