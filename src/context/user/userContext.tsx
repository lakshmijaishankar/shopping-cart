import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useCreateAccount from '@hooks/user/useCreateAccount';
import React from 'react';
import {useAppSelector} from '@store/hooks/storeHook';
import {type UserState} from '@store/user/userSlice';

type UserContextProps = {
  logoutUser: () => Promise<void>;
  currentUser: UserState;
  createUser: (user: {emailId: string; pwd: string}) => void;
};

type UserContextProviderProps = {
  readonly children: React.ReactNode;
};

const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps,
);

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const createAccount = useCreateAccount();
  const user = useAppSelector(state => state.user);

  const logoutUser = React.useCallback(async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {}
  }, []);

  const userApi = React.useMemo(() => {
    const {createUser} = createAccount;
    return {
      logoutUser,
      createUser,
      currentUser: user,
    };
  }, [user, createAccount, logoutUser]);

  React.useEffect(() => {
    const {
      user: {isSignedIn},
    } = user;
    if (isSignedIn) {
    }
  }, [user]);

  return (
    <UserContext.Provider value={userApi}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () =>
  React.useContext<UserContextProps>(UserContext);
