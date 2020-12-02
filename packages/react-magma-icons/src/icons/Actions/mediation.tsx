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
  title: ['mediation'],
  paths: [
    {
      d:
        'M18,13 L12.94,13 C12.6,16.1 10.68,18.72 7.99999998,20.05 C7.96999998,21.86 6.33999998,23.28 4.44999997,22.95 C3.24999996,22.74 2.25999996,21.75 2.04999996,20.55 C1.70999996,18.65 3.15999996,17 4.99999997,17 C5.94999997,17 6.77999998,17.45 7.32999998,18.14 C9.22999999,17.11 10.59,15.23 10.91,13 L7.80999998,13 C7.32999998,14.34 5.94999997,15.24 4.38999997,14.94 C3.20999996,14.71 2.25999996,13.74 2.03999996,12.56 C1.69999996,10.66 3.15999996,8.99999995 4.99999997,8.99999995 C6.29999998,8.99999995 7.39999998,9.83999999 7.81999998,11 L10.92,11 C10.6,8.76999999 9.22999999,6.89999998 7.32999998,5.85999997 C6.68999998,6.65999998 5.65999997,7.13999998 4.51999997,6.95999998 C3.28999996,6.76999998 2.25999996,5.76999997 2.04999996,4.53999997 C1.71999996,2.64999996 3.16999996,0.999999954 4.99999997,0.999999954 C6.63999998,0.999999954 7.95999998,2.30999996 7.98999998,3.94999997 C10.67,5.27999997 12.59,7.89999998 12.93,11 L18,11 L18,9.20999999 C18,8.75999999 18.54,8.53999999 18.85,8.85999999 L21.64,11.65 C21.84,11.85 21.84,12.16 21.64,12.36 L18.85,15.15 C18.54,15.46 18,15.24 18,14.79 L18,13 Z',
      id: 'ActionsMediationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mediation',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsMediationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsMediationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsMediationIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsMediationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
