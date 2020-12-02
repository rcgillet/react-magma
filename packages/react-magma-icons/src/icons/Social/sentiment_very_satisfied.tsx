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
  title: ['sentiment_very_satisfied'],
  paths: [
    {
      d:
        'M8.87999999,9.93999999 L9.40999999,10.47 C9.69999999,10.76 10.18,10.76 10.47,10.47 C10.76,10.18 10.76,9.69999999 10.47,9.40999999 L9.58999999,8.52999999 C9.19999999,8.13999998 8.56999999,8.13999998 8.17999998,8.52999999 L7.28999998,9.40999999 C6.99999998,9.69999999 6.99999998,10.18 7.28999998,10.47 C7.57999998,10.76 8.05999998,10.76 8.34999998,10.47 L8.87999999,9.93999999 L8.87999999,9.93999999 Z M12,17.5 C14.03,17.5 15.8,16.39 16.75,14.75 C16.94,14.42 16.7,14 16.31,14 L7.68999998,14 C7.30999998,14 7.05999998,14.42 7.24999998,14.75 C8.19999998,16.39 9.96999999,17.5 12,17.5 Z M13.53,10.47 C13.82,10.76 14.3,10.76 14.59,10.47 L15.12,9.93999999 L15.65,10.47 C15.94,10.76 16.42,10.76 16.71,10.47 C17,10.18 17,9.69999999 16.71,9.40999999 L15.83,8.52999999 C15.44,8.13999998 14.81,8.13999998 14.42,8.52999999 L13.54,9.40999999 C13.24,9.69999999 13.24,10.18 13.53,10.47 L13.53,10.47 Z M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.46999998 1.99999996,12 C1.99999996,17.53 6.46999998,22 11.99,22 C17.51,22 22,17.53 22,12 C22,6.46999998 17.52,1.99999996 11.99,1.99999996 Z M12,20 C7.57999998,20 3.99999997,16.42 3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C16.42,3.99999997 20,7.57999998 20,12 C20,16.42 16.42,20 12,20 Z',
      id: 'SocialSentimentVerySatisfiedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sentiment_very_satisfied',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSentimentVerySatisfiedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSentimentVerySatisfiedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSentimentVerySatisfiedIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSentimentVerySatisfiedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
