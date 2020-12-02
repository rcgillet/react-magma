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
  title: ['double_arrow'],
  paths: [
    {
      d:
        'M14.56,4.99999997 L14.7197896,5.00711492 C15.2482645,5.05429749 15.7309091,5.33363634 16.04,5.76999997 L16.04,5.76999997 L20.08,11.42 C20.33,11.77 20.33,12.23 20.09,12.58 L20.09,12.58 L16.05,18.23 C15.71,18.71 15.15,19 14.56,19 L14.56,19 L14.4131082,18.9944796 C13.0139333,18.8885222 12.229,17.2796667 13.07,16.11 L13.07,16.11 L16,12 L13.07,7.88999998 C12.21,6.67999998 13.07,4.99999997 14.56,4.99999997 L14.56,4.99999997 Z M7.55999998,4.99999997 L7.71979713,5.00711492 C8.24834709,5.05429749 8.73181817,5.33363634 9.04999999,5.76999997 L9.04999999,5.76999997 L13.08,11.42 C13.33,11.77 13.33,12.23 13.09,12.58 L13.09,12.58 L9.04999999,18.23 C8.70999999,18.71 8.14999998,19 7.55999998,19 L7.55999998,19 L7.41310813,18.9944796 C6.01393331,18.8885222 5.22899997,17.2796667 6.06999998,16.11 L6.06999998,16.11 L8.99999999,12 L6.06999998,7.88999998 C5.19999997,6.67999998 6.06999998,4.99999997 7.55999998,4.99999997 L7.55999998,4.99999997 Z',
      id: 'NavigationDoubleArrowIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'double_arrow',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationDoubleArrowIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationDoubleArrowIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationDoubleArrowIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationDoubleArrowIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
