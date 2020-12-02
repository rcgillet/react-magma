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
  title: ['tram'],
  paths: [
    {
      d:
        'M13,4.99999996 L13.75,3.49999996 L17,3.49999996 L17,1.99999996 L6.99999997,1.99999996 L6.99999997,3.49999996 L11.75,3.49999996 L11,4.99999996 C7.86999998,5.08999997 4.99999997,5.72999997 4.99999997,8.49999996 L4.99999997,17 C4.99999997,18.5 6.10999998,19.73 7.54999998,19.95 L6.35999998,21.14 C6.03999998,21.46 6.25999998,22 6.70999998,22 L7.79999998,22 C7.92999998,22 8.05999998,21.95 8.14999998,21.85 L9.99999997,20 L14,20 L15.85,21.85 C15.94,21.94 16.07,22 16.2,22 L17.29,22 C17.74,22 17.96,21.46 17.64,21.15 L16.45,19.96 C17.89,19.73 19,18.5 19,17 L19,8.49999996 C19,5.72999997 16.13,5.08999997 13,4.99999996 Z M12,18.5 C11.17,18.5 10.5,17.83 10.5,17 C10.5,16.17 11.17,15.5 12,15.5 C12.83,15.5 13.5,16.17 13.5,17 C13.5,17.83 12.83,18.5 12,18.5 Z M17,14 L6.99999998,14 L6.99999998,8.99999999 L17,8.99999999 L17,14 Z',
      id: 'MapsTramIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tram',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsTramIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsTramIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsTramIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsTramIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
