import axios from "axios";
const instance = axios.create({
  baseURL: "https://amazonbackend-qk38.onrender.com",
});
export default instance;
