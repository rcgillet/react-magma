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
  title: ['web'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M3.99999997,8.99999999 L14.5,8.99999999 L14.5,12.5 L3.99999997,12.5 L3.99999997,8.99999999 Z M3.99999997,14.5 L14.5,14.5 L14.5,18 L4.99999997,18 C4.44999997,18 3.99999997,17.55 3.99999997,17 L3.99999997,14.5 Z M19,18 L16.5,18 L16.5,8.99999999 L20,8.99999999 L20,17 C20,17.55 19.55,18 19,18 Z',
      id: 'AVWebIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'web',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVWebIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVWebIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVWebIcon-path-1',
        },
      ],
    },
  ],
};

export const AVWebIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
