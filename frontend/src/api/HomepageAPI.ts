import get from './APIUtils';

const getHomePage = (fields: string[]) => {
  const endpoint = `pages/?type=resume.Home&fields=${fields.join()}`;
  const data = get(endpoint);
  return data;
};

export default getHomePage;
