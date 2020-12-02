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
  title: ['save'],
  paths: [
    {
      d:
        'M17.59,3.58999996 C17.21,3.20999996 16.7,2.99999996 16.17,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,7.82999998 C21,7.29999998 20.79,6.78999998 20.41,6.41999998 L17.59,3.58999996 Z M12,19 C10.34,19 8.99999999,17.66 8.99999999,16 C8.99999999,14.34 10.34,13 12,13 C13.66,13 15,14.34 15,16 C15,17.66 13.66,19 12,19 Z M13,8.99999997 L6.99999997,8.99999997 C5.89999997,8.99999997 4.99999997,8.09999998 4.99999997,6.99999997 C4.99999997,5.89999997 5.89999997,4.99999997 6.99999997,4.99999997 L13,4.99999997 C14.1,4.99999997 15,5.89999997 15,6.99999997 C15,8.09999998 14.1,8.99999997 13,8.99999997 Z',
      id: 'ContentSaveIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'save',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentSaveIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentSaveIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentSaveIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentSaveIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
