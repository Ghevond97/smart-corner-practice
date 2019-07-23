import axios from 'axios';

export const getPosts = async (start, limit) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const res = await axios
      .get(url, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.data)
      .then(data => data.slice(start, limit));
    if (res) {
      return res;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
