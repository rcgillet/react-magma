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
  title: ['museum'],
  paths: [
    {
      d:
        'M21.5,11 C21.78,11 22,10.78 22,10.5 L22,9.25999999 C22,9.09999999 21.92,8.93999999 21.79,8.84999999 L12.57,2.39999996 C12.23,2.15999996 11.77,2.15999996 11.42,2.39999996 L2.20999996,8.84999999 C2.07999996,8.93999999 1.99999996,9.09999999 1.99999996,9.25999999 L1.99999996,10.5 C1.99999996,10.78 2.21999996,11 2.49999996,11 L3.99999996,11 L3.99999996,20 L2.99999996,20 C2.44999996,20 1.99999996,20.45 1.99999996,21 C1.99999996,21.55 2.44999996,22 2.99999996,22 L21,22 C21.55,22 22,21.55 22,21 C22,20.45 21.55,20 21,20 L20,20 L20,11 L21.5,11 Z M16,17 C16,17.55 15.55,18 15,18 C14.45,18 14,17.55 14,17 L14,14 L12.83,15.75 C12.43,16.34 11.56,16.34 11.17,15.75 L9.99999998,14 L9.99999998,17 C9.99999998,17.55 9.54999999,18 8.99999998,18 C8.44999999,18 7.99999998,17.55 7.99999998,17 L7.99999998,12.3 C7.99999998,11.58 8.57999999,11 9.29999999,11 L9.29999999,11 C9.72999999,11 10.14,11.22 10.38,11.58 L12,14 L13.61,11.58 C13.86,11.22 14.26,11 14.7,11 L14.7,11 C15.42,11 16,11.58 16,12.3 L16,17 Z',
      id: 'MapsMuseumIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'museum',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsMuseumIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsMuseumIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsMuseumIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsMuseumIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
