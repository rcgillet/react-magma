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
  title: ['block'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C13.85,3.99999997 15.55,4.62999997 16.9,5.68999997 L5.68999997,16.9 C4.62999997,15.55 3.99999997,13.85 3.99999997,12 Z M12,20 C10.15,20 8.44999999,19.37 7.09999998,18.31 L18.31,7.09999998 C19.37,8.44999999 20,10.15 20,12 C20,16.42 16.42,20 12,20 Z',
      id: 'ContentBlockIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'block',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentBlockIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentBlockIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentBlockIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentBlockIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
