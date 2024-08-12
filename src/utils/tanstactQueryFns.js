import axios from "axios";

export const productsDataFn = async ({queryKey}) => {
  const response = await axios.get(`http://localhost:8000/${queryKey[0]}`);
  return response.data;
};

export const productDataFn = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/products/${queryKey[1]}`
  );
  return response.data;
};