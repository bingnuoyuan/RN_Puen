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

let IconRecord: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 490.7c11.8 0 21.3-9.6 21.3-21.3V234.7c0-23.5-19.2-42.7-42.7-42.7H661.3V85.3c0-11.7-9.6-21.3-21.3-21.3s-21.3 9.6-21.3 21.3V192H384V85.3c0-11.7-9.6-21.3-21.3-21.3-11.7 0-21.3 9.6-21.3 21.3V192h-192c-23.5 0-42.7 19.2-42.7 42.7v682.7c0 23.5 19.2 42.7 42.7 42.7h725.3c23.5 0 42.7-19.2 42.7-42.7V640c0-11.8-9.6-21.3-21.3-21.3s-21.3 9.6-21.3 21.3v256c0 11.8-9.6 21.3-21.3 21.3H170.7c-11.8 0-21.3-9.6-21.3-21.3V405.3h725.3v64c0 11.8 9.5 21.4 21.3 21.4z m-746.7-128V256c0-11.8 9.6-21.3 21.3-21.3h682.7c11.8 0 21.3 9.6 21.3 21.3v106.7H149.3z m519.8 156.6L473 715.5 397.5 640c-8.3-8.3-21.9-8.3-30.2 0s-8.3 21.9 0 30.2l90.5 90.5c4.2 4.2 9.6 6.2 15.1 6.2s11-2.1 15.1-6.2l211.2-211.2c8.3-8.3 8.3-21.9 0-30.2-8.2-8.3-21.8-8.3-30.1 0z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconRecord.defaultProps = {
  size: 18,
};

IconRecord = React.memo ? React.memo(IconRecord) : IconRecord;

export default IconRecord;
