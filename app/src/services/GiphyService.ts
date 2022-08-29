import axios from "axios";
import { GIPHY_KEY } from "@/env";

export const getGifs = async () => await (
  axios({
    method: 'get',
    url: '/giphy/v1/gifs/trending',
    params: {
      api_key: GIPHY_KEY,
      limit: 8,
    }
  })
)