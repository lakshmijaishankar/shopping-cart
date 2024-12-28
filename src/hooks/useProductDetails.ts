// import {useEffect, useState} from 'react';
import {Product} from '../types/products';
// import {getProductById} from '../api';
import {useQuery} from '@tanstack/react-query';

const useProductDetails = (id: number) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product, Error, Product, (string | number)[]>({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await fetch(`${process.env.FAKE_STORE_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      return response.json();
    },
  });
  /* const [product, setProduct] = useState<Product>({} as Product);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const prdData = await getProductById(id);
      setProduct(prdData as Product);
      setIsLoading(false);
    };
    getProduct();
  }, [id]); */

  return {product, isLoading, isError};
};

export default useProductDetails;
