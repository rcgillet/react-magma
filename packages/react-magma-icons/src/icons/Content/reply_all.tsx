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
  title: ['reply_all'],
  paths: [
    {
      d:
        'M6.99999998,7.55999998 C6.99999998,6.61999998 5.85999997,6.13999998 5.18999997,6.80999998 L0.709999953,11.29 C0.319999951,11.68 0.319999951,12.31 0.709999953,12.7 L5.18999997,17.18 C5.85999997,17.86 6.99999998,17.38 6.99999998,16.44 C6.99999998,16.16 6.88999998,15.89 6.68999998,15.69 L2.99999996,12 L6.68999998,8.30999998 C6.88999998,8.10999998 6.99999998,7.83999998 6.99999998,7.55999998 Z M13,8.99999999 L13,7.40999998 C13,6.51999998 11.92,6.06999998 11.29,6.69999998 L6.69999998,11.29 C6.30999998,11.68 6.30999998,12.31 6.69999998,12.7 L11.29,17.29 C11.92,17.92 13,17.47 13,16.58 L13,14.9 C18,14.9 21.5,16.5 24,20 C23,15 20,9.99999999 13,8.99999999 Z',
      id: 'ContentReplyAllIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'reply_all',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentReplyAllIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentReplyAllIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentReplyAllIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentReplyAllIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
