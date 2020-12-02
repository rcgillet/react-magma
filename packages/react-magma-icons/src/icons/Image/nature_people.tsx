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
  title: ['nature_people'],
  paths: [
    {
      d:
        'M15.06,2.16999996 C18.98,2.10999996 22.17,5.25999997 22.17,9.16999999 C22.17,12.76 19.47,15.71 16,16.12 L16,16.12 L16,20 L18,20 C18.55,20 19,20.45 19,21 C19,21.55 18.55,22 18,22 L18,22 L3.99999996,22 C3.44999996,22 2.99999996,21.55 2.99999996,21 L2.99999996,21 L2.99999996,17 L2.49999996,17 C2.21999996,17 1.99999996,16.78 1.99999996,16.5 L1.99999996,16.5 L1.99999996,13 C1.99999996,12.45 2.44999996,12 2.99999996,12 L2.99999996,12 L5.99999996,12 C6.54999998,12 6.99999996,12.45 6.99999996,13 L6.99999996,13 L6.99999996,16.5 C6.99999996,16.78 6.77999998,17 6.49999996,17 L6.49999996,17 L5.99999996,17 L5.99999996,20 L14.01,20 L14.01,16.06 C10.76,15.52 8.26999998,12.74 8.17999998,9.35999999 C8.06999998,5.53999997 11.23,2.22999996 15.06,2.16999996 Z M4.49999996,7.99999998 C5.3284271,7.99999998 5.99999996,8.67157286 5.99999996,9.49999998 C5.99999996,10.3284271 5.3284271,11 4.49999996,11 C3.67157284,11 2.99999996,10.3284271 2.99999996,9.49999998 C2.99999996,8.67157286 3.67157284,7.99999998 4.49999996,7.99999998 Z',
      id: 'ImageNaturePeopleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'nature_people',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageNaturePeopleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageNaturePeopleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageNaturePeopleIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageNaturePeopleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
