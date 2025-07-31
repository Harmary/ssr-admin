import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.example.com",
    withCredentials: true,
});

export const fetcher = async <T>(url: string): Promise<T> => {
    const res = await axiosInstance.get(url);
    return res.data;
};
