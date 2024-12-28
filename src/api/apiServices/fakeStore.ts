import CustomApiError from '../../error/customApiError';

const getFakeStoreProducts = async (): Promise<any | Error> => {
  try {
    const promiseResponse = await fetch(`${process.env.FAKE_STORE_URL}`);
    if (promiseResponse.ok) {
      return await promiseResponse.json();
    }
    const {status, statusText} = promiseResponse;
    throw new CustomApiError('Not Found', status, statusText);
  } catch (error) {
    return error;
  }
};
export default getFakeStoreProducts;
