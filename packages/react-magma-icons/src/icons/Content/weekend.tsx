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
  title: ['weekend'],
  paths: [
    {
      d:
        'M21,9.99999999 C19.9,9.99999999 19,10.9 19,12 L19,15 L4.99999995,15 L4.99999995,12 C4.99999995,10.9 4.09999997,9.99999999 2.99999995,9.99999999 C1.89999996,9.99999999 0.999999954,10.9 0.999999954,12 L0.999999954,17 C0.999999954,18.1 1.89999996,19 2.99999995,19 L21,19 C22.1,19 23,18.1 23,17 L23,12 C23,10.9 22.1,9.99999999 21,9.99999999 Z M18,4.99999997 L5.99999997,4.99999997 C4.89999997,4.99999997 3.99999997,5.89999997 3.99999997,6.99999997 L3.99999997,9.14999999 C5.15999997,9.55999999 5.99999997,10.66 5.99999997,11.97 L5.99999997,14 L18,14 L18,11.97 C18,10.67 18.84,9.56999999 20,9.14999999 L20,6.99999997 C20,5.89999997 19.1,4.99999997 18,4.99999997 Z',
      id: 'ContentWeekendIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'weekend',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentWeekendIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentWeekendIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentWeekendIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentWeekendIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
