import { useState, useEffect } from 'react';
import urlExtractor from '../utils/urlExtractor';

const axios = require('axios').default;

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000/api/v2'
  : 'https://www.danielsteman.com/api/v2';

const useFetch = <T extends any = any>(api: string, page: string, fields: string[]) => {
  const [data, setData] = useState<T | {}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const endpoint = urlExtractor(api, page, fields);

  useEffect(() => {
    (async function getContent() {
      try {
        const res = await axios.get(`${baseUrl}/${endpoint}`);
        setData(res.data.items[0]);
      } catch (e) {
        setError(`An error occurred: ${e}`);
      } finally {
        setLoading(false);
      }
    }());
  }, []);

  if (error) return { errorMessage: `Failed to fetch ${JSON.stringify(fields)} from ${page}` };
  return { data, loading, error };
};

export default useFetch;
