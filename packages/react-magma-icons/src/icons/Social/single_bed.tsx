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
  title: ['single_bed'],
  paths: [
    {
      d:
        'M18,9.99999997 L18,6.99999997 C18,5.89999997 17.1,4.99999997 16,4.99999997 L7.99999997,4.99999997 C6.89999998,4.99999997 5.99999997,5.89999997 5.99999997,6.99999997 L5.99999997,9.99999997 C4.89999997,9.99999997 3.99999997,10.9 3.99999997,12 L3.99999997,17 L5.32999997,17 L5.83999997,18.53 C5.93999997,18.81 6.19999998,19 6.49999997,19 L6.49999997,19 C6.79999998,19 7.05999998,18.81 7.15999998,18.53 L7.66999998,17 L16.34,17 L16.85,18.53 C16.94,18.81 17.2,19 17.5,19 L17.5,19 C17.8,19 18.06,18.81 18.16,18.53 L18.67,17 L20,17 L20,12 C20,10.9 19.1,9.99999997 18,9.99999997 Z M11,9.99999998 L7.99999998,9.99999998 L7.99999998,7.99999998 C7.99999998,7.44999998 8.44999999,6.99999998 8.99999998,6.99999998 L11,6.99999998 L11,9.99999998 Z M16,9.99999998 L13,9.99999998 L13,6.99999998 L15,6.99999998 C15.55,6.99999998 16,7.44999998 16,7.99999998 L16,9.99999998 Z',
      id: 'SocialSingleBedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'single_bed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSingleBedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSingleBedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSingleBedIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSingleBedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
