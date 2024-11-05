import axios from "axios";

// Axios instance
const axiosInstanceMigration = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Axios configuration options here
});

export default axiosInstanceMigration;
