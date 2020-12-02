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
  title: ['view_week'],
  paths: [
    {
      d:
        'M5.99999996,4.99999997 L2.99999996,4.99999997 C2.44999996,4.99999997 1.99999996,5.44999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,18.55 2.44999996,19 2.99999996,19 L5.99999996,19 C6.54999998,19 6.99999996,18.55 6.99999996,18 L6.99999996,5.99999997 C6.99999996,5.44999997 6.54999998,4.99999997 5.99999996,4.99999997 Z M20,4.99999997 L17,4.99999997 C16.45,4.99999997 16,5.44999997 16,5.99999997 L16,18 C16,18.55 16.45,19 17,19 L20,19 C20.55,19 21,18.55 21,18 L21,5.99999997 C21,5.44999997 20.55,4.99999997 20,4.99999997 Z M13,4.99999997 L9.99999999,4.99999997 C9.44999999,4.99999997 8.99999999,5.44999997 8.99999999,5.99999997 L8.99999999,18 C8.99999999,18.55 9.44999999,19 9.99999999,19 L13,19 C13.55,19 14,18.55 14,18 L14,5.99999997 C14,5.44999997 13.55,4.99999997 13,4.99999997 Z',
      id: 'ActionsViewWeekIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_week',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewWeekIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewWeekIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewWeekIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewWeekIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
