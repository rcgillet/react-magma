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
  title: ['switch_right'],
  paths: [
    {
      d:
        'M15.5,15.38 L15.5,8.61999999 L18.88,12 L15.5,15.38 M20.29,12.71 C20.68,12.32 20.68,11.69 20.29,11.3 L15.7,6.70999998 C15.08,6.07999998 14,6.51999998 14,7.40999998 L14,16.58 C14,17.47 15.08,17.92 15.71,17.29 L20.29,12.71 Z M9.99999999,16.59 L9.99999999,7.40999998 C9.99999999,6.51999998 8.91999999,6.06999998 8.28999998,6.69999998 L3.69999997,11.29 C3.30999996,11.68 3.30999996,12.31 3.69999997,12.7 L8.28999998,17.29 C8.91999999,17.92 9.99999999,17.48 9.99999999,16.59 Z',
      id: 'NavigationSwitchRightIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'switch_right',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationSwitchRightIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationSwitchRightIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationSwitchRightIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationSwitchRightIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
