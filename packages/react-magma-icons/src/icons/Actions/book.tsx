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
  title: ['book'],
  paths: [
    {
      d:
        'M18,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.89999996 19.1,1.99999996 18,1.99999996 Z M5.99999997,3.99999997 L11,3.99999997 L11,12 L8.49999997,10.5 L5.99999997,12 L5.99999997,3.99999997 Z',
      id: 'ActionsBookIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'book',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBookIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBookIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBookIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBookIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
