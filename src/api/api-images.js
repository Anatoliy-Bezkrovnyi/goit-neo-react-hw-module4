import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const API_KEY = "lmOBl746bVY7Yz6TWhAmXT8eXcGJ7FXJRj_Xfx3xw7E";
//const API_KEY = "2L1HK4S7Ugms_bht9uBsYeLH89O3iR0GMJrMwCc2q5g";

export const fetchImagesByFilter = async({ query, per_page=10, page }) => {
  const response = await axios.get(`search/photos`, {
    params: {
      client_id: API_KEY,
      query,      
      per_page,
      page,
    }
  });
  return response.data;
};