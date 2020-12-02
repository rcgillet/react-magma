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
  title: ['share'],
  paths: [
    {
      d:
        'M18,16.08 C17.24,16.08 16.56,16.38 16.04,16.85 L8.90999999,12.7 C8.95999999,12.47 8.99999996,12.24 8.99999996,12 C8.99999996,11.76 8.95999999,11.53 8.90999999,11.3 L15.96,7.18999998 C16.5,7.68999998 17.21,7.99999996 18,7.99999996 C19.66,7.99999996 21,6.65999998 21,4.99999996 C21,3.33999996 19.66,1.99999996 18,1.99999996 C16.34,1.99999996 15,3.33999996 15,4.99999996 C15,5.23999997 15.04,5.46999997 15.09,5.69999997 L8.03999998,9.80999999 C7.49999996,9.30999999 6.78999998,8.99999996 5.99999996,8.99999996 C4.33999997,8.99999996 2.99999996,10.34 2.99999996,12 C2.99999996,13.66 4.33999997,15 5.99999996,15 C6.78999998,15 7.49999996,14.69 8.03999998,14.19 L15.16,18.35 C15.11,18.56 15.08,18.78 15.08,19 C15.08,20.61 16.39,21.92 18,21.92 C19.61,21.92 20.92,20.61 20.92,19 C20.92,17.39 19.61,16.08 18,16.08 Z',
      id: 'SocialShareIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'share',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialShareIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialShareIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialShareIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialShareIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
