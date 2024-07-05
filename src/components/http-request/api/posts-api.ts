import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const createPost = (data: any) => axios.post(`${API_URL}/posts`, data);

export const deletePost = (id: number) =>
  axios.delete(`${API_URL}/posts/${id}`);
