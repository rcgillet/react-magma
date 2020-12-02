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
  title: ['bookmark_border'],
  paths: [
    {
      d:
        'M17,2.99999996 L6.99999997,2.99999996 C5.89999997,2.99999996 4.99999997,3.89999997 4.99999997,4.99999996 L4.99999997,21 L12,18 L19,21 L19,4.99999996 C19,3.89999997 18.1,2.99999996 17,2.99999996 Z M17,18 L12,15.82 L6.99999998,18 L6.99999998,5.99999997 C6.99999998,5.44999997 7.44999998,4.99999997 7.99999998,4.99999997 L16,4.99999997 C16.55,4.99999997 17,5.44999997 17,5.99999997 L17,18 Z',
      id: 'ActionsBookmarkBorderIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bookmark_border',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBookmarkBorderIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBookmarkBorderIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBookmarkBorderIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBookmarkBorderIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
