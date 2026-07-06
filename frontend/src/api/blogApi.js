import axios from "axios";
import { API_BASE_URL } from "../config";

const API = axios.create({
  baseURL: API_BASE_URL, // change in production
});

export const fetchBlogs = async () => {
  const { data } = await API.get("/blogs");
  return data;
};