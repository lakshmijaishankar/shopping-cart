import {useCallback} from 'react';
import {createUserWithEmailAndPwd} from '@store/user/userAsyncThunk';
import {useAppSelector, useAppDispatch} from '@store/hooks/storeHook';

const useCreateAccount = () => {
  const {user, loading, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const createUser = useCallback(
    (user: {emailId: string; pwd: string}) => {
      dispatch(createUserWithEmailAndPwd(user));
    },
    [dispatch],
  );

  const logoutUser = useCallback(() => {}, []);

  return {
    user,
    loading,
    error,
    createUser,
    logoutUser,
  };
};

export default useCreateAccount;
