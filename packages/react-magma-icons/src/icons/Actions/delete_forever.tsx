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
  title: ['delete_forever'],
  paths: [
    {
      d:
        'M5.99999998,19 C5.99999998,20.1 6.89999998,21 7.99999998,21 L16,21 C17.1,21 18,20.1 18,19 L18,8.99999998 C18,7.89999998 17.1,6.99999998 16,6.99999998 L7.99999998,6.99999998 C6.89999998,6.99999998 5.99999998,7.89999998 5.99999998,8.99999998 L5.99999998,19 Z M9.16999999,11.17 C9.55999999,10.78 10.19,10.78 10.58,11.17 L12,12.59 L13.42,11.17 C13.81,10.78 14.44,10.78 14.83,11.17 C15.22,11.56 15.22,12.19 14.83,12.58 L13.41,14 L14.83,15.42 C15.22,15.81 15.22,16.44 14.83,16.83 C14.44,17.22 13.81,17.22 13.42,16.83 L12,15.41 L10.58,16.83 C10.19,17.22 9.55999999,17.22 9.16999999,16.83 C8.77999999,16.44 8.77999999,15.81 9.16999999,15.42 L10.59,14 L9.16999999,12.58 C8.77999999,12.2 8.77999999,11.56 9.16999999,11.17 Z M15.5,3.99999996 L14.79,3.28999996 C14.61,3.10999996 14.35,2.99999996 14.09,2.99999996 L9.90999999,2.99999996 C9.64999999,2.99999996 9.38999999,3.10999996 9.20999999,3.28999996 L8.49999997,3.99999996 L5.99999997,3.99999996 C5.44999997,3.99999996 4.99999997,4.44999997 4.99999997,4.99999996 C4.99999997,5.54999997 5.44999997,5.99999996 5.99999997,5.99999996 L18,5.99999996 C18.55,5.99999996 19,5.54999997 19,4.99999996 C19,4.44999997 18.55,3.99999996 18,3.99999996 L15.5,3.99999996 Z',
      id: 'ActionsDeleteForeverIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'delete_forever',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDeleteForeverIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDeleteForeverIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDeleteForeverIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDeleteForeverIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
