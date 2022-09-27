import { $giphy } from "./instances";
import type { GiphyParams } from "@/types";

export const getGifs = async (params?: GiphyParams) => {
  let url = '/v1/gifs/trending'
  let baseParams = {
    limit: 12,
  }

  if (params) {
    baseParams = {
      ...baseParams,
      ...params
    }

    url = params.q ? '/v1/gifs/search' : url;
  }

  return await (
    $giphy({
      method: 'get',
      params: baseParams,
      url
    })
  )
}