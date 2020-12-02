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
  title: ['escalator_warning'],
  paths: [
    {
      d:
        'M6.49999997,1.99999996 C7.59999998,1.99999996 8.49999997,2.89999996 8.49999997,3.99999996 C8.49999997,5.09999997 7.59999998,5.99999996 6.49999997,5.99999996 C5.39999997,5.99999996 4.49999997,5.09999997 4.49999997,3.99999996 C4.49999997,2.89999996 5.39999997,1.99999996 6.49999997,1.99999996 Z M15.5,9.49999998 C15.5,10.33 16.17,11 17,11 C17.83,11 18.5,10.33 18.5,9.49999998 C18.5,8.66999999 17.83,7.99999998 17,7.99999998 C16.17,7.99999998 15.5,8.66999999 15.5,9.49999998 Z M18.5,12 L15.66,12 C15.08,12.01 14.52,12.32 14.21,12.86 L13.29,14.18 L9.71999999,7.99999998 C9.34999999,7.36999998 8.68999999,7.00999998 8.00999998,6.99999998 L4.99999996,6.99999998 C3.89999997,6.99999998 2.99999996,7.89999998 2.99999996,8.99999998 L2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 L4.49999996,15 L4.49999996,21 C4.49999996,21.55 4.94999997,22 5.49999996,22 L8.49999996,22 C9.04999999,22 9.49999996,21.55 9.49999996,21 L9.49999996,11.61 L11.74,15.5 C11.92,15.81 12.25,16 12.61,16 L13.71,16 C14.04,16 14.34,15.84 14.53,15.57 L15,14.9 L15,21 C15,21.55 15.45,22 16,22 L18,22 C18.55,22 19,21.55 19,21 L19,17 L19,17 C19.55,17 20,16.55 20,16 L20,13.5 C20,12.68 19.33,12 18.5,12 Z',
      id: 'PlacesEscalatorWarningIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'escalator_warning',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesEscalatorWarningIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesEscalatorWarningIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesEscalatorWarningIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesEscalatorWarningIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
