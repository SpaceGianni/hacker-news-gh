import { NewsInterface } from "../news.interface";
import React, { useState } from "react";

const axios = require("axios").default;
let infoLength: number = 1;
let returnedData;

export const getUpdatedNews = async (): Promise<NewsInterface[]> => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL_BACKEND;
  const response = await axios.get(`${url}news/updated`);
  const info = await response;
  infoLength = info.length;
  returnedData = await response.data;
  console.log("infoLength", infoLength, "returnedData", returnedData);
  return returnedData;
};
