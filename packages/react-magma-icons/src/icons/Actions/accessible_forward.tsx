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
  title: ['accessible_forward'],
  paths: [
    {
      d:
        'M9.99999997,12 L9.99999997,14 C8.34999998,14 6.99999997,15.35 6.99999997,17 C6.99999997,18.65 8.34999998,20 9.99999997,20 C11.65,20 13,18.65 13,17 L13,17 L15,17 C15,19.76 12.76,22 9.99999997,22 C7.23999998,22 4.99999997,19.76 4.99999997,17 C4.99999997,14.24 7.23999998,12 9.99999997,12 L9.99999997,12 Z M15.96,6.99999998 C17.44,6.99999998 18.42,8.49999998 17.81,9.82999999 L17.81,9.82999999 L16.14,13.5 L18,13.5 C19.1,13.5 20,14.4 20,15.5 L20,15.5 L20,20 C20,20.55 19.55,21 19,21 C18.45,21 18,20.55 18,20 L18,20 L18,16 L13.02,16 C11.56,16 10.57,14.43 11.17,13.1 L11.17,13.1 L13,8.99999998 L10.79,8.99999998 L10.49,9.70999999 C10.29,10.18 9.77999999,10.43 9.28999999,10.29 C8.71999999,10.13 8.39999998,9.51999999 8.60999999,8.95999999 L8.60999999,8.95999999 L8.88999999,8.19999998 C9.21999999,7.46999998 9.94999999,6.99999998 10.76,6.99999998 L10.76,6.99999998 Z M18,2.53999996 C19.1045695,2.53999996 20,3.43543046 20,4.53999996 C20,5.64456947 19.1045695,6.53999996 18,6.53999996 C16.8954305,6.53999996 16,5.64456947 16,4.53999996 C16,3.43543046 16.8954305,2.53999996 18,2.53999996 Z',
      id: 'ActionsAccessibleForwardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'accessible_forward',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAccessibleForwardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAccessibleForwardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAccessibleForwardIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAccessibleForwardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
