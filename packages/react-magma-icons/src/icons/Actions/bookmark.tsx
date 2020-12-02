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
  title: ['bookmark'],
  paths: [
    {
      d:
        'M17,2.99999996 L6.99999997,2.99999996 C5.89999997,2.99999996 4.99999997,3.89999997 4.99999997,4.99999996 L4.99999997,21 L12,18 L19,21 L19,4.99999996 C19,3.89999997 18.1,2.99999996 17,2.99999996 Z',
      id: 'ActionsBookmarkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bookmark',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBookmarkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBookmarkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBookmarkIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBookmarkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
