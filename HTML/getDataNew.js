// base url
export const baseUrl = "https://api.escuelajs.co/api/v1/";

// products, users
export async function getData(endpoint) {
  const response = await fetch(baseUrl + endpoint);
  // convert data to javascript object
  const data = await response.json();
  return data;
}
