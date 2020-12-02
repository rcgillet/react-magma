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
  title: ['vertical_split'],
  paths: [
    {
      d:
        'M3.99999996,15 L9.99999996,15 C10.55,15 11,14.55 11,14 C11,13.45 10.55,13 9.99999996,13 L3.99999996,13 C3.44999996,13 2.99999996,13.45 2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 Z M3.99999996,19 L9.99999996,19 C10.55,19 11,18.55 11,18 C11,17.45 10.55,17 9.99999996,17 L3.99999996,17 C3.44999996,17 2.99999996,17.45 2.99999996,18 C2.99999996,18.55 3.44999996,19 3.99999996,19 Z M3.99999996,11 L9.99999996,11 C10.55,11 11,10.55 11,9.99999999 C11,9.44999999 10.55,8.99999999 9.99999996,8.99999999 L3.99999996,8.99999999 C3.44999996,8.99999999 2.99999996,9.44999999 2.99999996,9.99999999 C2.99999996,10.55 3.44999996,11 3.99999996,11 Z M2.99999996,5.99999997 C2.99999996,6.54999998 3.44999996,6.99999997 3.99999996,6.99999997 L9.99999996,6.99999997 C10.55,6.99999997 11,6.54999998 11,5.99999997 C11,5.44999997 10.55,4.99999997 9.99999996,4.99999997 L3.99999996,4.99999997 C3.44999996,4.99999997 2.99999996,5.44999997 2.99999996,5.99999997 Z M14,4.99999997 L20,4.99999997 C20.55,4.99999997 21,5.44999997 21,5.99999997 L21,18 C21,18.55 20.55,19 20,19 L14,19 C13.45,19 13,18.55 13,18 L13,5.99999997 C13,5.44999997 13.45,4.99999997 14,4.99999997 Z',
      id: 'ActionsVerticalSplitIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'vertical_split',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsVerticalSplitIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsVerticalSplitIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsVerticalSplitIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsVerticalSplitIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
