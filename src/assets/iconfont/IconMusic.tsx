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

let IconMusic: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M960.00128 0l63.99872 0 0 735.99552c0 88.369433-100.288554 160.00704-224.00576 160.00704s-224.00576-71.637607-224.00576-160.00704c0-88.369433 100.288554-160.00704 224.00576-160.00704 62.688026 0 119.334573 18.390672 160.00704 48.045119l0-368.038719-511.98976 113.784604 0 494.213476c0 88.369433-100.288554 160.00704-224.00576 160.00704s-224.00576-71.637607-224.00576-160.00704c0-88.369433 100.288554-160.00704 224.00576-160.00704 62.688026 0 119.334573 18.390672 160.00704 48.045119l0-624.033599 575.98848-127.99744z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMusic.defaultProps = {
  size: 18,
};

IconMusic = React.memo ? React.memo(IconMusic) : IconMusic;

export default IconMusic;
