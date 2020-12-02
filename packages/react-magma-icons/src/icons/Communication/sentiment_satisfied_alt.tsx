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
  title: ['sentiment_satisfied_alt'],
  paths: [
    {
      d:
        'M11.99,1.99999996 C17.52,1.99999996 22,6.47999998 22,12 C22,17.52 17.52,22 11.99,22 C6.46999998,22 1.99999996,17.52 1.99999996,12 C1.99999996,6.47999998 6.46999998,1.99999996 11.99,1.99999996 Z M12,3.99999997 C7.57999998,3.99999997 3.99999997,7.57999998 3.99999997,12 C3.99999997,16.42 7.57999998,20 12,20 C16.42,20 20,16.42 20,12 C20,7.57999998 16.42,3.99999997 12,3.99999997 Z M7.58999998,13.88 C7.93999998,13.66 8.39999999,13.77 8.61999999,14.12 C9.35999999,15.3 10.62,16 12,16 C13.38,16 14.64,15.3 15.38,14.13 C15.59,13.78 16.06,13.67 16.41,13.89 C16.76,14.11 16.87,14.57 16.65,14.92 C15.63,16.53 13.9,17.5 12,17.5 C10.1,17.5 8.36999998,16.54 7.34999998,14.91 C7.12999998,14.56 7.23999998,14.1 7.58999998,13.88 Z M15.5,7.99999998 C16.3284271,7.99999998 17,8.67157286 17,9.49999998 C17,10.3284271 16.3284271,11 15.5,11 C14.6715729,11 14,10.3284271 14,9.49999998 C14,8.67157286 14.6715729,7.99999998 15.5,7.99999998 Z M8.49999998,7.99999998 C9.32842711,7.99999998 9.99999998,8.67157286 9.99999998,9.49999998 C9.99999998,10.3284271 9.32842711,11 8.49999998,11 C7.67157286,11 6.99999998,10.3284271 6.99999998,9.49999998 C6.99999998,8.67157286 7.67157286,7.99999998 8.49999998,7.99999998 Z',
      id: 'CommunicationSentimentSatisfiedAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sentiment_satisfied_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationSentimentSatisfiedAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationSentimentSatisfiedAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationSentimentSatisfiedAltIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationSentimentSatisfiedAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
