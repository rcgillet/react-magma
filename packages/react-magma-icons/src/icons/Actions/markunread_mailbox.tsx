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
  title: ['markunread_mailbox'],
  paths: [
    {
      d:
        'M20,5.99999995 L9.99999996,5.99999995 L9.99999996,10.9999999 C9.99999996,11.55 9.54999999,11.9999999 8.99999996,11.9999999 C8.44999999,11.9999999 7.99999996,11.55 7.99999996,10.9999999 L7.99999996,3.99999995 L13,3.99999995 C13.55,3.99999995 14,3.54999996 14,2.99999995 L14,0.99999995 C14,0.449999952 13.55,-5.00003292e-08 13,-5.00003292e-08 L6.99999996,-5.00003292e-08 C6.44999998,-5.00003292e-08 5.99999996,0.449999952 5.99999996,0.99999995 L5.99999996,5.99999995 L3.99999996,5.99999995 C2.89999996,5.99999995 1.99999996,6.89999998 1.99999996,7.99999995 L1.99999996,19.9999999 C1.99999996,21.1 2.89999996,21.9999999 3.99999996,21.9999999 L20,21.9999999 C21.1,21.9999999 22,21.1 22,19.9999999 L22,7.99999995 C22,6.89999998 21.1,5.99999995 20,5.99999995 Z',
      id: 'ActionsMarkunreadMailboxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'markunread_mailbox',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsMarkunreadMailboxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsMarkunreadMailboxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsMarkunreadMailboxIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsMarkunreadMailboxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
