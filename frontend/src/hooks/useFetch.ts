import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setData({});
    setError('');
    const source = axios.CancelToken.source();
    axios.get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        // eslint-disable-next-line no-console
        console.log(res);
        // res.data && setData(res.data);
        // res && setData(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
