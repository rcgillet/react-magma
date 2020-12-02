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
  title: ['exit_to_app'],
  paths: [
    {
      d:
        'M10.79,16.29 C11.18,16.68 11.81,16.68 12.2,16.29 L15.79,12.7 C16.18,12.31 16.18,11.68 15.79,11.29 L12.2,7.69999998 C11.81,7.30999998 11.18,7.30999998 10.79,7.69999998 C10.4,8.08999998 10.4,8.71999999 10.79,9.10999999 L12.67,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 L12.67,13 L10.79,14.88 C10.4,15.27 10.41,15.91 10.79,16.29 Z M19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,7.99999996 C2.99999996,8.54999999 3.44999996,8.99999996 3.99999996,8.99999996 C4.54999997,8.99999996 4.99999996,8.54999999 4.99999996,7.99999996 L4.99999996,5.99999996 C4.99999996,5.44999997 5.44999997,4.99999996 5.99999996,4.99999996 L18,4.99999996 C18.55,4.99999996 19,5.44999997 19,5.99999996 L19,18 C19,18.55 18.55,19 18,19 L5.99999996,19 C5.44999997,19 4.99999996,18.55 4.99999996,18 L4.99999996,16 C4.99999996,15.45 4.54999997,15 3.99999996,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z',
      id: 'ActionsExitToAppIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'exit_to_app',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsExitToAppIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsExitToAppIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsExitToAppIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsExitToAppIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
