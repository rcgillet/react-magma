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
  title: ['maximize'],
  paths: [
    {
      d:
        'M3.99999996,2.99999996 L20,2.99999996 C20.55,2.99999996 21,3.44999996 21,3.99999996 C21,4.54999997 20.55,4.99999996 20,4.99999996 L3.99999996,4.99999996 C3.44999996,4.99999996 2.99999996,4.54999997 2.99999996,3.99999996 C2.99999996,3.44999996 3.44999996,2.99999996 3.99999996,2.99999996 Z',
      id: 'ActionsMaximizeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'maximize',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsMaximizeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsMaximizeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsMaximizeIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsMaximizeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
