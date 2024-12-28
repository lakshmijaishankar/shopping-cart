import {useQuery} from '@tanstack/react-query';

const useHttpsStatusCode = () => {
  const {
    data: httpStatus,
    isLoading,
    error,
  } = useQuery<{status: number}>({
    queryKey: ['statusCode'],
    queryFn: async () => {
      const response = await fetch(`${process.env.FAKE_STORE_URL}`);
      return {
        status: response.status,
      };
    },
  });
  return {
    httpStatus,
    isLoading,
    error,
  };
};

export default useHttpsStatusCode;
