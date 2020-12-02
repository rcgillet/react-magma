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
  title: ['reorder'],
  paths: [
    {
      d:
        'M3.99999996,15 L20,15 C20.55,15 21,14.55 21,14 C21,13.45 20.55,13 20,13 L3.99999996,13 C3.44999996,13 2.99999996,13.45 2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 Z M3.99999996,19 L20,19 C20.55,19 21,18.55 21,18 C21,17.45 20.55,17 20,17 L3.99999996,17 C3.44999996,17 2.99999996,17.45 2.99999996,18 C2.99999996,18.55 3.44999996,19 3.99999996,19 Z M3.99999996,11 L20,11 C20.55,11 21,10.55 21,9.99999999 C21,9.44999999 20.55,8.99999999 20,8.99999999 L3.99999996,8.99999999 C3.44999996,8.99999999 2.99999996,9.44999999 2.99999996,9.99999999 C2.99999996,10.55 3.44999996,11 3.99999996,11 Z M2.99999996,5.99999997 C2.99999996,6.54999998 3.44999996,6.99999997 3.99999996,6.99999997 L20,6.99999997 C20.55,6.99999997 21,6.54999998 21,5.99999997 C21,5.44999997 20.55,4.99999997 20,4.99999997 L3.99999996,4.99999997 C3.44999996,4.99999997 2.99999996,5.44999997 2.99999996,5.99999997 Z',
      id: 'ActionsReorderIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'reorder',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsReorderIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsReorderIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsReorderIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsReorderIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
