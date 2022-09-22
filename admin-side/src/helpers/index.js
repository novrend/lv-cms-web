export const fetching = (url, method = "GET", headers = null, body = null) => {
  const fetching = fetch(url, {
    method,
    headers: {
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  })
    .then((response) => {
      return response.json();
    })
  return fetching;
};
