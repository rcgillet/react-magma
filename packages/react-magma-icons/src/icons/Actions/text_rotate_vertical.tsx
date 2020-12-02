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
  title: ['text_rotate_vertical'],
  paths: [
    {
      d:
        'M15,4.99999997 C14.54,4.99999997 14.13,5.26999997 13.95,5.68999997 L10.07,14.66 C9.79999999,15.29 10.27,16 10.96,16 C11.35,16 11.7,15.76 11.85,15.4 L12.51,13.8 L17.51,13.8 L18.17,15.4 C18.32,15.76 18.67,16 19.06,16 C19.75,16 20.21,15.29 19.94,14.66 L16.06,5.68999997 C15.87,5.26999997 15.46,4.99999997 15,4.99999997 Z M13.13,12 L15,6.97999998 L16.87,12 L13.13,12 L13.13,12 Z M6.34999998,19.64 L8.13999998,17.85 C8.45999999,17.54 8.23999998,17 7.78999998,17 L6.99999998,17 L6.99999998,4.99999997 C6.99999998,4.44999997 6.54999998,3.99999997 5.99999998,3.99999997 C5.44999997,3.99999997 4.99999997,4.43999997 4.99999997,4.99999997 L4.99999997,17 L4.20999997,17 C3.75999997,17 3.53999996,17.54 3.85999997,17.85 L5.64999997,19.64 C5.83999997,19.84 6.15999998,19.84 6.34999998,19.64 L6.34999998,19.64 Z',
      id: 'ActionsTextRotateVerticalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'text_rotate_vertical',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTextRotateVerticalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTextRotateVerticalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTextRotateVerticalIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTextRotateVerticalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
