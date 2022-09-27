import { GIPHY_KEY } from '@/env';
import axios from 'axios'

const TOKEN = localStorage.getItem('l-token') || sessionStorage.getItem('s-token')

export const $api = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

export const $auth = axios.create({ baseURL: '/auth' });

export const $giphy = axios.create({
  baseURL: '/giphy',
  params: {
    api_key: GIPHY_KEY,
  }  
});