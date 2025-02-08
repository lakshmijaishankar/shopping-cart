import React from 'react';
import {Text} from 'react-native';

/* type LoadingProps = {
  loading: boolean;
}; */
const withLoading = <P extends object = {}>(
  Component: React.ComponentType<P>,
) => {
  const WithLoading: React.FC<P /* & LoadingProps */> = props => {
    const [loading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return loading ? <Text className="text-orange-500">Loading</Text> : <Component {...(props as P)} />;
  };
  return WithLoading;
};

export default withLoading;
