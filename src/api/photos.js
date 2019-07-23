import axios from 'axios';

export const getPhotos = async (start, limit) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = axios
      .get(url, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.data)
      .then(data => data.slice(start, limit));
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
