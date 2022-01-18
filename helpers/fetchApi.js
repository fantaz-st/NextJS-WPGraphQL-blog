const GRAPHQL_URL = process.env.WORDPRESS_LOCAL_API_URL;
const headers = { 'Content-Type': 'application/json' };

export const fetchApi = async (query) => {
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
      }),
    });

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err.message || 'Something went wrong');
  }
};
