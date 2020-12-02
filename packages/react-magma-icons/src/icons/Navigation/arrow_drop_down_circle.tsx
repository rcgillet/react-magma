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
  title: ['arrow_drop_down_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M11.65,14.65 L8.85999999,11.86 C8.53999999,11.54 8.75999999,11 9.20999999,11 L14.8,11 C15.25,11 15.47,11.54 15.15,11.85 L12.36,14.64 C12.16,14.84 11.84,14.84 11.65,14.65 L11.65,14.65 Z',
      id: 'NavigationArrowDropDownCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_drop_down_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationArrowDropDownCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationArrowDropDownCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationArrowDropDownCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationArrowDropDownCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
