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
  title: ['directions'],
  paths: [
    {
      d:
        'M21.71,11.29 L12.71,2.28999996 C12.32,1.89999996 11.69,1.89999996 11.3,2.28999996 L2.29999996,11.29 C1.90999996,11.68 1.90999996,12.31 2.29999996,12.7 L11.3,21.7 C11.69,22.09 12.32,22.09 12.71,21.7 L21.71,12.7 C22.1,12.32 22.1,11.69 21.71,11.29 Z M14,14.5 L14,12 L9.99999998,12 L9.99999998,14 C9.99999998,14.55 9.54999999,15 8.99999998,15 C8.44999999,15 7.99999998,14.55 7.99999998,14 L7.99999998,11 C7.99999998,10.45 8.44999999,9.99999998 8.99999998,9.99999998 L14,9.99999998 L14,7.49999998 L17.15,10.65 C17.35,10.85 17.35,11.16 17.15,11.36 L14,14.5 Z',
      id: 'MapsDirectionsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
