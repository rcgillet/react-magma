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
  title: ['supervised_user_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M15.61,8.33999998 C16.68,8.33999998 17.54,9.19999999 17.54,10.27 C17.54,11.34 16.68,12.2 15.61,12.2 C14.54,12.2 13.68,11.34 13.68,10.27 C13.67,9.19999999 14.54,8.33999998 15.61,8.33999998 Z M9.60999999,6.75999998 C10.91,6.75999998 11.97,7.81999998 11.97,9.11999999 C11.97,10.42 10.91,11.48 9.60999999,11.48 C8.30999998,11.48 7.24999998,10.42 7.24999998,9.11999999 C7.24999998,7.80999998 8.29999998,6.75999998 9.60999999,6.75999998 Z M9.60999999,15.89 L9.60999999,19.64 C7.20999998,18.89 5.30999997,17.04 4.46999997,14.68 C5.51999997,13.56 8.13999998,12.99 9.60999999,12.99 C10.14,12.99 10.81,13.07 11.51,13.21 C9.86999999,14.08 9.60999999,15.23 9.60999999,15.89 Z M12,20 C11.73,20 11.47,19.99 11.21,19.96 L11.21,15.89 C11.21,14.47 14.15,13.76 15.61,13.76 C16.68,13.76 18.53,14.15 19.45,14.91 C18.28,17.88 15.39,20 12,20 Z',
      id: 'ActionsSupervisedUserCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'supervised_user_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSupervisedUserCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSupervisedUserCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSupervisedUserCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSupervisedUserCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
