import {getValue} from '../asyncStorage';

export const getToken = async (): Promise<string> => {
  const rawToken = await getValue<string>('token');
  console.log('rawToken', typeof rawToken);
  return rawToken ?? '';
};

export const isSignIn = async () => {
  const token = await getToken();
  return !!token;
};
