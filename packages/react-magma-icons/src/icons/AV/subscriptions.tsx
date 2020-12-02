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
  title: ['subscriptions'],
  paths: [
    {
      d:
        'M19,7.99999997 L4.99999997,7.99999997 C4.44999997,7.99999997 3.99999997,7.54999998 3.99999997,6.99999997 C3.99999997,6.44999998 4.44999997,5.99999997 4.99999997,5.99999997 L19,5.99999997 C19.55,5.99999997 20,6.44999998 20,6.99999997 C20,7.54999998 19.55,7.99999997 19,7.99999997 Z M17,1.99999996 L6.99999997,1.99999996 C6.44999998,1.99999996 5.99999997,2.44999996 5.99999997,2.99999996 C5.99999997,3.54999996 6.44999998,3.99999996 6.99999997,3.99999996 L17,3.99999996 C17.55,3.99999996 18,3.54999996 18,2.99999996 C18,2.44999996 17.55,1.99999996 17,1.99999996 Z M22,12 L22,20 C22,21.1 21.1,22 20,22 L3.99999996,22 C2.89999996,22 1.99999996,21.1 1.99999996,20 L1.99999996,12 C1.99999996,10.9 2.89999996,9.99999999 3.99999996,9.99999999 L20,9.99999999 C21.1,9.99999999 22,10.9 22,12 Z M15.19,15.56 L9.99999999,12.73 L9.99999999,19.26 L15.19,16.44 C15.54,16.25 15.54,15.75 15.19,15.56 Z',
      id: 'AVSubscriptionsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subscriptions',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVSubscriptionsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVSubscriptionsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVSubscriptionsIcon-path-1',
        },
      ],
    },
  ],
};

export const AVSubscriptionsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
