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
  title: ['near_me'],
  paths: [
    {
      d:
        'M18.75,3.93999997 L4.06999997,10.08 C3.23999996,10.43 3.25999996,11.61 4.08999997,11.93 L9.42999999,14 C9.68999999,14.1 9.89999999,14.31 9.99999999,14.57 L12.06,19.9 C12.38,20.74 13.57,20.76 13.92,19.93 L20.07,5.25999997 C20.4,4.42999997 19.57,3.59999997 18.75,3.93999997 Z',
      id: 'MapsNearMeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'near_me',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsNearMeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsNearMeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsNearMeIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsNearMeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
