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
  title: ['sports_cricket'],
  paths: [
    {
      d:
        'M15.76,16.34 L19.29,19.87 C19.68,20.26 19.68,20.9 19.29,21.29 L19.29,21.29 L19.1957897,21.373077 C18.8030178,21.6776923 18.23,21.65 17.87,21.29 L17.87,21.29 L14.34,17.76 L15.76,16.34 Z M5.14999997,4.31999997 C5.53999997,3.92999997 6.16999998,3.92999997 6.55999998,4.31999997 L6.55999998,4.31999997 L15.05,12.81 C15.44,13.2 15.44,13.83 15.05,14.22 L15.05,14.22 L12.22,17.05 C11.83,17.44 11.2,17.44 10.81,17.05 L10.81,17.05 L2.31999996,8.55999999 C1.92999996,8.16999998 1.92999996,7.53999998 2.31999996,7.14999998 L2.31999996,7.14999998 Z M18.5,1.99999996 C20.4329967,1.99999996 22,3.56700334 22,5.49999996 C22,7.43299661 20.4329967,8.99999996 18.5,8.99999996 C16.5670034,8.99999996 15,7.43299661 15,5.49999996 C15,3.56700334 16.5670034,1.99999996 18.5,1.99999996 Z',
      id: 'SocialSportsCricketIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_cricket',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsCricketIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsCricketIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsCricketIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsCricketIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
