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
  title: ['rss_feed'],
  paths: [
    {
      d:
        'M6.17999998,15.64 C7.38398074,15.64 8.35999998,16.6160193 8.35999998,17.82 C8.35999998,19.0239808 7.38398074,20 6.17999998,20 C4.97601922,20 3.99999997,19.0239808 3.99999997,17.82 C3.99999997,16.6160193 4.97601922,15.64 6.17999998,15.64 Z M3.99999997,11.63 C3.99999997,10.78 4.74999997,10.09 5.58999997,10.23 C9.78999999,10.9 13.1,14.21 13.78,18.41 C13.91,19.25 13.22,20 12.37,20 C11.66,20 11.09,19.47 10.97,18.77 C10.45,15.85 8.14999998,13.54 5.22999997,13.03 C4.52999997,12.91 3.99999997,12.34 3.99999997,11.63 Z M5.42270059,4.51193413 L5.55999997,4.51999997 C12.91,5.24999997 18.75,11.1 19.48,18.44 C19.56,19.27 18.9,20 18.06,20 C17.33,20 16.73,19.45 16.66,18.72 C16.06,12.71 11.28,7.92999998 5.26999997,7.32999998 C4.54999997,7.25999998 3.99999997,6.65999998 3.99999997,5.92999997 C3.99999997,5.09999997 4.72999997,4.42999997 5.55999997,4.51999997 Z',
      id: 'CommunicationRssFeedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'rss_feed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationRssFeedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationRssFeedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationRssFeedIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationRssFeedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
