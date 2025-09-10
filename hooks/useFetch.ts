import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>({ url }: { url: string }): UseFetchResult<T> => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      console.log("Raw response:", response.data);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refresh };
};

export default useFetch;
