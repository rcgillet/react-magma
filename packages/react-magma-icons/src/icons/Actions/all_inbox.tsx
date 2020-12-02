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
  title: ['all_inbox'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,12 C2.99999996,13.1 3.89999997,14 4.99999996,14 L19,14 C20.1,14 21,13.1 21,12 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M19,8.99999997 L15.86,8.99999997 C15.39,8.99999997 15.02,9.32999999 14.89,9.77999999 C14.53,11.04 13.35,12 12,12 C10.65,12 9.46999999,11.04 9.10999999,9.77999999 C8.97999999,9.32999999 8.60999999,8.99999997 8.13999998,8.99999997 L4.99999997,8.99999997 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,8.99999997 Z M15.87,16 L20,16 C20.55,16 21,16.45 21,17 L21,19 C21,20.1 20.1,21 19,21 L4.99999996,21 C3.89999997,21 2.99999996,20.1 2.99999996,19 L2.99999996,17 C2.99999996,16.45 3.44999996,16 3.99999996,16 L8.12999998,16 C8.59999999,16 8.97999999,16.34 9.10999999,16.8 C9.45999999,18.07 10.62,19 12,19 C13.38,19 14.54,18.07 14.89,16.8 C15.02,16.34 15.4,16 15.87,16 Z',
      id: 'ActionsAllInboxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'all_inbox',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAllInboxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAllInboxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAllInboxIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAllInboxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
