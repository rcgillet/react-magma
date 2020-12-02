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
  title: ['mood_bad'],
  paths: [
    {
      d:
        'M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.46999998,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 11.99,1.99999996 Z M12,20 C7.57999998,20 3.99999997,16.42 3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C16.42,3.99999997 20,7.57999998 20,12 C20,16.42 16.42,20 12,20 Z M15.5,11 C16.33,11 17,10.33 17,9.49999998 C17,8.66999999 16.33,7.99999998 15.5,7.99999998 C14.67,7.99999998 14,8.66999999 14,9.49999998 C14,10.33 14.67,11 15.5,11 Z M8.49999998,11 C9.32999999,11 9.99999998,10.33 9.99999998,9.49999998 C9.99999998,8.66999999 9.32999999,7.99999998 8.49999998,7.99999998 C7.66999998,7.99999998 6.99999998,8.66999999 6.99999998,9.49999998 C6.99999998,10.33 7.66999998,11 8.49999998,11 Z M12,13.5 C9.96999999,13.5 8.19999998,14.61 7.24999998,16.25 C7.05999998,16.58 7.30999998,17 7.68999998,17 L16.31,17 C16.69,17 16.94,16.58 16.75,16.25 C15.8,14.61 14.03,13.5 12,13.5 Z',
      id: 'SocialMoodBadIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mood_bad',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialMoodBadIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialMoodBadIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialMoodBadIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialMoodBadIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
