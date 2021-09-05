import axios from "axios";

export const api = axios.create({
  baseURL: "https://aulaa-deploy-heroku.herokuapp.com/",
});
