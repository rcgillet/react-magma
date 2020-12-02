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
  title: ['view_array'],
  paths: [
    {
      d:
        'M4.99999997,18 L5.99999997,18 C6.54999998,18 6.99999997,17.55 6.99999997,17 L6.99999997,5.99999997 C6.99999997,5.44999997 6.54999998,4.99999997 5.99999997,4.99999997 L4.99999997,4.99999997 C4.44999997,4.99999997 3.99999997,5.44999997 3.99999997,5.99999997 L3.99999997,17 C3.99999997,17.55 4.44999997,18 4.99999997,18 Z M18,5.99999997 L18,17 C18,17.55 18.45,18 19,18 L20,18 C20.55,18 21,17.55 21,17 L21,5.99999997 C21,5.44999997 20.55,4.99999997 20,4.99999997 L19,4.99999997 C18.45,4.99999997 18,5.44999997 18,5.99999997 Z M8.99999998,18 L16,18 C16.55,18 17,17.55 17,17 L17,5.99999997 C17,5.44999997 16.55,4.99999997 16,4.99999997 L8.99999998,4.99999997 C8.44999999,4.99999997 7.99999998,5.44999997 7.99999998,5.99999997 L7.99999998,17 C7.99999998,17.55 8.44999999,18 8.99999998,18 Z',
      id: 'ActionsViewArrayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_array',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewArrayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewArrayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewArrayIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewArrayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
