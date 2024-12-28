import {GoogleSignin} from '@react-native-google-signin/google-signin';

const googleSiginConfig = () => {
  GoogleSignin.configure({
    // webClientId: process.env.GOOGLE_CLIENT_ID,
    webClientId:
      '662025573792-49ma3m17mo4g77jtghkvtdhak5tlpnb8.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    offlineAccess: true,
  });
};

export default googleSiginConfig;
