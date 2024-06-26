import axios from "axios";

export const getApiData = async () => {
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  console.log(data);
  return data;
};
