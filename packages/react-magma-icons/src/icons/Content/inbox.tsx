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
  title: ['inbox'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.98999997,2.99999996 C3.87999997,2.99999996 3.00999996,3.88999997 3.00999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.87999997,21 4.98999997,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.88999997 20.1,2.99999996 19,2.99999996 Z M19,15 L15.87,15 C15.4,15 15.02,15.34 14.89,15.8 C14.54,17.07 13.37,18 12,18 C10.63,18 9.45999999,17.07 9.10999999,15.8 C8.97999999,15.34 8.59999999,15 8.12999998,15 L4.99999997,15 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,15 Z',
      id: 'ContentInboxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'inbox',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentInboxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentInboxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentInboxIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentInboxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
