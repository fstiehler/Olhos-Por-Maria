// eslint-disable-next-line
import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.REACT_APP_NODE_ENV === 'production';



export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (isProduction) {
    response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/products/actives/${process.env.REACT_APP_COMPANY_ID}`
    );
  } else {
    response = require('static/json/products.json');
  }

  console.log(response.data)

  const { products } = response.data || [];

  return products;
};
