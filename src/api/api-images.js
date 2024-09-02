import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesByFilter = async topic => {
  const response = await axios.get(`search/photos?query=${filter}`);
  return response.data.hits;
};