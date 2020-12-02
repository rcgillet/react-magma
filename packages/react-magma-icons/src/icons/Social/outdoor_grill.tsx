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
  title: ['outdoor_grill'],
  paths: [
    {
      d:
        'M17.92,7.99999998 C18.52,7.99999998 19.01,8.53999999 18.91,9.12999999 C18.53,11.47 16.99,13.42 14.89,14.37 L14.89,14.37 L15.49,15.3 C14.85,15.56 14.31,15.98 13.89,16.51 L13.89,16.51 L12.87,14.94 C12.58,14.98 12.29,15 12,15 C11.71,15 11.42,14.98 11.13,14.94 L11.13,14.94 L9.13999999,18 L14.18,18 C14.6,16.84 15.7,16 17,16 C18.66,16 20,17.34 20,19 C20,20.66 18.66,22 17,22 C15.7,22 14.6,21.16 14.17,20 L14.17,20 L7.82999998,20 L6.82999998,21.55 C6.52999998,22.01 5.90999997,22.14 5.44999997,21.84 L5.44999997,21.84 L5.35651601,21.7709913 C4.97362242,21.4522449 4.88142854,20.8871429 5.15999997,20.46 L5.15999997,20.46 L9.10999999,14.38 C7.01999998,13.43 5.46999997,11.48 5.08999997,9.13999999 C4.98999997,8.53999999 5.47999997,7.99999998 6.07999998,7.99999998 L6.07999998,7.99999998 Z M17,18 C16.45,18 16,18.45 16,19 C16,19.55 16.45,20 17,20 C17.55,20 18,19.55 18,19 C18,18.45 17.55,18 17,18 Z M8.52999999,1.99999996 C8.79999999,1.99999996 9.01999999,2.22999996 8.98999999,2.48999996 C8.91999999,3.34999996 9.15999999,3.60999997 9.51999999,4.03999997 C10.5,5.18999997 10.56,5.70999997 10.46,6.57999998 C10.44,6.81999998 10.24,6.99999996 9.99999999,6.99999996 L9.99999999,6.99999996 L9.95999999,6.99999996 C9.67999999,6.99999996 9.47999999,6.74999998 9.49999999,6.46999998 C9.59999999,5.51999997 9.14999999,5.16999997 8.95999999,4.95999997 C8.20999998,4.16999997 7.92999998,3.35999996 8.00999998,2.42999996 C8.02999998,2.18999996 8.23999998,1.99999996 8.47999999,1.99999996 L8.47999999,1.99999996 Z M11.01,1.99999996 C11.28,1.99999996 11.5,2.22999996 11.47,2.48999996 C11.39,3.34999996 11.64,3.60999997 12,4.03999997 L12.1549451,4.22600134 C12.9861728,5.248858 13.0344444,5.75833331 12.94,6.57999998 C12.92,6.81999998 12.72,6.99999996 12.48,6.99999996 L12.48,6.99999996 L12.45,6.99999996 C12.17,6.99999996 11.96,6.74999998 11.99,6.46999998 C12.08,5.51999997 11.63,5.16999997 11.44,4.95999997 C10.69,4.16999997 10.41,3.35999996 10.49,2.42999996 C10.51,2.18999996 10.72,1.99999996 10.96,1.99999996 L10.96,1.99999996 Z M13.53,1.99999996 C13.8,1.99999996 14.02,2.22999996 13.99,2.48999996 C13.91,3.34999996 14.16,3.60999997 14.52,4.03999997 L14.6749451,4.22600134 C15.5061729,5.248858 15.5544445,5.75833331 15.46,6.57999998 C15.44,6.81999998 15.24,6.99999996 15,6.99999996 L15,6.99999996 L14.96,6.99999996 C14.68,6.99999996 14.48,6.74999998 14.5,6.46999998 C14.6,5.51999997 14.15,5.16999997 13.96,4.95999997 C13.21,4.16999997 12.93,3.35999996 13.01,2.42999996 C13.03,2.18999996 13.24,1.99999996 13.48,1.99999996 L13.48,1.99999996 Z',
      id: 'SocialOutdoorGrillIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'outdoor_grill',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialOutdoorGrillIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialOutdoorGrillIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialOutdoorGrillIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialOutdoorGrillIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
