import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['keyboard_backspace'],
  paths: [
    {
      d:
        'M20,11 L6.82999998,11 L9.70999999,8.11999998 C10.1,7.72999998 10.1,7.09999998 9.70999999,6.70999998 C9.31999999,6.31999998 8.68999999,6.31999998 8.29999998,6.70999998 L3.70999997,11.3 C3.31999996,11.69 3.31999996,12.32 3.70999997,12.71 L8.29999998,17.3 C8.68999999,17.69 9.31999999,17.69 9.70999999,17.3 C10.1,16.91 10.1,16.28 9.70999999,15.89 L6.82999998,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 Z',
      id: 'HardwareKeyboardBackspaceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard_backspace',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardBackspaceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardBackspaceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardBackspaceIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardBackspaceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
