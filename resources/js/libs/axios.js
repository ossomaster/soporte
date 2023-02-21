import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
});

export default httpClient;
