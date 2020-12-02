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
  title: ['wrong_location'],
  paths: [
    {
      d:
        'M12,2.99999996 C12.68,2.99999996 13.35,3.08999996 14,3.25999996 L14,3.25999996 L14,9.99999996 L19.91,9.99999996 C19.96,10.39 20,10.79 20,11.2 C20,14.38 17.55,18.12 12.67,22.43 C12.29,22.76 11.72,22.76 11.34,22.43 C6.44999998,18.12 3.99999997,14.38 3.99999997,11.2 C3.99999997,6.21999998 7.79999998,2.99999996 12,2.99999996 Z M12,8.99999999 C10.9,8.99999999 9.99999999,9.89999999 9.99999999,11 C9.99999999,12.1 10.9,13 12,13 C13.1,13 14,12.1 14,11 C14,9.89999999 13.1,8.99999999 12,8.99999999 Z M21.12,1.45999996 L22.54,2.87999996 L20.41,4.99999997 L22.54,7.11999998 L21.12,8.53999999 L19,6.40999998 L16.88,8.53999999 L15.46,7.11999998 L17.59,4.99999997 L15.46,2.87999996 L16.88,1.45999996 L19,3.58999996 L21.12,1.45999996 Z',
      id: 'MapsWrongLocationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wrong_location',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsWrongLocationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsWrongLocationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsWrongLocationIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsWrongLocationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
