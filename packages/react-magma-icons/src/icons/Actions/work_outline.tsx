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
  title: ['work_outline'],
  paths: [
    {
      d:
        'M14,5.99999997 L14,3.99999997 L9.99999999,3.99999997 L9.99999999,5.99999997 L14,5.99999997 Z M3.99999997,8.99999998 L3.99999997,18 C3.99999997,18.55 4.44999997,19 4.99999997,19 L19,19 C19.55,19 20,18.55 20,18 L20,8.99999998 C20,8.44999999 19.55,7.99999998 19,7.99999998 L4.99999997,7.99999998 C4.44999997,7.99999998 3.99999997,8.44999999 3.99999997,8.99999998 Z M20,5.99999996 C21.11,5.99999996 22,6.88999998 22,7.99999996 L22,19 C22,20.11 21.11,21 20,21 L3.99999996,21 C2.88999996,21 1.99999996,20.11 1.99999996,19 L2.00999996,7.99999996 C2.00999996,6.88999998 2.88999996,5.99999996 3.99999996,5.99999996 L7.99999996,5.99999996 L7.99999996,3.99999996 C7.99999996,2.88999996 8.88999999,1.99999996 9.99999996,1.99999996 L14,1.99999996 C15.11,1.99999996 16,2.88999996 16,3.99999996 L16,5.99999996 L20,5.99999996 Z',
      id: 'ActionsWorkOutlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'work_outline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsWorkOutlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsWorkOutlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsWorkOutlineIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsWorkOutlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
