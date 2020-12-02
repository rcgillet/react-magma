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
  title: ['brightness_auto'],
  paths: [
    {
      d:
        'M10.85,12.65 L13.15,12.65 L12,8.99999999 L10.85,12.65 Z M20,8.68999999 L20,5.99999997 C20,4.89999997 19.1,3.99999997 18,3.99999997 L15.31,3.99999997 L13.41,2.09999996 C12.63,1.31999996 11.36,1.31999996 10.58,2.09999996 L8.68999999,3.99999997 L5.99999998,3.99999997 C4.89999997,3.99999997 3.99999997,4.89999997 3.99999997,5.99999997 L3.99999997,8.68999999 L2.09999996,10.59 C1.31999996,11.37 1.31999996,12.64 2.09999996,13.42 L3.99999997,15.32 L3.99999997,18 C3.99999997,19.1 4.89999997,20 5.99999998,20 L8.68999999,20 L10.59,21.9 C11.37,22.68 12.64,22.68 13.42,21.9 L15.32,20 L18,20 C19.1,20 20,19.1 20,18 L20,15.31 L21.9,13.41 C22.68,12.63 22.68,11.36 21.9,10.58 L20,8.68999999 Z M14.09,15.4 L13.6,14 L10.4,14 L9.90999999,15.4 C9.77999999,15.76 9.44999999,16 9.06999999,16 C8.44999999,16 8.01999998,15.39 8.22999998,14.81 L10.67,7.94999998 C10.87,7.37999998 11.4,6.99999998 12,6.99999998 C12.6,6.99999998 13.13,7.37999998 13.34,7.93999998 L15.78,14.8 C15.99,15.38 15.56,15.99 14.94,15.99 C14.55,16 14.22,15.76 14.09,15.4 L14.09,15.4 Z',
      id: 'DeviceBrightnessAutoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'brightness_auto',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceBrightnessAutoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceBrightnessAutoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceBrightnessAutoIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceBrightnessAutoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
