import axios from 'axios';
import { FETCH_WEATHER } from '../constants/actionTypes';

const API_KEY = 'f3219bd17088e68b406424cab86e46e4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}