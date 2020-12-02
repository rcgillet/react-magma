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
  title: ['event_seat'],
  paths: [
    {
      d:
        'M5.49999997,21 C6.32999998,21 6.99999997,20.33 6.99999997,19.5 L6.99999997,18 L17,18 L17,19.5 C17,20.33 17.67,21 18.5,21 C19.33,21 20,20.33 20,19.5 L20,17 C20,15.9 19.1,15 18,15 L5.99999997,15 C4.89999997,15 3.99999997,15.9 3.99999997,17 L3.99999997,19.5 C3.99999997,20.33 4.66999997,21 5.49999997,21 Z M20,9.99999999 L21,9.99999999 C21.55,9.99999999 22,10.45 22,11 L22,12 C22,12.55 21.55,13 21,13 L20,13 C19.45,13 19,12.55 19,12 L19,11 C19,10.45 19.45,9.99999999 20,9.99999999 Z M2.99999996,9.99999999 L3.99999996,9.99999999 C4.54999997,9.99999999 4.99999996,10.45 4.99999996,11 L4.99999996,12 C4.99999996,12.55 4.54999997,13 3.99999996,13 L2.99999996,13 C2.44999996,13 1.99999996,12.55 1.99999996,12 L1.99999996,11 C1.99999996,10.45 2.44999996,9.99999999 2.99999996,9.99999999 Z M17,13 L6.99999998,13 L6.99999998,4.99999996 C6.99999998,3.89999997 7.89999998,2.99999996 8.99999998,2.99999996 L15,2.99999996 C16.1,2.99999996 17,3.89999997 17,4.99999996 L17,13 Z',
      id: 'ActionsEventSeatIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'event_seat',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsEventSeatIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsEventSeatIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsEventSeatIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsEventSeatIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
