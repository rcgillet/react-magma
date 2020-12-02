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
  title: ['people_outline'],
  paths: [
    {
      d:
        'M8.99999997,12 C10.93,12 12.5,10.43 12.5,8.49999997 C12.5,6.56999998 10.93,4.99999997 8.99999997,4.99999997 C7.06999998,4.99999997 5.49999997,6.56999998 5.49999997,8.49999997 C5.49999997,10.43 7.06999998,12 8.99999997,12 Z M8.99999998,6.99999998 C9.82999999,6.99999998 10.5,7.66999998 10.5,8.49999998 C10.5,9.32999999 9.82999999,9.99999998 8.99999998,9.99999998 C8.16999998,9.99999998 7.49999998,9.32999999 7.49999998,8.49999998 C7.49999998,7.66999998 8.16999998,6.99999998 8.99999998,6.99999998 Z M8.99999996,13.75 C6.65999998,13.75 1.99999996,14.92 1.99999996,17.25 L1.99999996,18 C1.99999996,18.55 2.44999996,19 2.99999996,19 L15,19 C15.55,19 16,18.55 16,18 L16,17.25 C16,14.92 11.34,13.75 8.99999996,13.75 Z M4.33999997,17 C5.17999997,16.42 7.20999998,15.75 8.99999999,15.75 C10.79,15.75 12.82,16.42 13.66,17 L4.33999997,17 Z M16.04,13.81 C17.2,14.65 18,15.77 18,17.25 L18,19 L21,19 C21.55,19 22,18.55 22,18 L22,17.25 C22,15.23 18.5,14.08 16.04,13.81 Z M15,12 C16.93,12 18.5,10.43 18.5,8.49999997 C18.5,6.56999998 16.93,4.99999997 15,4.99999997 C14.46,4.99999997 13.96,5.12999997 13.5,5.34999997 C14.13,6.23999998 14.5,7.32999998 14.5,8.49999997 C14.5,9.66999999 14.13,10.76 13.5,11.65 C13.96,11.87 14.46,12 15,12 Z',
      id: 'SocialPeopleOutlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'people_outline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPeopleOutlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPeopleOutlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPeopleOutlineIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPeopleOutlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
