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
  title: ['sentiment_dissatisfied'],
  paths: [
    {
      d:
        'M11.99,1.99999996 C17.52,1.99999996 22,6.47999998 22,12 C22,17.52 17.52,22 11.99,22 C6.46999998,22 1.99999996,17.52 1.99999996,12 C1.99999996,6.47999998 6.46999998,1.99999996 11.99,1.99999996 Z M12,3.99999997 C7.57999998,3.99999997 3.99999997,7.57999998 3.99999997,12 C3.99999997,16.42 7.57999998,20 12,20 C16.42,20 20,16.42 20,12 C20,7.57999998 16.42,3.99999997 12,3.99999997 Z M12,14 C13.9,14 15.63,14.96 16.66,16.58 C16.88,16.93 16.77,17.39 16.42,17.61 C16.29,17.68 16.16,17.72 16.02,17.72 C15.77,17.72 15.52,17.6 15.38,17.37 C14.64,16.19 13.38,15.49 12,15.49 C10.62,15.49 9.35999999,16.19 8.61999999,17.37 C8.39999998,17.72 7.93999998,17.83 7.58999998,17.61 C7.23999998,17.39 7.12999998,16.93 7.34999998,16.58 C8.36999998,14.97 10.1,14 12,14 Z M15.5,7.99999998 C16.3284271,7.99999998 17,8.67157286 17,9.49999998 C17,10.3284271 16.3284271,11 15.5,11 C14.6715729,11 14,10.3284271 14,9.49999998 C14,8.67157286 14.6715729,7.99999998 15.5,7.99999998 Z M8.49999998,7.99999998 C9.32842711,7.99999998 9.99999998,8.67157286 9.99999998,9.49999998 C9.99999998,10.3284271 9.32842711,11 8.49999998,11 C7.67157286,11 6.99999998,10.3284271 6.99999998,9.49999998 C6.99999998,8.67157286 7.67157286,7.99999998 8.49999998,7.99999998 Z',
      id: 'SocialSentimentDissatisfiedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sentiment_dissatisfied',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSentimentDissatisfiedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSentimentDissatisfiedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSentimentDissatisfiedIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSentimentDissatisfiedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
