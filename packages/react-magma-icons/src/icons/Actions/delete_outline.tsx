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
  title: ['delete_outline'],
  paths: [
    {
      d:
        'M5.99999997,19 C5.99999997,20.1 6.89999998,21 7.99999997,21 L16,21 C17.1,21 18,20.1 18,19 L18,8.99999998 C18,7.89999998 17.1,6.99999998 16,6.99999998 L7.99999997,6.99999998 C6.89999998,6.99999998 5.99999997,7.89999998 5.99999997,8.99999998 L5.99999997,19 Z M8.99999998,8.99999999 L15,8.99999999 C15.55,8.99999999 16,9.44999999 16,9.99999999 L16,18 C16,18.55 15.55,19 15,19 L8.99999998,19 C8.44999999,19 7.99999998,18.55 7.99999998,18 L7.99999998,9.99999999 C7.99999998,9.44999999 8.44999999,8.99999999 8.99999998,8.99999999 Z M15.5,3.99999996 L14.79,3.28999996 C14.61,3.10999996 14.35,2.99999996 14.09,2.99999996 L9.90999999,2.99999996 C9.64999999,2.99999996 9.38999999,3.10999996 9.20999999,3.28999996 L8.49999997,3.99999996 L5.99999997,3.99999996 C5.44999997,3.99999996 4.99999997,4.44999997 4.99999997,4.99999996 C4.99999997,5.54999997 5.44999997,5.99999996 5.99999997,5.99999996 L18,5.99999996 C18.55,5.99999996 19,5.54999997 19,4.99999996 C19,4.44999997 18.55,3.99999996 18,3.99999996 L15.5,3.99999996 Z',
      id: 'ActionsDeleteOutlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'delete_outline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDeleteOutlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDeleteOutlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDeleteOutlineIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDeleteOutlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
