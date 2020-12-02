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
  title: ['emoji_objects'],
  paths: [
    {
      d:
        'M12,2.99999996 C11.54,2.99999996 11.07,3.03999996 10.6,3.13999996 C7.83999998,3.66999997 5.63999997,5.89999997 5.11999997,8.65999999 C4.63999997,11.27 5.59999997,13.67 7.33999998,15.22 C7.76999998,15.6 7.99999998,16.13 7.99999998,16.69 L7.99999998,19 C7.99999998,20.1 8.89999999,21 9.99999999,21 L10.28,21 C10.63,21.6 11.26,22 12,22 C12.74,22 13.38,21.6 13.72,21 L14,21 C15.1,21 16,20.1 16,19 L16,16.69 C16,16.14 16.22,15.6 16.64,15.23 C18.09,13.95 19,12.08 19,9.99999996 C19,6.12999998 15.87,2.99999996 12,2.99999996 Z M12.5,14 L11.5,14 L11.5,11.41 L9.66999999,9.58999999 L10.38,8.87999999 L12,10.5 L13.62,8.87999999 L14.33,9.58999999 L12.5,11.42 L12.5,14 L12.5,14 Z M13.5,19 C13.49,19 13.48,18.99 13.47,18.99 L13.47,19 L10.53,19 L10.53,18.99 C10.52,18.99 10.51,19 10.5,19 C10.22,19 9.99999999,18.78 9.99999999,18.5 C9.99999999,18.22 10.22,18 10.5,18 C10.51,18 10.52,18.01 10.53,18.01 L10.53,18 L13.47,18 L13.47,18.01 C13.48,18.01 13.49,18 13.5,18 C13.78,18 14,18.22 14,18.5 C14,18.78 13.78,19 13.5,19 Z M13.5,17 L10.5,17 C10.22,17 9.99999999,16.78 9.99999999,16.5 C9.99999999,16.22 10.22,16 10.5,16 L13.5,16 C13.78,16 14,16.22 14,16.5 C14,16.78 13.78,17 13.5,17 Z',
      id: 'SocialEmojiObjectsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'emoji_objects',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialEmojiObjectsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialEmojiObjectsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialEmojiObjectsIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialEmojiObjectsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
