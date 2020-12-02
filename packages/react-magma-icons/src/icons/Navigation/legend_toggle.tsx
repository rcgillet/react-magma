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
  title: ['legend_toggle'],
  paths: [
    {
      d:
        'M19,15 L4.99999997,15 C4.44999997,15 3.99999997,14.55 3.99999997,14 L3.99999997,14 C3.99999997,13.45 4.44999997,13 4.99999997,13 L19,13 C19.55,13 20,13.45 20,14 L20,14 C20,14.55 19.55,15 19,15 Z M19,17 L4.99999997,17 C4.44999997,17 3.99999997,17.45 3.99999997,18 L3.99999997,18 C3.99999997,18.55 4.44999997,19 4.99999997,19 L19,19 C19.55,19 20,18.55 20,18 L20,18 C20,17.45 19.55,17 19,17 Z M15,11 L19.58,7.74999998 C19.84,7.55999998 20,7.25999998 20,6.93999998 L20,6.93999998 C20,6.12999998 19.08,5.64999997 18.42,6.11999998 L15,8.54999999 L9.99999997,4.99999997 L4.47999997,8.35999998 C4.17999997,8.54999999 3.99999997,8.86999999 3.99999997,9.21999999 L3.99999997,9.21999999 C3.99999997,9.99999997 4.84999997,10.48 5.51999997,10.07 L9.91999999,7.38999998 L15,11 Z',
      id: 'NavigationLegendToggleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'legend_toggle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationLegendToggleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationLegendToggleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationLegendToggleIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationLegendToggleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
