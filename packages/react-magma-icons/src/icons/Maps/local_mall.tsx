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
  title: ['local_mall'],
  paths: [
    {
      d:
        'M19,5.99999995 L17,5.99999995 C17,3.23999996 14.76,0.999999954 12,0.999999954 C9.23999999,0.999999954 6.99999996,3.23999996 6.99999996,5.99999995 L4.99999996,5.99999995 C3.89999997,5.99999995 2.99999996,6.89999998 2.99999996,7.99999995 L2.99999996,20 C2.99999996,21.1 3.89999997,22 4.99999996,22 L19,22 C20.1,22 21,21.1 21,20 L21,7.99999995 C21,6.89999998 20.1,5.99999995 19,5.99999995 Z M12,2.99999996 C13.66,2.99999996 15,4.33999997 15,5.99999996 L8.99999999,5.99999996 C8.99999999,4.33999997 10.34,2.99999996 12,2.99999996 Z M12,13 C9.66999999,13 7.70999998,11.41 7.15999998,9.24999999 C6.98999998,8.61999999 7.47999998,7.99999998 8.12999998,7.99999998 C8.59999999,7.99999998 8.97999999,8.33999998 9.10999999,8.79999999 C9.45999999,10.07 10.62,11 12,11 C13.38,11 14.54,10.07 14.89,8.79999999 C15.02,8.33999998 15.4,7.99999998 15.87,7.99999998 C16.52,7.99999998 17,8.61999999 16.84,9.24999999 C16.29,11.41 14.33,13 12,13 Z',
      id: 'MapsLocalMallIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_mall',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalMallIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalMallIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalMallIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalMallIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
