import Axios from 'axios';
import links from '../../../links.json';

export const axiosInstance = (baseURL: string, post?: boolean) => {
  const axios = Axios.create({
    baseURL: links.origin + '/api/api/v1/' + baseURL,
    timeout: 30000,
  });

  const postAxios = Axios.create({
    baseURL: links.origin + '/post/api/api/v1/' + baseURL,
    timeout: 30000,
  });
  if(post) return postAxios;
  return axios;
}       