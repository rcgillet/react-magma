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
  title: ['gavel'],
  paths: [
    {
      d:
        'M1.99999995,21 L12,21 C12.55,21 13,21.45 13,22 C13,22.55 12.55,23 12,23 L1.99999995,23 C1.44999996,23 0.999999954,22.55 0.999999954,22 C0.999999954,21.45 1.44999996,21 1.99999995,21 Z M5.23999997,8.06999998 L8.06999998,5.23999997 L20.8,17.97 C21.58,18.75 21.58,20.02 20.8,20.8 C20.02,21.58 18.75,21.58 17.97,20.8 L5.23999997,8.06999998 Z M13.73,2.40999996 L16.56,5.23999997 C17.34,6.01999998 17.34,7.28999998 16.56,8.06999998 L15.14,9.48999999 L9.48999999,3.82999997 L10.9,2.41999996 C11.68,1.62999996 12.95,1.62999996 13.73,2.40999996 L13.73,2.40999996 Z M3.82999997,9.47999999 L9.48999999,15.14 L8.07999998,16.55 C7.29999998,17.33 6.02999998,17.33 5.24999997,16.55 L2.41999996,13.72 C1.63999996,12.94 1.63999996,11.67 2.41999996,10.89 L3.82999997,9.47999999 Z',
      id: 'ActionsGavelIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'gavel',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsGavelIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsGavelIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsGavelIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsGavelIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
