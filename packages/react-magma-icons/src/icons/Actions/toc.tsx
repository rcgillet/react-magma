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
  title: ['toc'],
  paths: [
    {
      d:
        'M16,15 C16.55,15 17,15.45 17,16 C17,16.55 16.55,17 16,17 L16,17 L3.99999996,17 C3.44999996,17 2.99999996,16.55 2.99999996,16 C2.99999996,15.45 3.44999996,15 3.99999996,15 L3.99999996,15 Z M21,15 L21,17 L19,17 L19,15 L21,15 Z M16,11 C16.55,11 17,11.45 17,12 C17,12.55 16.55,13 16,13 L16,13 L3.99999996,13 C3.44999996,13 2.99999996,12.55 2.99999996,12 C2.99999996,11.45 3.44999996,11 3.99999996,11 L3.99999996,11 Z M21,11 L21,13 L19,13 L19,11 L21,11 Z M16,6.99999998 C16.55,6.99999998 17,7.44999998 17,7.99999998 C17,8.54999999 16.55,8.99999998 16,8.99999998 L16,8.99999998 L3.99999996,8.99999998 C3.44999996,8.99999998 2.99999996,8.54999999 2.99999996,7.99999998 C2.99999996,7.44999998 3.44999996,6.99999998 3.99999996,6.99999998 L3.99999996,6.99999998 Z M21,6.99999998 L21,8.99999998 L19,8.99999998 L19,6.99999998 L21,6.99999998 Z',
      id: 'ActionsTocIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'toc',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTocIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTocIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTocIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTocIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
