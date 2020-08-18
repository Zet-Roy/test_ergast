import axios from 'axios';

export const request = axios.create({
    baseURL: "http://ergast.com/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});