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
  title: ['trip_origin'],
  paths: [
    {
      d:
        'M1.99999996,12 C1.99999996,6.47999998 6.47999998,1.99999996 12,1.99999996 C17.52,1.99999996 22,6.47999998 22,12 C22,17.52 17.52,22 12,22 C6.47999998,22 1.99999996,17.52 1.99999996,12 Z M12,18 C15.31,18 18,15.31 18,12 C18,8.68999999 15.31,5.99999998 12,5.99999998 C8.68999999,5.99999998 5.99999997,8.68999999 5.99999997,12 C5.99999997,15.31 8.68999999,18 12,18 Z',
      id: 'MapsTripOriginIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'trip_origin',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsTripOriginIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsTripOriginIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsTripOriginIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsTripOriginIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
