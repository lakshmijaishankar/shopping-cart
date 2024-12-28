import React, {FC, useEffect} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/types/rootStackParamList';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useUserContext} from '@context/user/userContext';
import {getValue} from '@utils/asyncStorage';

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProfileScreen'
>;

const ProfileScreen: FC<ProfileScreenProps> = ({navigation}): JSX.Element => {
  const {currentUser: {user} = {}} = useUserContext();

  useEffect(() => {
    getValue('token');
  }, []);
  return (
    <View>
      <TouchableWithoutFeedback
        {...(!user?.isSignedIn && {
          onPress: () => navigation.navigate('AccountRegistrationScreen'),
        })}>
        <View>
          <Text>{user?.isSignedIn ? user?.email : 'Login/Register'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProfileScreen;
