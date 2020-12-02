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
  title: ['reply'],
  paths: [
    {
      d:
        'M9.99999999,8.99999999 L9.99999999,7.40999998 C9.99999999,6.51999998 8.91999999,6.06999998 8.28999998,6.69999998 L3.69999997,11.29 C3.30999996,11.68 3.30999996,12.31 3.69999997,12.7 L8.28999998,17.29 C8.91999999,17.92 9.99999999,17.48 9.99999999,16.59 L9.99999999,14.9 C15,14.9 18.5,16.5 21,20 C20,15 17,9.99999999 9.99999999,8.99999999 Z',
      id: 'ContentReplyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'reply',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentReplyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentReplyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentReplyIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentReplyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
