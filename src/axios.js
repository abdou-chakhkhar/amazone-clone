import axios from "axios";

const instance = axios.create({
  // the api (cloud function) URL
  baseURL: "",
});

export default instance;
