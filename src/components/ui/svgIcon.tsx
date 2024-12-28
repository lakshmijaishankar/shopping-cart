import React, {FC} from 'react';
import {SvgXml, type XmlProps} from 'react-native-svg';

const SvgIcon: FC<XmlProps> = (props): JSX.Element => {
  return <SvgXml {...props} />;
};

export {SvgIcon};
