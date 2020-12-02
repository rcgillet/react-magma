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
  title: ['track_changes'],
  paths: [
    {
      d:
        'M18.32,5.67999997 C17.96,6.03999998 17.93,6.59999998 18.25,6.99999998 C19.7,8.81999999 20.46,11.31 19.78,13.92 C18.99,16.97 16.6,19.25 13.57,19.86 C8.46999999,20.87 3.99999997,16.93 3.99999997,12 C3.99999997,7.91999998 7.04999998,4.55999997 11,4.06999997 L11,6.08999998 C7.86999998,6.61999998 5.56999997,9.54999999 6.06999998,12.92 C6.45999998,15.53 8.62999999,17.63 11.25,17.95 C14.89,18.4 18,15.56 18,12 C18,10.75 17.62,9.59999999 16.97,8.63999999 C16.63,8.13999998 15.9,8.10999998 15.47,8.52999999 L15.46,8.53999999 C15.12,8.87999999 15.09,9.40999999 15.35,9.80999999 C15.95,10.73 16.19,11.91 15.84,13.13 C15.45,14.5 14.3,15.59 12.9,15.9 C10.3,16.47 7.99999998,14.51 7.99999998,12 C7.99999998,10.14 9.27999999,8.58999999 11,8.13999998 L11,10.28 C10.4,10.63 9.99999999,11.26 9.99999999,12 C9.99999999,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,11.26 13.6,10.62 13,10.28 L13,2.70999996 C13,2.31999996 12.68,1.99999996 12.29,1.99999996 C6.92999998,1.79999996 2.30999996,6.05999998 2.01999996,11.4 C1.65999996,17.95 7.42999998,23.22 14.03,21.8 C17.91,20.97 20.91,18 21.78,14.13 C22.49,10.97 21.58,7.96999998 19.81,5.75999997 C19.44,5.28999997 18.74,5.25999997 18.32,5.67999997 Z',
      id: 'ActionsTrackChangesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'track_changes',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTrackChangesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTrackChangesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTrackChangesIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTrackChangesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
