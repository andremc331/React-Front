import axios from "axios";

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
  headers: {
    "Content-Type": "application/json",
  }
});