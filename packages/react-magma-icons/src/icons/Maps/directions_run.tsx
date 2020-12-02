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
  title: ['directions_run'],
  paths: [
    {
      d:
        'M13.49,5.47999996 C14.59,5.47999996 15.49,4.57999997 15.49,3.47999996 C15.49,2.37999996 14.59,1.47999996 13.49,1.47999996 C12.39,1.47999996 11.49,2.37999996 11.49,3.47999996 C11.49,4.57999997 12.39,5.47999996 13.49,5.47999996 Z M10.32,17.48 L10.89,14.98 L12.99,16.98 L12.99,21.98 C12.99,22.53 13.44,22.98 13.99,22.98 C14.54,22.98 14.99,22.53 14.99,21.98 L14.99,16.34 C14.99,15.79 14.77,15.27 14.37,14.89 L12.89,13.48 L13.49,10.48 C14.56,11.72 16.11,12.61 17.85,12.89 C18.45,12.98 18.99,12.5 18.99,11.89 C18.99,11.4 18.63,10.99 18.14,10.91 C16.62,10.66 15.36,9.75999999 14.69,8.57999999 L13.69,6.97999997 C13.29,6.37999998 12.69,5.97999997 11.99,5.97999997 C11.69,5.97999997 11.49,6.07999998 11.19,6.07999998 L7.20999998,7.75999998 C6.46999998,8.07999998 5.98999997,8.79999999 5.98999997,9.60999999 L5.98999997,11.98 C5.98999997,12.53 6.43999998,12.98 6.98999998,12.98 C7.53999998,12.98 7.98999998,12.53 7.98999998,11.98 L7.98999998,9.57999999 L9.78999999,8.87999999 L8.18999998,16.98 L4.26999997,16.18 C3.72999997,16.07 3.19999996,16.42 3.08999996,16.96 L3.08999996,17 C2.97999996,17.54 3.32999996,18.07 3.86999997,18.18 L7.97999998,19 C9.03999999,19.21 10.08,18.54 10.32,17.48 Z',
      id: 'MapsDirectionsRunIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_run',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsRunIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsRunIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsRunIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsRunIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
