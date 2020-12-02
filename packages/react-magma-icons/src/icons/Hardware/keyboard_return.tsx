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
  title: ['keyboard_return'],
  paths: [
    {
      d:
        'M19,7.99999998 L19,11 L5.82999997,11 L8.70999999,8.11999998 C9.09999999,7.72999998 9.09999999,7.09999998 8.70999999,6.70999998 C8.31999998,6.31999998 7.68999998,6.31999998 7.29999998,6.70999998 L2.70999996,11.3 C2.31999996,11.69 2.31999996,12.32 2.70999996,12.71 L7.29999998,17.3 C7.68999998,17.69 8.31999998,17.69 8.70999999,17.3 C9.09999999,16.91 9.09999999,16.28 8.70999999,15.89 L5.82999997,13 L20,13 C20.55,13 21,12.55 21,12 L21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 C19.45,6.99999998 19,7.44999998 19,7.99999998 Z',
      id: 'HardwareKeyboardReturnIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard_return',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardReturnIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardReturnIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardReturnIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardReturnIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
