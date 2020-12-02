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
  title: ['colorize'],
  paths: [
    {
      d:
        'M20.71,5.62999997 L18.37,3.28999996 C17.98,2.89999996 17.35,2.89999996 16.96,3.28999996 L13.84,6.40999998 L12.61,5.19999997 C12.22,4.80999997 11.59,4.81999997 11.2,5.19999997 C10.81,5.58999997 10.81,6.21999998 11.2,6.60999998 L11.92,7.32999998 L3.14999996,16.1 C3.04999996,16.2 2.99999996,16.32 2.99999996,16.46 L2.99999996,20.5 C2.99999996,20.78 3.21999996,21 3.49999996,21 L7.53999998,21 C7.66999998,21 7.79999998,20.95 7.88999998,20.85 L16.66,12.08 L17.38,12.8 C17.77,13.19 18.4,13.19 18.79,12.8 C19.18,12.41 19.18,11.78 18.79,11.39 L17.57,10.17 L20.69,7.04999998 C21.1,6.64999998 21.1,6.01999998 20.71,5.62999997 Z M6.91999998,19 L4.99999997,17.08 L13.06,9.01999999 L14.98,10.94 L6.91999998,19 Z',
      id: 'ImageColorizeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'colorize',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageColorizeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageColorizeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageColorizeIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageColorizeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
