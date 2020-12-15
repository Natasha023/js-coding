// import "whatwg-fetch"; // for browsers that don't support fetch
import getBaseUrl from "./baseUrl";

const baseUrl = 'http://localhost:3001/';

export const getUsers = () => {
  return get("users");
}

const get = (url) => {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

const onSuccess = (response) => {
  return response.json();
}

const onError = (error) => {
  console.log(error);
}
