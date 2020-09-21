import axios from "axios";

const instance = axios.create({
  // the api (cloud function) URL
  baseURL: "http://localhost:5001/e-clone-35aa1/us-central1/api",
});

export default instance;
