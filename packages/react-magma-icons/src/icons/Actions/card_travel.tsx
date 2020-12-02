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
  title: ['card_travel'],
  paths: [
    {
      d:
        'M20,5.99999996 L17,5.99999996 L17,3.99999996 C17,2.88999996 16.11,1.99999996 15,1.99999996 L8.99999996,1.99999996 C7.88999998,1.99999996 6.99999996,2.88999996 6.99999996,3.99999996 L6.99999996,5.99999996 L3.99999996,5.99999996 C2.88999996,5.99999996 1.99999996,6.88999998 1.99999996,7.99999996 L1.99999996,19 C1.99999996,20.11 2.88999996,21 3.99999996,21 L20,21 C21.11,21 22,20.11 22,19 L22,7.99999996 C22,6.88999998 21.11,5.99999996 20,5.99999996 Z M8.99999999,3.99999997 L15,3.99999997 L15,5.99999997 L8.99999999,5.99999997 L8.99999999,3.99999997 Z M20,19 L3.99999997,19 L3.99999997,17 L20,17 L20,19 Z M20,14 L3.99999997,14 L3.99999997,8.99999998 C3.99999997,8.44999999 4.44999997,7.99999998 4.99999997,7.99999998 L6.99999997,7.99999998 L6.99999997,8.99999998 C6.99999997,9.54999999 7.44999998,9.99999998 7.99999997,9.99999998 C8.54999999,9.99999998 8.99999997,9.54999999 8.99999997,8.99999998 L8.99999997,7.99999998 L15,7.99999998 L15,8.99999998 C15,9.54999999 15.45,9.99999998 16,9.99999998 C16.55,9.99999998 17,9.54999999 17,8.99999998 L17,7.99999998 L19,7.99999998 C19.55,7.99999998 20,8.44999999 20,8.99999998 L20,14 Z',
      id: 'ActionsCardTravelIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'card_travel',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCardTravelIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCardTravelIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCardTravelIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCardTravelIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
