import { useState, useEffect } from "react";

function useFetch(url, method, headers, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!body) {
      fetch(url, {
        method,
        headers: {
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      })
        .then((response) => {
          return response.json();
        })
        .then((resp) => {
          setData(resp);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const fetching = () => {
    fetch(url, {
      method,
      headers: {
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, fetching };
}

export default useFetch;
