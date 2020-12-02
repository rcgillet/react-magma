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
  title: ['lock'],
  paths: [
    {
      d:
        'M18,7.99999995 L17,7.99999995 L17,5.99999995 C17,3.23999996 14.76,0.999999954 12,0.999999954 C9.23999999,0.999999954 6.99999997,3.23999996 6.99999997,5.99999995 L6.99999997,7.99999995 L5.99999997,7.99999995 C4.89999997,7.99999995 3.99999997,8.89999999 3.99999997,9.99999995 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,9.99999995 C20,8.89999999 19.1,7.99999995 18,7.99999995 Z M12,17 C10.9,17 9.99999999,16.1 9.99999999,15 C9.99999999,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M8.99999999,7.99999996 L8.99999999,5.99999996 C8.99999999,4.33999997 10.34,2.99999996 12,2.99999996 C13.66,2.99999996 15,4.33999997 15,5.99999996 L15,7.99999996 L8.99999999,7.99999996 Z',
      id: 'ActionsLockIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'lock',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsLockIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsLockIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsLockIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsLockIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
