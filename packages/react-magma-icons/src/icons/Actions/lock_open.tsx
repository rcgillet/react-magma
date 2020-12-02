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
  title: ['lock_open'],
  paths: [
    {
      d:
        'M12,13 C10.9,13 9.99999999,13.9 9.99999999,15 C9.99999999,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z M18,7.99999995 L17,7.99999995 L17,5.99999995 C17,3.23999996 14.76,0.999999954 12,0.999999954 C9.71999999,0.999999954 7.72999998,2.53999996 7.15999998,4.74999997 C7.01999998,5.28999997 7.33999998,5.82999997 7.87999998,5.96999997 C8.40999999,6.10999998 8.95999999,5.78999997 9.09999999,5.24999997 C9.43999999,3.92999997 10.63,2.99999995 12,2.99999995 C13.65,2.99999995 15,4.34999997 15,5.99999995 L15,7.99999995 L5.99999997,7.99999995 C4.89999997,7.99999995 3.99999997,8.89999999 3.99999997,9.99999995 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,9.99999995 C20,8.89999999 19.1,7.99999995 18,7.99999995 Z M18,19 C18,19.55 17.55,20 17,20 L6.99999998,20 C6.44999998,20 5.99999998,19.55 5.99999998,19 L5.99999998,11 C5.99999998,10.45 6.44999998,9.99999999 6.99999998,9.99999999 L17,9.99999999 C17.55,9.99999999 18,10.45 18,11 L18,19 Z',
      id: 'ActionsLockOpenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'lock_open',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsLockOpenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsLockOpenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsLockOpenIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsLockOpenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
