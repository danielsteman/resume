import { useState, useEffect } from 'react';
import urlExtractor from '../utils/urlExtractor';

const axios = require('axios').default;

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000/api/v2'
  : 'https://www.danielsteman.com/api/v2';

const useFetch = <T extends any = any>(namespace: string, page?: string, fields?: string[]) => {
  const [data, setData] = useState<T | {}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const endpoint = urlExtractor(namespace, page, fields);

  useEffect(() => {
    (async function getContent() {
      try {
        const res = await axios.get(`${baseUrl}/${endpoint}`);
        if (namespace === 'mlresults') { // needs cleaner solution
          setData(res);
        } else {
          setData(res.data.items[0] || res);
        }
      } catch (e) {
        setError(`An error occurred: ${e}`);
      } finally {
        setLoading(false);
      }
    }());
  }, []);

  if (error) return { errorMessage: `Failed to fetch ${JSON.stringify(fields)} from ${page}` };
  if (namespace === 'mlresults') {
    console.log(data);
  }
  return { data, loading, error };
};

export default useFetch;
