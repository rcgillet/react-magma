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
  title: ['accessibility'],
  paths: [
    {
      d:
        'M12,1.99999996 C13.1,1.99999996 14,2.89999996 14,3.99999996 C14,5.09999997 13.1,5.99999996 12,5.99999996 C10.9,5.99999996 9.99999999,5.09999997 9.99999999,3.99999996 C9.99999999,2.89999996 10.9,1.99999996 12,1.99999996 Z M20,8.99999998 L15,8.99999998 L15,21 C15,21.55 14.55,22 14,22 C13.45,22 13,21.55 13,21 L13,16 L11,16 L11,21 C11,21.55 10.55,22 9.99999996,22 C9.44999999,22 8.99999996,21.55 8.99999996,21 L8.99999996,8.99999998 L3.99999996,8.99999998 C3.44999996,8.99999998 2.99999996,8.54999999 2.99999996,7.99999998 C2.99999996,7.44999998 3.44999996,6.99999998 3.99999996,6.99999998 L20,6.99999998 C20.55,6.99999998 21,7.44999998 21,7.99999998 C21,8.54999999 20.55,8.99999998 20,8.99999998 Z',
      id: 'ActionsAccessibilityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'accessibility',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAccessibilityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAccessibilityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAccessibilityIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAccessibilityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
