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
  title: ['person_add'],
  paths: [
    {
      d:
        'M15,12 C17.21,12 19,10.21 19,7.99999997 C19,5.78999997 17.21,3.99999997 15,3.99999997 C12.79,3.99999997 11,5.78999997 11,7.99999997 C11,10.21 12.79,12 15,12 Z M5.99999995,9.99999998 L5.99999995,7.99999998 C5.99999995,7.44999998 5.54999997,6.99999998 4.99999995,6.99999998 C4.44999997,6.99999998 3.99999995,7.44999998 3.99999995,7.99999998 L3.99999995,9.99999998 L1.99999995,9.99999998 C1.44999996,9.99999998 0.999999954,10.45 0.999999954,11 C0.999999954,11.55 1.44999996,12 1.99999995,12 L3.99999995,12 L3.99999995,14 C3.99999995,14.55 4.44999997,15 4.99999995,15 C5.54999997,15 5.99999995,14.55 5.99999995,14 L5.99999995,12 L7.99999995,12 C8.54999999,12 8.99999995,11.55 8.99999995,11 C8.99999995,10.45 8.54999999,9.99999998 7.99999995,9.99999998 L5.99999995,9.99999998 Z M15,14 C12.33,14 6.99999998,15.34 6.99999998,18 L6.99999998,19 C6.99999998,19.55 7.44999998,20 7.99999998,20 L22,20 C22.55,20 23,19.55 23,19 L23,18 C23,15.34 17.67,14 15,14 Z',
      id: 'SocialPersonAddIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'person_add',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPersonAddIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPersonAddIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPersonAddIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPersonAddIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
