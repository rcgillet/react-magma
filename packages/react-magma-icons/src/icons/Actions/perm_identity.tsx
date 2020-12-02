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
  title: ['perm_identity'],
  paths: [
    {
      d:
        'M12,12 C14.21,12 16,10.21 16,7.99999997 C16,5.78999997 14.21,3.99999997 12,3.99999997 C9.78999999,3.99999997 7.99999998,5.78999997 7.99999998,7.99999997 C7.99999998,10.21 9.78999999,12 12,12 Z M12,5.99999998 C13.1,5.99999998 14,6.89999998 14,7.99999998 C14,9.09999999 13.1,9.99999998 12,9.99999998 C10.9,9.99999998 9.99999999,9.09999999 9.99999999,7.99999998 C9.99999999,6.89999998 10.9,5.99999998 12,5.99999998 Z M12,13 C9.32999999,13 3.99999997,14.34 3.99999997,17 L3.99999997,19 C3.99999997,19.55 4.44999997,20 4.99999997,20 L19,20 C19.55,20 20,19.55 20,19 L20,17 C20,14.34 14.67,13 12,13 Z M18,18 L5.99999998,18 L5.99999998,17.01 C6.19999998,16.29 9.29999999,15 12,15 C14.7,15 17.8,16.29 18,17 L18,18 Z',
      id: 'ActionsPermIdentityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_identity',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermIdentityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermIdentityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermIdentityIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermIdentityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
