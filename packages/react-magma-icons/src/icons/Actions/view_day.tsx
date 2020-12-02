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
  title: ['view_day'],
  paths: [
    {
      d:
        'M2.99999996,21 L20,21 C20.55,21 21,20.55 21,20 L21,19 C21,18.45 20.55,18 20,18 L2.99999996,18 C2.44999996,18 1.99999996,18.45 1.99999996,19 L1.99999996,20 C1.99999996,20.55 2.44999996,21 2.99999996,21 Z M20,7.99999998 L2.99999996,7.99999998 C2.44999996,7.99999998 1.99999996,8.44999999 1.99999996,8.99999998 L1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 L20,16 C20.55,16 21,15.55 21,15 L21,8.99999998 C21,8.44999999 20.55,7.99999998 20,7.99999998 Z M1.99999996,3.99999996 L1.99999996,4.99999996 C1.99999996,5.54999997 2.44999996,5.99999996 2.99999996,5.99999996 L20,5.99999996 C20.55,5.99999996 21,5.54999997 21,4.99999996 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L2.99999996,2.99999996 C2.44999996,2.99999996 1.99999996,3.44999996 1.99999996,3.99999996 Z',
      id: 'ActionsViewDayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_day',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewDayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewDayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewDayIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewDayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
