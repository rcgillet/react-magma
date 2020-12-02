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
  title: ['style'],
  paths: [
    {
      d:
        'M2.52999996,19.65 L3.86999997,20.21 L3.86999997,11.18 L1.43999996,17.04 C1.02999995,18.06 1.51999996,19.23 2.52999996,19.65 L2.52999996,19.65 Z M22.03,15.95 L17.07,3.97999997 C16.76,3.22999996 16.03,2.76999996 15.26,2.74999996 C15,2.74999996 14.73,2.78999996 14.47,2.89999996 L7.09999998,5.94999997 C6.34999998,6.25999998 5.88999997,6.97999998 5.86999997,7.74999996 C5.85999997,8.01999998 5.90999997,8.28999998 6.01999998,8.54999999 L10.98,20.52 C11.29,21.28 12.03,21.74 12.81,21.75 C13.07,21.75 13.33,21.7 13.58,21.6 L20.94,18.55 C21.96,18.13 22.45,16.96 22.03,15.95 L22.03,15.95 Z M7.87999998,8.74999998 C7.32999998,8.74999998 6.87999998,8.29999998 6.87999998,7.74999998 C6.87999998,7.19999998 7.32999998,6.74999998 7.87999998,6.74999998 C8.42999999,6.74999998 8.87999998,7.19999998 8.87999998,7.74999998 C8.87999998,8.29999998 8.42999999,8.74999998 7.87999998,8.74999998 Z M5.87999997,19.75 C5.87999997,20.85 6.77999998,21.75 7.87999997,21.75 L9.32999999,21.75 L5.87999997,13.41 L5.87999997,19.75 Z',
      id: 'ImageStyleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'style',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageStyleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageStyleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageStyleIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageStyleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
