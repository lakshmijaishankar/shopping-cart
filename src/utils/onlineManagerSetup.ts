import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';

const setUpOnlineManager = () => {
  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(({isConnected}) => {
      if (typeof isConnected === 'boolean') {
        setOnline(isConnected);
      }
    });
  });
};

export default setUpOnlineManager;
