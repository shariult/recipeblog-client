import { useEffect, useState } from "react";

function useFetchGet(apiURL) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((resData) => {
        setIsLoading(false);
        setError(null);
        setData(resData);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [apiURL]);
  return { isLoading, data, error };
}

export default useFetchGet;
