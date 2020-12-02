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
  title: ['flight_land'],
  paths: [
    {
      d:
        'M20.5,19 L3.49999996,19 C2.94999996,19 2.49999996,19.45 2.49999996,20 C2.49999996,20.55 2.94999996,21 3.49999996,21 L20.5,21 C21.05,21 21.5,20.55 21.5,20 C21.5,19.45 21.05,19 20.5,19 Z M3.50999996,11.61 L19.34,15.85 C20.14,16.06 20.96,15.59 21.18,14.79 C21.39,13.99 20.92,13.17 20.12,12.95 L14.81,11.53 L12.23,3.07999996 C12.12,2.71999996 11.84,2.44999996 11.48,2.34999996 C10.8,2.16999996 10.13,2.67999996 10.13,3.38999996 L10.13,10.27 L5.14999997,8.94999999 L4.39999997,7.08999998 C4.27999997,6.79999998 4.03999997,6.57999998 3.72999997,6.49999998 L3.39999996,6.40999998 C3.07999996,6.31999998 2.76999996,6.55999998 2.76999996,6.88999998 L2.76999996,10.64 C2.76999996,11.1 3.06999996,11.49 3.50999996,11.61 Z',
      id: 'ActionsFlightLandIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'flight_land',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFlightLandIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFlightLandIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFlightLandIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFlightLandIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
