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
  title: ['umbrella'],
  paths: [
    {
      d:
        'M17.12,6.27999998 L14.5,6.91999998 L13,5.76999997 L13,3.87999997 L13,3.39999996 C13,3.13999996 13.22,2.91999996 13.5,2.91999996 C13.73,2.91999996 13.93,3.07999996 13.99,3.27999996 C14.1,3.69999997 14.49,3.99999995 14.94,3.99999995 C15.49,3.99999995 15.94,3.54999996 15.94,2.99999995 C15.94,2.89999996 15.92,2.79999996 15.89,2.69999996 C15.59,1.71999996 14.63,0.999999954 13.5,0.999999954 C12.12,0.999999954 11,2.06999996 11,3.39999996 L11,3.87999997 L11,5.76999997 L9.49999999,6.91999998 L6.87999998,6.27999998 C6.49999998,6.18999998 6.15999998,6.54999998 6.27999998,6.91999998 L11.05,21.31 C11.2,21.77 11.6,22 12,22 C12.4,22 12.8,21.77 12.95,21.31 L17.72,6.91999998 C17.84,6.54999998 17.5,6.18999998 17.12,6.27999998 Z M11,14.8 L9.02999999,8.85999999 L9.94999999,9.08999999 L10.71,8.50999999 L11,8.28999998 L11,14.8 Z M13,14.8 L13,8.28999998 L13.28,8.50999999 L14.04,9.08999999 L14.96,8.85999999 L13,14.8 Z',
      id: 'PlacesUmbrellaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'umbrella',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesUmbrellaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesUmbrellaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesUmbrellaIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesUmbrellaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
