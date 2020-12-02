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
  title: ['slow_motion_video'],
  paths: [
    {
      d:
        'M9.99999999,8.49999999 L9.99999999,15.5 C9.99999999,15.91 10.47,16.15 10.8,15.9 L15.47,12.4 C15.74,12.2 15.74,11.8 15.47,11.6 L10.8,8.09999998 C10.47,7.84999998 9.99999999,8.08999998 9.99999999,8.49999999 Z M11,3.22999996 C11,2.58999996 10.41,2.09999996 9.78999999,2.23999996 C8.66999999,2.49999996 7.60999998,2.93999996 6.66999998,3.53999996 C6.13999998,3.87999997 6.05999998,4.63999997 6.50999998,5.08999997 C6.82999998,5.40999997 7.33999998,5.48999997 7.71999998,5.24999997 C8.48999999,4.75999997 9.33999999,4.39999997 10.26,4.19999997 C10.7,4.09999997 11,3.68999997 11,3.22999996 L11,3.22999996 Z M5.09999997,6.50999998 C4.63999997,6.05999998 3.88999997,6.12999998 3.54999996,6.66999998 C2.94999996,7.60999998 2.50999996,8.66999999 2.24999996,9.78999999 C2.10999996,10.41 2.58999996,11 3.22999996,11 C3.67999997,11 4.09999997,10.7 4.18999997,10.26 C4.38999997,9.34999999 4.75999997,8.48999999 5.23999997,7.72999998 C5.49999997,7.33999998 5.41999997,6.82999998 5.09999997,6.50999998 Z M3.22999996,13 C2.58999996,13 2.09999996,13.59 2.23999996,14.21 C2.49999996,15.33 2.93999996,16.38 3.53999996,17.33 C3.87999997,17.87 4.63999997,17.94 5.08999997,17.49 C5.40999997,17.17 5.48999997,16.66 5.23999997,16.28 C4.74999997,15.52 4.38999997,14.67 4.18999997,13.75 C4.09999997,13.3 3.68999997,13 3.22999996,13 L3.22999996,13 Z M6.66999998,20.45 C7.61999998,21.05 8.66999999,21.49 9.78999999,21.75 C10.41,21.89 11,21.4 11,20.77 C11,20.32 10.7,19.9 10.26,19.81 C9.34999999,19.61 8.48999999,19.24 7.72999998,18.76 C7.33999998,18.52 6.83999998,18.59 6.51999998,18.92 C6.05999998,19.36 6.12999998,20.11 6.66999998,20.45 Z M22,12 C22,16.73 18.7,20.71 14.27,21.74 C13.65,21.89 13.05,21.4 13.05,20.76 C13.05,20.3 13.36,19.9 13.8,19.79 C17.35,18.97 20,15.79 20,12 C20,8.20999998 17.35,5.02999997 13.8,4.20999997 C13.36,4.10999997 13.05,3.69999997 13.05,3.23999996 C13.05,2.59999996 13.65,2.10999996 14.27,2.25999996 C18.7,3.28999996 22,7.26999998 22,12 Z',
      id: 'AVSlowMotionVideoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'slow_motion_video',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVSlowMotionVideoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVSlowMotionVideoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVSlowMotionVideoIcon-path-1',
        },
      ],
    },
  ],
};

export const AVSlowMotionVideoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
