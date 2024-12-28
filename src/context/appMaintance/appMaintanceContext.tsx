import {useHttpStatusCodeQuery} from '@store/api/httpStatusCodeSlice';
import React from 'react';
import {Text} from 'react-native';
const AppMaintenanceContext = React.createContext<boolean>(false);

type AppMaintenanceProviderProps = {
  children: Readonly<React.ReactNode>;
};

const AppMaintenanceProvider = ({children}: AppMaintenanceProviderProps) => {
  const {data} = useHttpStatusCodeQuery();

  const [isMaintenanceMode, setIsMaintenanceMode] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof data === 'number' && data === 404) {
      setIsMaintenanceMode(true);
    }
  }, [data]);

  return (
    <AppMaintenanceContext.Provider value={isMaintenanceMode}>
      {isMaintenanceMode ? (
        <Text>App Is Under Maintenance Mode ...</Text>
      ) : (
        children
      )}
    </AppMaintenanceContext.Provider>
  );
};

export default AppMaintenanceProvider;
