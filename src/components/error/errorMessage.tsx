import React, {memo, type FC, type ReactNode} from 'react';
import {Text, TextProps} from 'react-native';

type ErrorMessageProps = TextProps & {message?: string | ReactNode};

const ErrorMessage: FC<ErrorMessageProps> = props => {
  const {message, ...rest} = props;
  return <>{message ? <Text {...rest}>{message}</Text> : null}</>;
};

export default memo(ErrorMessage);
