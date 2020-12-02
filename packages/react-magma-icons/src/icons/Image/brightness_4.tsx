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
  title: ['brightness_4'],
  paths: [
    {
      d:
        'M22.6,11.29 L20,8.68999999 L20,4.99999997 C20,4.44999997 19.55,3.99999997 19,3.99999997 L15.31,3.99999997 L12.71,1.39999996 C12.32,1.00999995 11.69,1.00999995 11.3,1.39999996 L8.68999999,3.99999997 L4.99999997,3.99999997 C4.44999997,3.99999997 3.99999997,4.44999997 3.99999997,4.99999997 L3.99999997,8.68999999 L1.39999996,11.29 C1.00999995,11.68 1.00999995,12.31 1.39999996,12.7 L3.99999997,15.3 L3.99999997,19 C3.99999997,19.55 4.44999997,20 4.99999997,20 L8.68999999,20 L11.29,22.6 C11.68,22.99 12.31,22.99 12.7,22.6 L15.3,20 L19,20 C19.55,20 20,19.55 20,19 L20,15.31 L22.6,12.71 C22.99,12.32 22.99,11.68 22.6,11.29 Z M17.92,12.98 C17.58,15.1 16.07,16.92 14.04,17.64 C12.83,18.07 11.63,18.09 10.54,17.82 C10.13,17.72 10.06,17.17 10.41,16.92 C11.98,15.84 13,14.04 13,12 C13,9.95999999 11.98,8.15999998 10.42,7.07999998 C10.07,6.83999998 10.13,6.28999998 10.55,6.17999998 C11.64,5.90999997 12.84,5.92999997 14.05,6.35999998 C16.07,7.07999998 17.59,8.89999999 17.93,11.02 C17.98,11.35 18,11.68 18,12 C17.99,12.32 17.97,12.65 17.92,12.98 L17.92,12.98 Z',
      id: 'ImageBrightness4Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'brightness_4',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBrightness4Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBrightness4Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBrightness4Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageBrightness4Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
