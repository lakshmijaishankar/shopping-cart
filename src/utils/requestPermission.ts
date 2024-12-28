import {
  Permission,
  PermissionsAndroid,
  type PermissionStatus,
  Platform,
} from 'react-native';

type RequestPermission = (
  permission: Permission,
  os?: Platform['OS'],
) => Promise<boolean | PermissionStatus | undefined>;

const requestPermission: RequestPermission = async (
  permission,
  os = 'android',
) => {
  try {
    if (Platform.OS === os) {
      const granted = await PermissionsAndroid.check(permission);
      if (!granted) {
        const status = await PermissionsAndroid.request(permission);
        return status;
      }
      return granted;
    }
  } catch (error) {
    console.error('Error', error);
    return false;
  }
};

export default requestPermission;
