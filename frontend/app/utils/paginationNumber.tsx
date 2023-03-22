import { NewsInterface } from "../news.interface";

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

let total_no_of_items: number = infoLength;
const items_per_page = 16;
let num_of_pages = total_no_of_items / items_per_page;

let page_number: number = 1;
let items_to_skip = (page_number - 1) * items_per_page;
let items = returnedData.slice(items_to_skip, items_to_skip + items_per_page);
console.log(items);
