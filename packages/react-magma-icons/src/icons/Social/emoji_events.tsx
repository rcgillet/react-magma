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
  title: ['emoji_events'],
  paths: [
    {
      d:
        'M19,4.99999996 L17,4.99999996 L17,3.99999996 C17,3.44999996 16.55,2.99999996 16,2.99999996 L7.99999996,2.99999996 C7.44999998,2.99999996 6.99999996,3.44999996 6.99999996,3.99999996 L6.99999996,4.99999996 L4.99999996,4.99999996 C3.89999997,4.99999996 2.99999996,5.89999997 2.99999996,6.99999996 L2.99999996,7.99999996 C2.99999996,10.55 4.91999997,12.63 7.38999998,12.94 C8.01999998,14.44 9.36999999,15.57 11,15.9 L11,19 L7.99999996,19 C7.44999998,19 6.99999996,19.45 6.99999996,20 L6.99999996,20 C6.99999996,20.55 7.44999998,21 7.99999996,21 L16,21 C16.55,21 17,20.55 17,20 L17,20 C17,19.45 16.55,19 16,19 L13,19 L13,15.9 C14.63,15.57 15.98,14.44 16.61,12.94 C19.08,12.63 21,10.55 21,7.99999996 L21,6.99999996 C21,5.89999997 20.1,4.99999996 19,4.99999996 Z M4.99999997,7.99999998 L4.99999997,6.99999998 L6.99999997,6.99999998 L6.99999997,10.82 C5.83999997,10.4 4.99999997,9.29999999 4.99999997,7.99999998 Z M19,7.99999998 C19,9.29999999 18.16,10.4 17,10.82 L17,6.99999998 L19,6.99999998 L19,7.99999998 Z',
      id: 'SocialEmojiEventsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'emoji_events',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialEmojiEventsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialEmojiEventsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialEmojiEventsIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialEmojiEventsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
