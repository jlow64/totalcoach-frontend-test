import axios from 'axios';

const url = 'http://localhost:4000';

export const getFeeds = async (source: string) => {
  const res = await axios.get(`${url}/api/feed?source=${source}`);
  return res.data;
};

export const getProfile = async () => {
  const res = await axios.get(`${url}/api/profile`);
  return res.data;
};

export const getLessonMapUI = async () => {
  const res = await axios.get(`${url}/api/map-ui`);
  return res.data;
};
