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
  title: ['pages'],
  paths: [
    {
      d:
        'M2.99999996,4.99999996 L2.99999996,11 L7.99999996,11 L7.39999998,8.61999999 C7.21999998,7.87999998 7.87999998,7.21999998 8.61999999,7.39999998 L11,7.99999996 L11,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 Z M7.99999996,13 L2.99999996,13 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L11,21 L11,16 L8.61999999,16.6 C7.88999998,16.78 7.21999998,16.12 7.40999998,15.39 L7.99999996,13 Z M15.38,16.6 L13,16 L13,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 L16,13 L16.6,15.38 C16.78,16.12 16.12,16.78 15.38,16.6 L15.38,16.6 Z M19,2.99999996 L13,2.99999996 L13,7.99999996 L15.38,7.39999998 C16.11,7.21999998 16.78,7.87999998 16.59,8.60999999 L16,11 L21,11 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z',
      id: 'SocialPagesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pages',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPagesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPagesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPagesIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPagesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
