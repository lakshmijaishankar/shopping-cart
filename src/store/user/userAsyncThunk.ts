import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {CurrentUser} from './user.type';
import {setValue} from '@utils/asyncStorage';

type User = {
  emailId: string;
  pwd: string;
};

export const createUserWithEmailAndPwd = createAsyncThunk<CurrentUser, User>(
  'users/create',
  async ({emailId, pwd}) => {
    const {user} = await auth().createUserWithEmailAndPassword(emailId, pwd);

    const idToken = await user.getIdToken(true);

    await setValue<string>(idToken, 'token');

    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
      isSignedIn: true,
    };
  },
);

export const signInUser = createAsyncThunk<CurrentUser, User>(
  'user/signin',
  async credential => {
    const {user} = await auth().signInWithEmailAndPassword(
      credential.emailId,
      credential.pwd,
    );

    const idToken = await user.getIdToken(true);

    await setValue<string>(idToken, 'token');

    return {
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
      isSignedIn: true,
    };
  },
);
