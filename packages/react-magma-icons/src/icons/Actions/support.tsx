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
  title: ['support'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M19.46,9.11999999 L16.68,10.27 C16.17,8.90999999 15.1,7.82999998 13.73,7.32999998 L14.88,4.54999997 C16.98,5.34999997 18.65,7.01999998 19.46,9.11999999 Z M12,15 C10.34,15 8.99999999,13.66 8.99999999,12 C8.99999999,10.34 10.34,8.99999999 12,8.99999999 C13.66,8.99999999 15,10.34 15,12 C15,13.66 13.66,15 12,15 Z M9.12999999,4.53999997 L10.3,7.31999998 C8.91999999,7.81999998 7.82999998,8.90999999 7.31999998,10.29 L4.53999997,9.12999999 C5.34999997,7.01999998 7.01999998,5.34999997 9.12999999,4.53999997 Z M4.53999997,14.87 L7.31999998,13.72 C7.82999998,15.1 8.90999999,16.18 10.29,16.68 L9.11999999,19.46 C7.01999998,18.65 5.34999997,16.98 4.53999997,14.87 Z M14.88,19.46 L13.73,16.68 C15.1,16.17 16.18,15.09 16.68,13.71 L19.46,14.88 C18.65,16.98 16.98,18.65 14.88,19.46 Z',
      id: 'ActionsSupportIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'support',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSupportIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSupportIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSupportIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSupportIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
