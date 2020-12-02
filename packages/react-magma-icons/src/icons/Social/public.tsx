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
  title: ['public'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M11,19.93 C7.04999998,19.44 3.99999997,16.08 3.99999997,12 C3.99999997,11.38 4.07999997,10.79 4.20999997,10.21 L8.99999997,15 L8.99999997,16 C8.99999997,17.1 9.89999999,18 11,18 L11,19.93 Z M17.9,17.39 C17.64,16.58 16.9,16 16,16 L15,16 L15,13 C15,12.45 14.55,12 14,12 L7.99999998,12 L7.99999998,9.99999999 L9.99999998,9.99999999 C10.55,9.99999999 11,9.54999999 11,8.99999999 L11,6.99999998 L13,6.99999998 C14.1,6.99999998 15,6.09999998 15,4.99999997 L15,4.58999997 C17.93,5.77999997 20,8.64999999 20,12 C20,14.08 19.2,15.97 17.9,17.39 Z',
      id: 'SocialPublicIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'public',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPublicIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPublicIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPublicIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPublicIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
