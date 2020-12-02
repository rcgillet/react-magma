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
  title: ['fastfood'],
  paths: [
    {
      d:
        'M21.9,4.99999995 L18,4.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 L16,4.99999995 L12.1,4.99999995 C11.51,4.99999995 11.05,5.50999997 11.1,6.09999998 L11.22,7.30999998 C14.9,8.15999998 18,10.77 18,15 L18.02,23 L19.72,23 C20.56,23 21.25,22.35 21.35,21.53 L22.89,6.09999998 C22.95,5.50999997 22.49,4.99999995 21.9,4.99999995 L21.9,4.99999995 Z M15,21 L1.99999995,21 C1.44999996,21 0.999999954,21.45 0.999999954,22 C0.999999954,22.55 1.44999996,23 1.99999995,23 L15,23 C15.55,23 16,22.55 16,22 C16,21.45 15.55,21 15,21 Z M2.09999996,15 L14.9,15 C15.52,15 16.01,14.44 15.89,13.84 C15.24,10.61 11.87,8.98999999 8.49999999,8.98999999 C5.12999997,8.98999999 1.76999996,10.61 1.10999995,13.84 C0.989999954,14.44 1.48999996,15 2.09999996,15 Z M15,17 L1.99999995,17 C1.44999996,17 0.999999954,17.45 0.999999954,18 C0.999999954,18.55 1.44999996,19 1.99999995,19 L15,19 C15.55,19 16,18.55 16,18 C16,17.45 15.55,17 15,17 Z',
      id: 'MapsFastfoodIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fastfood',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsFastfoodIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsFastfoodIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsFastfoodIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsFastfoodIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
