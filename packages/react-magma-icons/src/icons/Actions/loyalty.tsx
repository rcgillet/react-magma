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
  title: ['loyalty'],
  paths: [
    {
      d:
        'M21.41,11.58 L12.41,2.57999996 C12.05,2.21999996 11.55,1.99999996 11,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,11 C1.99999996,11.55 2.21999996,12.05 2.58999996,12.42 L11.59,21.42 C11.95,21.78 12.45,22 13,22 C13.55,22 14.05,21.78 14.41,21.41 L21.41,14.41 C21.78,14.05 22,13.55 22,13 C22,12.45 21.77,11.94 21.41,11.58 Z M5.49999997,6.99999997 C4.66999997,6.99999997 3.99999997,6.32999998 3.99999997,5.49999997 C3.99999997,4.66999997 4.66999997,3.99999997 5.49999997,3.99999997 C6.32999998,3.99999997 6.99999997,4.66999997 6.99999997,5.49999997 C6.99999997,6.32999998 6.32999998,6.99999997 5.49999997,6.99999997 Z M17.27,15.27 L13.35,19.19 C13.15,19.39 12.84,19.39 12.64,19.19 L8.71999999,15.27 C8.14999998,14.69 7.84999998,13.84 8.04999998,12.93 C8.23999998,12.05 8.93999999,11.32 9.80999999,11.09 C10.75,10.84 11.66,11.13 12.25,11.74 L13,12.46 L13.73,11.73 C14.18,11.28 14.81,11 15.5,11 C16.88,11 18,12.12 18,13.5 C18,14.19 17.72,14.82 17.27,15.27 L17.27,15.27 Z',
      id: 'ActionsLoyaltyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'loyalty',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsLoyaltyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsLoyaltyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsLoyaltyIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsLoyaltyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
