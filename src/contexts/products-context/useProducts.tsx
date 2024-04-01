import { useCallback } from 'react';

import { useProductsContext } from './ProductsContextProvider';
import { IProduct } from 'models';
import { getProducts } from 'services/products';

const useProducts = () => {
  const {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  } = useProductsContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);
      setProducts(products);
    });
  }, [setIsFetching, setProducts]);

  const filterProducts = (filters: string[]) => {
    setIsFetching(true);
  
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false);
  
      let filteredProducts;
  
      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p: IProduct) =>
          filters.includes(p.available_types) // Use includes para verificar se a string está presente
        );
      } else {
        filteredProducts = products;
      }
  
      setFilters(filters);
      setProducts(filteredProducts);
    });
  };
  
  return {
    isFetching,
    fetchProducts,
    products,
    filterProducts,
    filters,
  };
};

export default useProducts;
