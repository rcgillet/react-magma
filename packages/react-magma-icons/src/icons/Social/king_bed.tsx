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
  title: ['king_bed'],
  paths: [
    {
      d:
        'M20,9.99999997 L20,6.99999997 C20,5.89999997 19.1,4.99999997 18,4.99999997 L5.99999996,4.99999997 C4.89999997,4.99999997 3.99999996,5.89999997 3.99999996,6.99999997 L3.99999996,9.99999997 C2.89999996,9.99999997 1.99999996,10.9 1.99999996,12 L1.99999996,17 L3.32999996,17 L3.83999997,18.53 C3.93999997,18.81 4.19999997,19 4.49999996,19 L4.49999996,19 C4.79999997,19 5.05999997,18.81 5.15999997,18.53 L5.66999997,17 L18.34,17 L18.85,18.53 C18.94,18.81 19.2,19 19.5,19 L19.5,19 C19.8,19 20.06,18.81 20.16,18.53 L20.67,17 L22,17 L22,12 C22,10.9 21.1,9.99999997 20,9.99999997 Z M11,9.99999998 L5.99999997,9.99999998 L5.99999997,7.99999998 C5.99999997,7.44999998 6.44999998,6.99999998 6.99999997,6.99999998 L11,6.99999998 L11,9.99999998 Z M18,9.99999998 L13,9.99999998 L13,6.99999998 L17,6.99999998 C17.55,6.99999998 18,7.44999998 18,7.99999998 L18,9.99999998 Z',
      id: 'SocialKingBedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'king_bed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialKingBedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialKingBedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialKingBedIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialKingBedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
