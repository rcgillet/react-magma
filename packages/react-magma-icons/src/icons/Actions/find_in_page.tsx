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
  title: ['find_in_page'],
  paths: [
    {
      d:
        'M20,19.59 L20,8.82999999 C20,8.29999998 19.79,7.78999998 19.41,7.41999998 L14.58,2.58999996 C14.21,2.20999996 13.7,1.99999996 13.17,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 4.00999997,2.89999996 4.00999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.88999997,22 5.98999997,22 L18,22 C18.45,22 18.85,21.85 19.19,21.6 L14.76,17.17 C13.9,17.73 12.87,18.05 11.76,17.99 C9.38999999,17.88 7.35999998,16.03 7.03999998,13.68 C6.59999998,10.33 9.48999999,7.49999996 12.87,8.06999998 C14.82,8.39999998 16.44,9.91999999 16.87,11.85 C17.2,13.31 16.88,14.67 16.17,15.75 L20,19.59 Z M8.99999999,13 C8.99999999,14.66 10.34,16 12,16 C13.66,16 15,14.66 15,13 C15,11.34 13.66,9.99999999 12,9.99999999 C10.34,9.99999999 8.99999999,11.34 8.99999999,13 Z',
      id: 'ActionsFindInPageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'find_in_page',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFindInPageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFindInPageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFindInPageIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFindInPageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
