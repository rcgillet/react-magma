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
  title: ['account_box'],
  paths: [
    {
      d:
        'M2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 Z M15,8.99999998 C15,10.66 13.66,12 12,12 C10.34,12 8.99999999,10.66 8.99999999,8.99999998 C8.99999999,7.33999998 10.34,5.99999998 12,5.99999998 C13.66,5.99999998 15,7.33999998 15,8.99999998 Z M5.99999997,17 C5.99999997,15 9.99999997,13.9 12,13.9 C14,13.9 18,15 18,17 L18,18 L5.99999997,18 L5.99999997,17 Z',
      id: 'ActionsAccountBoxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'account_box',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAccountBoxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAccountBoxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAccountBoxIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAccountBoxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
