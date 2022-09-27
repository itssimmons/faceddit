import { $api } from "./instances";

export const getPosts = async () => await (
  $api({
    method: 'get',
    url: '/posts'
  })
)