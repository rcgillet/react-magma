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
  title: ['sports_volleyball'],
  paths: [
    {
      d:
        'M17,16.04 L20.11,17.84 C18.29,20.35 15.34,22 12,22 C10.6,22 9.27999999,21.71 8.06999998,21.2 L8.06999998,21.2 L17,16.04 Z M12,13.15 L15,14.89 L6.06999998,20.03 C5.22999997,19.42 4.49999997,18.67 3.88999997,17.83 L3.88999997,17.83 L12,13.15 Z M5.99999996,4.00999997 L5.99999996,14.31 L2.88999996,16.11 C2.31999996,14.85 1.99999996,13.46 1.99999996,12 C1.99999996,8.72999999 3.57999996,5.83999997 5.99999996,4.00999997 L5.99999996,4.00999997 Z M13,7.95999998 L21.93,13.12 C21.81,14.17 21.53,15.17 21.11,16.1 L21.11,16.1 L13,11.42 L13,7.95999998 Z M11,2.04999996 L11,11.42 L7.99999998,13.16 L7.99999998,2.83999996 C8.92999999,2.42999996 9.93999999,2.15999996 11,2.04999996 L11,2.04999996 Z M13,2.04999996 C17.66,2.50999996 21.37,6.17999998 21.92,10.81 L21.92,10.81 L13,5.64999997 Z',
      id: 'SocialSportsVolleyballIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_volleyball',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsVolleyballIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsVolleyballIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsVolleyballIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsVolleyballIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
