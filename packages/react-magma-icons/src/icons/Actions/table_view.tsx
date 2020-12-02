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
  title: ['table_view'],
  paths: [
    {
      d:
        'M19,6.99999998 L8.99999998,6.99999998 C7.89999998,6.99999998 6.99999998,7.89999998 6.99999998,8.99999998 L6.99999998,19 C6.99999998,20.1 7.89999998,21 8.99999998,21 L19,21 C20.1,21 21,20.1 21,19 L21,8.99999998 C21,7.89999998 20.1,6.99999998 19,6.99999998 Z M19,9.99999999 L19,9.99999999 C19,10.55 18.55,11 18,11 L9.99999999,11 C9.44999999,11 8.99999999,10.55 8.99999999,9.99999999 L8.99999999,9.99999999 C8.99999999,9.44999999 9.44999999,8.99999999 9.99999999,8.99999999 L18,8.99999999 C18.55,8.99999999 19,9.44999999 19,9.99999999 Z M13,15 L13,13 L15,13 L15,15 L13,15 Z M15,17 L15,19 L13,19 L13,17 L15,17 Z M11,15 L8.99999999,15 L8.99999999,13 L11,13 L11,15 Z M17,13 L19,13 L19,15 L17,15 L17,13 Z M8.99999999,17 L11,17 L11,19 L8.99999999,19 L8.99999999,17 Z M17,19 L17,17 L19,17 L19,19 L17,19 Z M5.99999996,17 L4.99999996,17 C3.89999997,17 2.99999996,16.1 2.99999996,15 L2.99999996,4.99999996 C2.99999996,3.89999997 3.89999997,2.99999996 4.99999996,2.99999996 L15,2.99999996 C16.1,2.99999996 17,3.89999997 17,4.99999996 L17,5.99999996 L15,5.99999996 L15,4.99999996 L4.99999996,4.99999996 L4.99999996,15 L5.99999996,15 L5.99999996,17 Z',
      id: 'ActionsTableViewIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'table_view',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTableViewIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTableViewIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTableViewIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTableViewIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
