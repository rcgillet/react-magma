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
  title: ['arrow_back_ios'],
  paths: [
    {
      d:
        'M16.62,2.98999996 C16.13,2.49999996 15.34,2.49999996 14.85,2.98999996 L6.53999998,11.3 C6.14999998,11.69 6.14999998,12.32 6.53999998,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.37999999,12 L16.63,4.74999997 C17.11,4.26999997 17.11,3.46999996 16.62,2.98999996 Z',
      id: 'NavigationArrowBackIosIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_back_ios',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationArrowBackIosIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationArrowBackIosIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationArrowBackIosIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationArrowBackIosIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
