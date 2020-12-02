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
  title: ['bookmarks'],
  paths: [
    {
      d:
        'M19,18 L21,19 L21,2.99999995 C21,1.89999996 20.1,0.999999954 19,0.999999954 L8.98999999,0.999999954 C7.88999998,0.999999954 6.99999998,1.89999996 6.99999998,2.99999995 L17,2.99999995 C18.1,2.99999995 19,3.89999997 19,4.99999995 L19,18 Z M15,4.99999997 L4.99999996,4.99999997 C3.89999997,4.99999997 2.99999996,5.89999997 2.99999996,6.99999997 L2.99999996,23 L9.99999996,20 L17,23 L17,6.99999997 C17,5.89999997 16.1,4.99999997 15,4.99999997 Z',
      id: 'ActionsBookmarksIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bookmarks',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBookmarksIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBookmarksIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBookmarksIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBookmarksIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
