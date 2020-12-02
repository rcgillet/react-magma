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
  title: ['science'],
  paths: [
    {
      d:
        'M19.8,18.4 L14,10.67 L14,6.49999997 L15.35,4.80999997 C15.61,4.47999997 15.38,3.99999997 14.96,3.99999997 L9.03999999,3.99999997 C8.61999999,3.99999997 8.38999998,4.47999997 8.64999999,4.80999997 L9.99999999,6.49999997 L9.99999999,10.67 L4.19999997,18.4 C3.70999997,19.06 4.17999997,20 4.99999997,20 L19,20 C19.82,20 20.29,19.06 19.8,18.4 Z',
      id: 'SocialScienceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'science',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialScienceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialScienceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialScienceIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialScienceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
