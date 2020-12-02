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
  title: ['switch_left'],
  paths: [
    {
      d:
        'M8.49999999,8.61999999 L8.49999999,15.38 L5.11999997,12 L8.49999999,8.61999999 M3.70999997,11.29 C3.31999996,11.68 3.31999996,12.31 3.70999997,12.7 L8.29999998,17.29 C8.91999999,17.92 9.99999999,17.48 9.99999999,16.59 L9.99999999,7.40999998 C9.99999999,6.51999998 8.91999999,6.06999998 8.28999998,6.69999998 L3.70999997,11.29 Z M14,7.40999998 L14,16.58 C14,17.47 15.08,17.92 15.71,17.29 L20.3,12.7 C20.69,12.31 20.69,11.68 20.3,11.29 L15.71,6.69999998 C15.08,6.07999998 14,6.51999998 14,7.40999998 Z',
      id: 'NavigationSwitchLeftIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'switch_left',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationSwitchLeftIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationSwitchLeftIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationSwitchLeftIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationSwitchLeftIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
