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
  title: ['miscellaneous_services'],
  paths: [
    {
      d:
        'M18.53,13 C18.63,13 18.73,13.08 18.74,13.2 L18.74,13.2 L18.91,14.38 C19.19,14.49 19.44,14.64 19.67,14.82 L19.67,14.82 L20.78,14.37 C20.89,14.34 21.01,14.37 21.06,14.47 L21.06,14.47 L21.96,16.02 C22.02,16.12 21.99,16.24 21.91,16.31 L21.91,16.31 L20.96,17.05 C20.99,17.19 21,17.34 21,17.49 C21,17.64 20.98,17.79 20.96,17.93 L20.96,17.93 L21.92,18.67 C22,18.74 22.03,18.86 21.97,18.95 L21.97,18.95 L21.07,20.5 C21.01,20.6 20.89,20.64 20.79,20.6 L20.79,20.6 L19.67,20.15 C19.45,20.33 19.19,20.47 18.92,20.59 L18.92,20.59 L18.75,21.77 C18.74,21.88 18.64,21.96 18.53,21.96 L18.53,21.96 L16.74,21.96 C16.63,21.96 16.54,21.88 16.52,21.77 L16.52,21.77 L16.35,20.59 C16.07,20.48 15.82,20.33 15.59,20.15 L15.59,20.15 L14.48,20.6 C14.37,20.63 14.25,20.6 14.2,20.5 L14.2,20.5 L13.3,18.95 C13.24,18.85 13.27,18.73 13.35,18.66 L13.35,18.66 L14.3,17.92 C14.28,17.78 14.27,17.63 14.27,17.48 C14.27,17.33 14.28,17.18 14.3,17.04 L14.3,17.04 L13.35,16.3 C13.26,16.23 13.25,16.11 13.3,16.01 L13.3,16.01 L14.2,14.46 C14.26,14.36 14.38,14.32 14.48,14.36 L14.48,14.36 L15.59,14.81 C15.82,14.63 16.08,14.49 16.35,14.37 L16.35,14.37 L16.52,13.19 C16.53,13.08 16.63,13 16.74,13 L16.74,13 Z M17.63,16.13 C16.88,16.13 16.28,16.73 16.28,17.48 C16.28,18.23 16.89,18.83 17.63,18.83 C18.37,18.83 18.98,18.23 18.98,17.48 C18.98,16.73 18.38,16.13 17.63,16.13 Z M10.21,1.99999996 C10.38,1.99999996 10.53,2.12999996 10.56,2.28999996 L10.56,2.28999996 L10.82,4.13999997 C11.25,4.31999997 11.64,4.54999997 12,4.82999997 L12,4.82999997 L13.74,4.12999997 C13.9,4.06999997 14.08,4.12999997 14.17,4.27999997 L14.17,4.27999997 L15.57,6.69999998 C15.66,6.84999998 15.62,7.03999998 15.49,7.14999998 L15.49,7.14999998 L14.01,8.30999998 C14.04,8.53999999 14.06,8.76999999 14.06,8.99999996 C14.06,9.22999999 14.04,9.45999999 14.01,9.67999999 L14.01,9.67999999 L15.49,10.84 C15.62,10.95 15.66,11.14 15.57,11.29 L15.57,11.29 L14.17,13.71 C14.08,13.86 13.9,13.92 13.74,13.86 L13.74,13.86 L12,13.16 C11.64,13.44 11.24,13.67 10.82,13.85 L10.82,13.85 L10.56,15.7 C10.53,15.87 10.38,16 10.21,16 L10.21,16 L7.40999998,16 C7.23999998,16 7.08999998,15.87 7.05999998,15.71 L7.05999998,15.71 L6.79999998,13.86 C6.36999998,13.68 5.97999997,13.45 5.61999997,13.17 L5.61999997,13.17 L3.87999997,13.87 C3.71999997,13.93 3.53999996,13.87 3.44999996,13.72 L3.44999996,13.72 L2.04999996,11.3 C1.95999996,11.15 1.99999996,10.96 2.12999996,10.85 L2.12999996,10.85 L3.60999997,9.68999999 C3.57999996,9.45999999 3.55999996,9.22999999 3.55999996,8.99999996 C3.55999996,8.76999999 3.57999996,8.53999999 3.60999997,8.31999998 L3.60999997,8.31999998 L2.12999996,7.15999998 C1.99999996,7.04999998 1.95999996,6.85999998 2.04999996,6.70999998 L2.04999996,6.70999998 L3.44999996,4.28999997 C3.53999996,4.13999997 3.71999997,4.07999997 3.87999997,4.13999997 L3.87999997,4.13999997 L5.61999997,4.83999997 C5.97999997,4.55999997 6.37999998,4.32999997 6.79999998,4.14999997 L6.79999998,4.14999997 L7.05999998,2.29999996 C7.08999998,2.12999996 7.23999998,1.99999996 7.40999998,1.99999996 L7.40999998,1.99999996 Z M8.80999998,6.99999998 C7.70999998,6.99999998 6.80999998,7.89999998 6.80999998,8.99999998 C6.80999998,10.1 7.70999998,11 8.80999998,11 C9.90999999,11 10.81,10.1 10.81,8.99999998 C10.81,7.89999998 9.90999999,6.99999998 8.80999998,6.99999998 Z',
      id: 'MapsMiscellaneousServicesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'miscellaneous_services',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsMiscellaneousServicesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsMiscellaneousServicesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsMiscellaneousServicesIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsMiscellaneousServicesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
