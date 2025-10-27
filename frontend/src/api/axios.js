import axios from "axios";

const axios = axios.create({
    baseURL: "http://localhost:5001",
});

export default axios;