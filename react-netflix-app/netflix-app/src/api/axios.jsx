import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d6bc2249cd3d4f7687fcd1758b98f731",
        language: "ko-KR",
    },
});

export default instance;