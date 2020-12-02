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
  title: ['all_out'],
  paths: [
    {
      d:
        'M3.99999997,4.49999997 L3.99999997,7.99999997 L7.99999997,3.99999997 L4.49999997,3.99999997 C4.21999997,3.99999997 3.99999997,4.21999997 3.99999997,4.49999997 Z M16,3.99999997 L20,7.99999997 L20,4.49999997 C20,4.21999997 19.78,3.99999997 19.5,3.99999997 L16,3.99999997 Z M20,19.5 L20,16 L16,20 L19.5,20 C19.78,20 20,19.78 20,19.5 Z M4.49999997,20 L7.99999997,20 L3.99999997,16 L3.99999997,19.5 C3.99999997,19.78 4.21999997,20 4.49999997,20 Z M19,12 C19,8.12999998 15.87,4.99999997 12,4.99999997 C8.12999998,4.99999997 4.99999997,8.12999998 4.99999997,12 C4.99999997,15.87 8.12999998,19 12,19 C15.87,19 19,15.87 19,12 Z M12,17 C9.23999999,17 6.99999998,14.76 6.99999998,12 C6.99999998,9.23999999 9.23999999,6.99999998 12,6.99999998 C14.76,6.99999998 17,9.23999999 17,12 C17,14.76 14.76,17 12,17 Z',
      id: 'ActionsAllOutIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'all_out',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAllOutIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAllOutIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAllOutIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAllOutIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
