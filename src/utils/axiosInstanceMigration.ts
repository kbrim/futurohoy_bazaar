import axios from "axios";

// Axios instance
const axiosInstanceMigration = axios.create({
  baseURL: "http://localhost:3001",
  // Axios configuration options here
});

export default axiosInstanceMigration;
