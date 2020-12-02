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
  title: ['local_hospital'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 3.00999996,3.89999997 3.00999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M17,14 L14,14 L14,17 C14,17.55 13.55,18 13,18 L11,18 C10.45,18 9.99999997,17.55 9.99999997,17 L9.99999997,14 L6.99999997,14 C6.44999998,14 5.99999997,13.55 5.99999997,13 L5.99999997,11 C5.99999997,10.45 6.44999998,9.99999998 6.99999997,9.99999998 L9.99999997,9.99999998 L9.99999997,6.99999998 C9.99999997,6.44999998 10.45,5.99999998 11,5.99999998 L13,5.99999998 C13.55,5.99999998 14,6.44999998 14,6.99999998 L14,9.99999998 L17,9.99999998 C17.55,9.99999998 18,10.45 18,11 L18,13 C18,13.55 17.55,14 17,14 Z',
      id: 'MapsLocalHospitalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_hospital',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalHospitalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalHospitalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalHospitalIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalHospitalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
