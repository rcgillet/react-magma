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
  title: ['drag_indicator'],
  paths: [
    {
      d:
        'M11,18 C11,19.1 10.1,20 8.99999998,20 C7.89999998,20 6.99999998,19.1 6.99999998,18 C6.99999998,16.9 7.89999998,16 8.99999998,16 C10.1,16 11,16.9 11,18 Z M8.99999998,9.99999999 C7.89999998,9.99999999 6.99999998,10.9 6.99999998,12 C6.99999998,13.1 7.89999998,14 8.99999998,14 C10.1,14 11,13.1 11,12 C11,10.9 10.1,9.99999999 8.99999998,9.99999999 Z M8.99999998,3.99999997 C7.89999998,3.99999997 6.99999998,4.89999997 6.99999998,5.99999997 C6.99999998,7.09999998 7.89999998,7.99999997 8.99999998,7.99999997 C10.1,7.99999997 11,7.09999998 11,5.99999997 C11,4.89999997 10.1,3.99999997 8.99999998,3.99999997 Z M15,7.99999997 C16.1,7.99999997 17,7.09999998 17,5.99999997 C17,4.89999997 16.1,3.99999997 15,3.99999997 C13.9,3.99999997 13,4.89999997 13,5.99999997 C13,7.09999998 13.9,7.99999997 15,7.99999997 Z M15,9.99999999 C13.9,9.99999999 13,10.9 13,12 C13,13.1 13.9,14 15,14 C16.1,14 17,13.1 17,12 C17,10.9 16.1,9.99999999 15,9.99999999 Z M15,16 C13.9,16 13,16.9 13,18 C13,19.1 13.9,20 15,20 C16.1,20 17,19.1 17,18 C17,16.9 16.1,16 15,16 Z',
      id: 'ActionsDragIndicatorIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'drag_indicator',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDragIndicatorIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDragIndicatorIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDragIndicatorIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDragIndicatorIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
