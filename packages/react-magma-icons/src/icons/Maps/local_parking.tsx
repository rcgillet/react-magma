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
  title: ['local_parking'],
  paths: [
    {
      d:
        'M12.79,2.99999996 L7.99999998,2.99999996 C6.89999998,2.99999996 5.99999998,3.89999997 5.99999998,4.99999996 L5.99999998,19 C5.99999998,20.1 6.89999998,21 7.99999998,21 C9.09999999,21 9.99999998,20.1 9.99999998,19 L9.99999998,15 L13,15 C16.57,15 19.42,11.87 18.95,8.20999998 C18.56,5.18999997 15.84,2.99999996 12.79,2.99999996 Z M13.2,11 L9.99999999,11 L9.99999999,6.99999998 L13.2,6.99999998 C14.3,6.99999998 15.2,7.89999998 15.2,8.99999998 C15.2,10.1 14.3,11 13.2,11 Z',
      id: 'MapsLocalParkingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_parking',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalParkingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalParkingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalParkingIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalParkingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
