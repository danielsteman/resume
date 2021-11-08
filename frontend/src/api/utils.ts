const axios = require('axios').default;

const baseUrl = 'http://192.168.2.11:3000/api/v2';

const get = async (endpoint: string) => {
  try {
    const res = await axios.get(`${baseUrl}/${endpoint}`);
    return res.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }
};

const getFields = async (page: string, fields: string[]) => {
  const endpoint = `pages/?type=resume.${page}&fields=_,${fields.join()}`;
  const data = await get(endpoint);
  return data.items[0];
};

export default getFields;
