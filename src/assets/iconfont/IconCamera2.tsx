/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconCamera2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 288A5 5 10800 1 0 704 288 5 5 10800 1 0 384 288zM0 288A5 5 10800 1 0 320 288 5 5 10800 1 0 0 288zM768 608l0-96c0-35.2-28.8-64-64-64l-160 0L160 448 64 448c-35.2 0-64 28.8-64 64l0 320c0 35.2 28.8 64 64 64l640 0c35.2 0 64-28.8 64-64l0-96 256 160L1024 448 768 608zM640 768 128 768l0-192 512 0L640 768z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCamera2.defaultProps = {
  size: 18,
};

IconCamera2 = React.memo ? React.memo(IconCamera2) : IconCamera2;

export default IconCamera2;
