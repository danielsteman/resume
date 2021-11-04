const axios = require('axios').default;

const baseUrl = 'http://localhost:8000/api/v2';

const get = async (endpoint: string) => {
  try {
    const res = await axios.get(`${baseUrl}/${endpoint}`);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export default get;
