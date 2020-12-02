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
  title: ['thumbs_up_down'],
  paths: [
    {
      d:
        'M22,9.99999999 C23.1,9.99999999 24,10.9 23.9900826,12 L23.9900826,12 L23.9900826,17.79 C23.9900826,18.32 23.78,18.82 23.4,19.2 L23.4,19.2 L19.4,23.2 C18.97,23.64 18.26,23.64 17.82,23.2 C17.56,22.93 17.44,22.55 17.52,22.18 L17.52,22.18 L18.18,19 L13.94,19 C12.5,19 11.54,17.53 12.1,16.21 L12.1,16.21 L14.24,11.21 C14.56,10.48 15.28,9.99999999 16.08,9.99999999 L16.08,9.99999999 Z M4.59999997,0.799999953 C5.02999997,0.359999952 5.73999997,0.359999952 6.17999998,0.799999953 C6.43999998,1.06999995 6.55999998,1.44999996 6.47999998,1.81999996 L6.47999998,1.81999996 L5.81999997,4.99999997 L10.06,4.99999997 C11.49,4.99999997 12.46,6.46999995 11.9,7.78999998 L11.9,7.78999998 L9.75999999,12.79 C9.43999999,13.52 8.71999999,14 7.91999998,14 L7.91999998,14 L1.99999995,14 C0.899999954,14 -5.00000965e-08,13.1 -5.00000965e-08,12 L-5.00000965e-08,12 L-5.00000965e-08,6.20999998 C-5.00000965e-08,5.67999997 0.209999951,5.16999997 0.599999952,4.79999997 L0.599999952,4.79999997 Z',
      id: 'ActionsThumbsUpDownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'thumbs_up_down',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsThumbsUpDownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsThumbsUpDownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsThumbsUpDownIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsThumbsUpDownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
