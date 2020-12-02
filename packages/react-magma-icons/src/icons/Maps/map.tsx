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
  title: ['map'],
  paths: [
    {
      d:
        'M14.65,4.97999997 L9.64999999,3.22999996 C9.22999999,3.07999996 8.76999999,3.07999996 8.34999998,3.21999996 L4.35999997,4.55999997 C3.54999996,4.83999997 2.99999996,5.59999997 2.99999996,6.45999998 L2.99999996,18.31 C2.99999996,19.72 4.40999997,20.68 5.71999997,20.17 L8.64999999,19.03 C8.86999999,18.94 9.11999999,18.94 9.33999999,19.02 L14.34,20.77 C14.76,20.92 15.22,20.92 15.64,20.78 L19.63,19.44 C20.44,19.17 20.99,18.4 20.99,17.54 L20.99,5.68999997 C20.99,4.27999997 19.58,3.31999996 18.27,3.82999997 L15.34,4.96999997 C15.12,5.04999997 14.88,5.05999997 14.65,4.97999997 L14.65,4.97999997 Z M15,18.89 L8.99999999,16.78 L8.99999999,5.10999997 L15,7.21999998 L15,18.89 Z',
      id: 'MapsMapIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'map',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsMapIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsMapIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsMapIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsMapIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
