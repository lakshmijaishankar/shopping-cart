import {useEffect, useState} from 'react';
import {type Product} from '../types/products';
import {getFakeStoreProducts} from '../api';
import CustomApiError from '../error/customApiError';
import {useQuery} from '@tanstack/react-query';

interface FakeStoreState {
  data: Product[];
  isLoading: boolean;
  error: Error;
}

const useFakeStoreApi = () => {
  const {data, isLoading, error, status} = useQuery<FakeStoreState['data']>({
    queryKey: ['fakeStore'],
    queryFn: async () => {
      const response = await fetch(`${process.env.FAKE_STORE_URL}`);
      return response.json();
    },
  });
  console.log('error', error);
  /* const [fakeStoreState, setFakeStoreState] = useState<Partial<FakeStoreState>>(
    {
      isLoading: false,
      data: [],
    },
  );

  useEffect(() => {
    const fetchFakeStoreData = async () => {
      setFakeStoreState(preData => ({...preData, isLoading: true}));
      const data = await getFakeStoreProducts();
      if (!(data instanceof CustomApiError)) {
        setFakeStoreState(preData => ({
          ...preData,
          data: (data as Product[]) || [],
        }));
      }
      setFakeStoreState(preData => ({...preData, isLoading: false}));
    };
    fetchFakeStoreData();
  }, []); */

  return {
    isLoading,
    data,
    error,
  };
};

export default useFakeStoreApi;
