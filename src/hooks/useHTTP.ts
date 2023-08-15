import { useState, useCallback } from "react";

type reqConfigType = { url: string } & RequestInit;
type resHandlerType<T> = (data: T) => void;
type errorType = null | Error;

function useHTTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<errorType>(null);

  const sendRequest = useCallback(async function <T>(
    reqConfig: reqConfigType,
    resHandler: resHandlerType<T>
  ) {
    setIsLoading(true);
    try {
      const res = await fetch(reqConfig.url, {
        method: reqConfig.method || "GET",
        headers: reqConfig.headers || { "Content-Type": "application/json" },
        body: JSON.stringify(reqConfig.body) || null,
      });

      if (!res.ok) {
        throw new Error("Error in Response!");
      }

      const data: T = await res.json();

      resHandler(data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      const error = err as errorType;
      setError(error);
      setIsLoading(false);
    }
  },
  []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHTTP;
