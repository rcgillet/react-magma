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
  title: ['fireplace'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M20,19 C20,19.55 19.55,20 19,20 L18,20 L18,19 C18,18.45 17.55,18 17,18 L15.85,18 C16.56,17.15 17,16.11 17,15 C17,13.11 15.91,12.16 15.15,11.64 C13.29,10.37 12.92,8.85999999 12.9,7.91999998 C12.89,7.51999998 12.47,7.28999998 12.13,7.48999998 C6.32999998,10.92 6.97999998,14.49 6.99999997,15 C7.02999998,15.96 7.48999998,17.07 8.23999998,18 L6.99999997,18 C6.44999998,18 5.99999997,18.45 5.99999997,19 L5.99999997,20 L4.99999997,20 C4.44999997,20 3.99999997,19.55 3.99999997,19 L3.99999997,4.99999997 C3.99999997,4.44999997 4.44999997,3.99999997 4.99999997,3.99999997 L19,3.99999997 C19.55,3.99999997 20,4.44999997 20,4.99999997 L20,19 Z M13.2,13.74 C13.12,13.28 13.13,12.89 13.28,12.46 C13.82,13.67 15.43,14.1 15.26,15.64 C15.07,17.33 13.15,18.01 11.87,16.96 C12.63,16.72 13.27,15.92 13.4,15.33 C13.52,14.78 13.29,14.29 13.2,13.74 Z',
      id: 'SocialFireplaceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fireplace',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialFireplaceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialFireplaceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialFireplaceIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialFireplaceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
