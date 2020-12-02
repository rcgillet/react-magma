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
  title: ['pending_actions'],
  paths: [
    {
      d:
        'M18,2.99999995 L14.82,2.99999995 C14.4,1.83999996 13.3,0.999999954 12,0.999999954 C10.7,0.999999954 9.59999999,1.83999996 9.17999999,2.99999995 L5.99999997,2.99999995 C4.89999997,2.99999995 3.99999997,3.89999997 3.99999997,4.99999995 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L12.11,22 C11.52,21.43 11.04,20.75 10.69,20 L5.99999997,20 L5.99999997,4.99999995 L7.99999997,4.99999995 L7.99999997,5.99999995 C7.99999997,7.09999998 8.89999999,7.99999995 9.99999997,7.99999995 L14,7.99999995 C15.1,7.99999995 16,7.09999998 16,5.99999995 L16,4.99999995 L18,4.99999995 L18,10.08 C18.71,10.18 19.38,10.39 20,10.68 L20,4.99999995 C20,3.89999997 19.1,2.99999995 18,2.99999995 Z M12,4.99999996 C11.45,4.99999996 11,4.54999997 11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 C13,4.54999997 12.55,4.99999996 12,4.99999996 Z M17,12 C14.24,12 12,14.24 12,17 C12,19.76 14.24,22 17,22 C19.76,22 22,19.76 22,17 C22,14.24 19.76,12 17,12 Z M18.29,19 L16.64,17.35 C16.55,17.26 16.49,17.13 16.49,17 L16.49,14.51 C16.49,14.23 16.71,14.01 16.99,14.01 L16.99,14.01 C17.27,14.01 17.49,14.23 17.49,14.51 L17.49,16.8 L18.99,18.3 C19.19,18.5 19.19,18.81 18.99,19.01 L18.99,19.01 C18.8,19.2 18.49,19.2 18.29,19 Z',
      id: 'ActionsPendingActionsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pending_actions',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPendingActionsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPendingActionsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPendingActionsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPendingActionsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
