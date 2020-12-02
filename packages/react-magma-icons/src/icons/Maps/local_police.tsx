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
  title: ['local_police'],
  paths: [
    {
      d:
        'M14.5,12.59 L15.13,15.32 C15.23,15.75 14.76,16.09 14.38,15.86 L12,14.42 L9.60999999,15.86 C9.22999999,16.09 8.75999999,15.75 8.85999999,15.32 L9.49999999,12.6 L7.39999998,10.79 C7.05999998,10.5 7.23999998,9.94999999 7.67999998,9.90999999 L10.46,9.66999999 L11.54,7.10999998 C11.71,6.69999998 12.29,6.69999998 12.46,7.10999998 L13.54,9.65999999 L16.32,9.89999999 C16.76,9.93999999 16.94,10.49 16.6,10.78 L14.5,12.59 Z M4.18999997,4.46999997 C3.46999996,4.78999997 2.99999996,5.50999997 2.99999996,6.29999998 L2.99999996,11 C2.99999996,16.55 6.83999998,21.74 12,23 C17.16,21.74 21,16.55 21,11 L21,6.29999998 C21,5.50999997 20.53,4.78999997 19.81,4.46999997 L12.81,1.35999996 C12.29,1.12999995 11.7,1.12999995 11.19,1.35999996 L4.18999997,4.46999997 Z',
      id: 'MapsLocalPoliceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_police',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalPoliceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalPoliceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalPoliceIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalPoliceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
