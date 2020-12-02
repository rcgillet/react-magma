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
  title: ['people_alt'],
  paths: [
    {
      d:
        'M16.67,13.13 C19.43,13.53 23,14.82 23,17 L23,17 L23,19 C23,19.55 22.55,20 22,20 L22,20 L19,20 L19,17 C19,15.32 18.04,14.06 16.67,13.13 Z M8.99999995,13 C11.67,13 17,14.34 17,17 L17,17 L17,19 C17,19.55 16.55,20 16,20 L16,20 L1.99999995,20 C1.44999996,20 0.999999954,19.55 0.999999954,19 L0.999999954,19 L0.999999954,17 C0.999999954,14.34 6.32999998,13 8.99999995,13 Z M8.99999997,3.99999997 C11.209139,3.99999997 13,5.79086097 13,7.99999997 C13,10.209139 11.209139,12 8.99999997,12 C6.79086098,12 4.99999997,10.209139 4.99999997,7.99999997 C4.99999997,5.79086097 6.79086098,3.99999997 8.99999997,3.99999997 Z M15,3.99999997 C17.21,3.99999997 19,5.78999997 19,7.99999997 C19,10.21 17.21,12 15,12 C14.53,12 14.09,11.9 13.67,11.76 C14.5,10.73 15,9.41999999 15,7.99999997 C15,6.57999998 14.5,5.26999997 13.67,4.23999997 C14.09,4.09999997 14.53,3.99999997 15,3.99999997 Z',
      id: 'SocialPeopleAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'people_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPeopleAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPeopleAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPeopleAltIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPeopleAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
