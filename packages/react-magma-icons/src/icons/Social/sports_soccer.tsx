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
  title: ['sports_soccer'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M13,5.29999997 L14.35,4.34999997 C16.17,4.90999997 17.72,6.10999998 18.73,7.68999998 L18.34,9.02999999 L16.99,9.48999999 L13,6.69999998 L13,5.29999997 Z M9.64999999,4.34999997 L11,5.29999997 L11,6.69999998 L7.00999998,9.48999999 L5.65999997,9.02999999 L5.26999997,7.68999998 C6.27999998,6.11999998 7.82999998,4.91999997 9.64999999,4.34999997 Z M7.07999998,17.11 L5.93999997,17.21 C4.72999997,15.81 3.99999997,13.99 3.99999997,12 C3.99999997,11.88 4.00999997,11.77 4.01999997,11.65 L5.01999997,10.92 L6.39999998,11.4 L7.85999998,15.74 L7.07999998,17.11 Z M14.5,19.59 C13.71,19.85 12.87,20 12,20 C11.13,20 10.29,19.85 9.49999999,19.59 L8.80999999,18.1 L9.44999999,17 L14.56,17 L15.2,18.11 L14.5,19.59 Z M14.27,15 L9.72999999,15 L8.37999998,10.98 L12,8.43999999 L15.63,10.98 L14.27,15 Z M18.06,17.21 L16.92,17.11 L16.13,15.74 L17.59,11.4 L18.98,10.93 L19.98,11.66 C19.99,11.77 20,11.88 20,12 C20,13.99 19.27,15.81 18.06,17.21 Z',
      id: 'SocialSportsSoccerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_soccer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsSoccerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsSoccerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsSoccerIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsSoccerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
