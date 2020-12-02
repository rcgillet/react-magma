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
  title: ['more_vert'],
  paths: [
    {
      d:
        'M12,7.99999997 C13.1,7.99999997 14,7.09999998 14,5.99999997 C14,4.89999997 13.1,3.99999997 12,3.99999997 C10.9,3.99999997 9.99999999,4.89999997 9.99999999,5.99999997 C9.99999999,7.09999998 10.9,7.99999997 12,7.99999997 Z M12,9.99999999 C10.9,9.99999999 9.99999999,10.9 9.99999999,12 C9.99999999,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,9.99999999 12,9.99999999 Z M12,16 C10.9,16 9.99999999,16.9 9.99999999,18 C9.99999999,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 Z',
      id: 'NavigationMoreVertIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'more_vert',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationMoreVertIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationMoreVertIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationMoreVertIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationMoreVertIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
