import CreateAccount from '@components/createaccount/createAccount';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUserContext} from '@context/user/userContext';
import {type RootStackParamList} from '@src/types/rootStackParamList';
import React from 'react';
import ReactNative from 'react-native';

type AccountRegisterProps = NativeStackScreenProps<
  RootStackParamList,
  'AccountRegistrationScreen'
>;
const AccountRegister = ({navigation: {navigate}}: AccountRegisterProps) => {
  const {
    currentUser: {
      user: {isSignedIn},
    },
  } = useUserContext();

  React.useEffect(() => {
    if (isSignedIn) {
      navigate('ProfileScreen');
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <ReactNative.View className="px-4 bg-white flex-1">
        <CreateAccount />
      </ReactNative.View>
    </>
  );
};

export default AccountRegister;
