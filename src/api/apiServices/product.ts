import CustomApiError from '../../error/customApiError';

const getProductById = async <T>(id: number) => {
  try {
    const promiseResponse = await fetch(`${process.env.FAKE_STORE_URL}/${id}`);
    if (promiseResponse.ok) {
      return promiseResponse.json() as T;
    }
    const {status, statusText} = promiseResponse;
    throw new CustomApiError('Not Found', status, statusText);
  } catch (error) {
    return error;
  }
};

export default getProductById;
