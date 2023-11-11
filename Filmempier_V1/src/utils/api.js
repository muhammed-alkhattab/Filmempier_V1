import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUxNWU4YTFiZjlhM2EwYTk4NmRkMDZkMjM5YmExMiIsInN1YiI6IjY0N2YyNWNiY2Y0YjhiMDBlMmQ3NTI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lQTOBNBAanPkX0EB_PTff8J_MZZXJ12NO3x6chxbKuU";

const headers = {
    accept:'application/json',
    Authorization: "Bearer " + TMDB_TOKEN
    
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
