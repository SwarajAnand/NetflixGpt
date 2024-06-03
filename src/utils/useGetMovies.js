import axios from 'axios';
import { useEffect, useState } from 'react';
import { nowPlayingUrl } from './constants';

export const defaultOptions = {
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjU4NjY4OTNjNjBiYTVjYmYwZTY3MThiZGQ2NzMxMCIsInN1YiI6IjY1Y2JiYTFjOGM0NGI5MDE4MDk0MTc5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pRwXeZxUfIkxE78P1llG_i4SlD3CV6i8dfhHeU9Y1EI'
  }
};

function useFetch(url = nowPlayingUrl, method = 'GET') {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = { ...defaultOptions, method, url };

    axios
      .request(fetchOptions)
      .then((response) => {
        setData(response?.data?.results);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url, method]);

  return [data, loading, error];
}

export default useFetch;
