"use client";

import { NewsInterface } from "../news.interface";
const axios = require("axios").default;

export const getNews = async (): Promise<NewsInterface[]> => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL_BACKEND;
  const response = await axios.get(`${url}news/updated`);
  const info = await response.data;
  return info;
};

export const deleteNews = async (id: number) => {
  const url =
    process.env.NEXT_PUBLIC_SERVER_URL_BACKEND || "http://localhost:8000/";
  const response = await axios.delete(`${url}news/${id}`);
  const info = await response.data;
  return info;
};
