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
  title: ['pause'],
  paths: [
    {
      d:
        'M7.99999998,19 C9.09999999,19 9.99999998,18.1 9.99999998,17 L9.99999998,6.99999997 C9.99999998,5.89999997 9.09999999,4.99999997 7.99999998,4.99999997 C6.89999998,4.99999997 5.99999998,5.89999997 5.99999998,6.99999997 L5.99999998,17 C5.99999998,18.1 6.89999998,19 7.99999998,19 Z M14,6.99999997 L14,17 C14,18.1 14.9,19 16,19 C17.1,19 18,18.1 18,17 L18,6.99999997 C18,5.89999997 17.1,4.99999997 16,4.99999997 C14.9,4.99999997 14,5.89999997 14,6.99999997 Z',
      id: 'AVPauseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pause',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPauseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPauseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPauseIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPauseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
