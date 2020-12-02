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
  title: ['toggle_on'],
  paths: [
    {
      d:
        'M17,6.99999998 L6.99999996,6.99999998 C4.23999997,6.99999998 1.99999996,9.23999999 1.99999996,12 C1.99999996,14.76 4.23999997,17 6.99999996,17 L17,17 C19.76,17 22,14.76 22,12 C22,9.23999999 19.76,6.99999998 17,6.99999998 Z M17,15 C15.34,15 14,13.66 14,12 C14,10.34 15.34,8.99999999 17,8.99999999 C18.66,8.99999999 20,10.34 20,12 C20,13.66 18.66,15 17,15 Z',
      id: 'ToggleToggleOnIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'toggle_on',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ToggleToggleOnIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ToggleToggleOnIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ToggleToggleOnIcon-path-1',
        },
      ],
    },
  ],
};

export const ToggleToggleOnIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
