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

let IconXinhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192.437 816.222c-23.575 0-42.863-19.288-42.863-42.863v-64.294c0-23.575 19.288-42.863 42.863-42.863s42.863 19.288 42.863 42.863v64.294c0.005 23.57-19.284 42.863-42.863 42.863zM406.754 816.222c-23.575 0-42.862-19.288-42.862-42.863v-171.458c0-23.575 19.288-42.862 42.862-42.862s42.863 19.288 42.863 42.862v171.458c0.005 23.57-19.284 42.863-42.863 42.863zM621.080 816.222c-23.575 0-42.862-19.288-42.862-42.863v-342.912c0-23.575 19.288-42.862 42.862-42.862s42.862 19.288 42.862 42.862v342.908c0 23.575-19.288 42.867-42.862 42.867zM835.397 816.222c-23.575 0-42.863-19.288-42.863-42.863v-557.234c0-23.575 19.288-42.863 42.863-42.863s42.863 19.288 42.863 42.863v557.229c0 23.575-19.288 42.867-42.863 42.867z"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
    </Svg>
  );
};

IconXinhao.defaultProps = {
  size: 18,
};

IconXinhao = React.memo ? React.memo(IconXinhao) : IconXinhao;

export default IconXinhao;
