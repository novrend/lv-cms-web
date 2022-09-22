export const fetching = (url, method = "GET", headers = null, body = null) => {
  return fetch(url, {
    method,
    headers: {
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  }).then((response) => {
    return response.json();
  });
};
