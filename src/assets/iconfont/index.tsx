/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconXinhao from './IconXinhao';
import IconCamera2 from './IconCamera2';
import IconCamera from './IconCamera';
import IconMusic from './IconMusic';
import IconArrowUpCircle from './IconArrowUpCircle';
import IconArrowRightCircle from './IconArrowRightCircle';
import IconArrowDown from './IconArrowDown';
import IconArrowRight from './IconArrowRight';
import IconArrowDoubleLeft from './IconArrowDoubleLeft';
import IconArrowLeftCircle from './IconArrowLeftCircle';
import IconArrowDoubleRight from './IconArrowDoubleRight';
import IconClose from './IconClose';
import IconDirectionDown from './IconDirectionDown';
import IconDirectionRight from './IconDirectionRight';
import IconDirectionUp from './IconDirectionUp';
import IconDirectionLeft from './IconDirectionLeft';
import IconDownload from './IconDownload';
import IconFabulous from './IconFabulous';
import IconHide from './IconHide';
import IconMeh from './IconMeh';
import IconMinus from './IconMinus';
import IconSelect from './IconSelect';
import IconArrowLeftBold from './IconArrowLeftBold';
import IconRecord from './IconRecord';
import IconMy from './IconMy';
import IconClockin from './IconClockin';
import IconShouye from './IconShouye';
export { default as IconXinhao } from './IconXinhao';
export { default as IconCamera2 } from './IconCamera2';
export { default as IconCamera } from './IconCamera';
export { default as IconMusic } from './IconMusic';
export { default as IconArrowUpCircle } from './IconArrowUpCircle';
export { default as IconArrowRightCircle } from './IconArrowRightCircle';
export { default as IconArrowDown } from './IconArrowDown';
export { default as IconArrowRight } from './IconArrowRight';
export { default as IconArrowDoubleLeft } from './IconArrowDoubleLeft';
export { default as IconArrowLeftCircle } from './IconArrowLeftCircle';
export { default as IconArrowDoubleRight } from './IconArrowDoubleRight';
export { default as IconClose } from './IconClose';
export { default as IconDirectionDown } from './IconDirectionDown';
export { default as IconDirectionRight } from './IconDirectionRight';
export { default as IconDirectionUp } from './IconDirectionUp';
export { default as IconDirectionLeft } from './IconDirectionLeft';
export { default as IconDownload } from './IconDownload';
export { default as IconFabulous } from './IconFabulous';
export { default as IconHide } from './IconHide';
export { default as IconMeh } from './IconMeh';
export { default as IconMinus } from './IconMinus';
export { default as IconSelect } from './IconSelect';
export { default as IconArrowLeftBold } from './IconArrowLeftBold';
export { default as IconRecord } from './IconRecord';
export { default as IconMy } from './IconMy';
export { default as IconClockin } from './IconClockin';
export { default as IconShouye } from './IconShouye';

export type IconNames = 'icon-xinhao' | 'icon-camera2' | 'icon-Camera-' | 'icon-music' | 'icon-arrow-up-circle' | 'icon-arrow-right-circle' | 'icon-arrow-down' | 'icon-arrow-right' | 'icon-arrow-double-left' | 'icon-arrow-left-circle' | 'icon-arrow-double-right' | 'icon-close' | 'icon-direction-down' | 'icon-direction-right' | 'icon-direction-up' | 'icon-direction-left' | 'icon-download' | 'icon-fabulous' | 'icon-hide' | 'icon-meh' | 'icon-minus' | 'icon-select' | 'icon-arrow-left-bold' | 'icon-record' | 'icon-my' | 'icon-clockin' | 'icon-shouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-xinhao':
      return <IconXinhao key="1" {...rest} />;
    case 'icon-camera2':
      return <IconCamera2 key="2" {...rest} />;
    case 'icon-Camera-':
      return <IconCamera key="3" {...rest} />;
    case 'icon-music':
      return <IconMusic key="4" {...rest} />;
    case 'icon-arrow-up-circle':
      return <IconArrowUpCircle key="5" {...rest} />;
    case 'icon-arrow-right-circle':
      return <IconArrowRightCircle key="6" {...rest} />;
    case 'icon-arrow-down':
      return <IconArrowDown key="7" {...rest} />;
    case 'icon-arrow-right':
      return <IconArrowRight key="8" {...rest} />;
    case 'icon-arrow-double-left':
      return <IconArrowDoubleLeft key="9" {...rest} />;
    case 'icon-arrow-left-circle':
      return <IconArrowLeftCircle key="10" {...rest} />;
    case 'icon-arrow-double-right':
      return <IconArrowDoubleRight key="11" {...rest} />;
    case 'icon-close':
      return <IconClose key="12" {...rest} />;
    case 'icon-direction-down':
      return <IconDirectionDown key="13" {...rest} />;
    case 'icon-direction-right':
      return <IconDirectionRight key="14" {...rest} />;
    case 'icon-direction-up':
      return <IconDirectionUp key="15" {...rest} />;
    case 'icon-direction-left':
      return <IconDirectionLeft key="16" {...rest} />;
    case 'icon-download':
      return <IconDownload key="17" {...rest} />;
    case 'icon-fabulous':
      return <IconFabulous key="18" {...rest} />;
    case 'icon-hide':
      return <IconHide key="19" {...rest} />;
    case 'icon-meh':
      return <IconMeh key="20" {...rest} />;
    case 'icon-minus':
      return <IconMinus key="21" {...rest} />;
    case 'icon-select':
      return <IconSelect key="22" {...rest} />;
    case 'icon-arrow-left-bold':
      return <IconArrowLeftBold key="23" {...rest} />;
    case 'icon-record':
      return <IconRecord key="24" {...rest} />;
    case 'icon-my':
      return <IconMy key="25" {...rest} />;
    case 'icon-clockin':
      return <IconClockin key="26" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="27" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
