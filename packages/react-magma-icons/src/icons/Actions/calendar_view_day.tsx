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
  title: ['calendar_view_day'],
  paths: [
    {
      d:
        'M3.99999996,17 L20,17 C20.55,17 21,17.45 21,18 C21,18.55 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,18.55 2.99999996,18 C2.99999996,17.45 3.44999996,17 3.99999996,17 Z M3.99999996,9.99999999 L20,9.99999999 C20.55,9.99999999 21,10.45 21,11 L21,14 C21,14.55 20.55,15 20,15 L3.99999996,15 C3.44999996,15 2.99999996,14.55 2.99999996,14 L2.99999996,11 C2.99999996,10.45 3.44999996,9.99999999 3.99999996,9.99999999 Z M3.99999996,5.99999998 L20,5.99999998 C20.55,5.99999998 21,6.44999998 21,6.99999998 C21,7.54999998 20.55,7.99999998 20,7.99999998 L3.99999996,7.99999998 C3.44999996,7.99999998 2.99999996,7.54999998 2.99999996,6.99999998 C2.99999996,6.44999998 3.44999996,5.99999998 3.99999996,5.99999998 Z',
      id: 'ActionsCalendarViewDayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'calendar_view_day',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCalendarViewDayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCalendarViewDayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCalendarViewDayIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCalendarViewDayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
