import { useState, useEffect } from 'react';

const axios = require('axios').default;

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000/api/v2'
  : 'https://www.danielsteman.com/api/v2';

const useFetch = <T extends any = any>(page: string, fields: string[]) => {
  const [data, setData] = useState<T | {}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const endpoint = `pages/?type=resume.${page}&fields=_,${fields.join()}`;

  useEffect(() => {
    (async function getContent() {
      try {
        const res = await axios.get(`${baseUrl}/${endpoint}`);
        setData(res.data.items[0]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    }());
  }, []);

  if (error) return { errorMessage: `Failed to fetch ${JSON.stringify(fields)} from ${page}` };
  return { data, loading, error };
};

export default useFetch;
