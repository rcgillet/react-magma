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
  title: ['article'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M13,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 C6.99999998,15.45 7.44999998,15 7.99999998,15 L13,15 C13.55,15 14,15.45 14,16 C14,16.55 13.55,17 13,17 Z M16,13 L7.99999998,13 C7.44999998,13 6.99999998,12.55 6.99999998,12 C6.99999998,11.45 7.44999998,11 7.99999998,11 L16,11 C16.55,11 17,11.45 17,12 C17,12.55 16.55,13 16,13 Z M16,8.99999998 L7.99999998,8.99999998 C7.44999998,8.99999998 6.99999998,8.54999999 6.99999998,7.99999998 C6.99999998,7.44999998 7.44999998,6.99999998 7.99999998,6.99999998 L16,6.99999998 C16.55,6.99999998 17,7.44999998 17,7.99999998 C17,8.54999999 16.55,8.99999998 16,8.99999998 Z',
      id: 'ActionsArticleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'article',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsArticleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsArticleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsArticleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsArticleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
