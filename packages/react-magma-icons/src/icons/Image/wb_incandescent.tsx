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
  title: ['wb_incandescent'],
  paths: [
    {
      d:
        'M4.24999997,19.79 C4.63999997,20.18 5.26999997,20.18 5.65999997,19.79 L6.04999998,19.4 C6.43999998,19.01 6.42999998,18.38 6.04999998,18 L6.03999998,17.99 C5.64999997,17.6 5.01999997,17.6 4.62999997,17.99 L4.23999997,18.38 C3.85999997,18.78 3.85999997,19.4 4.24999997,19.79 Z M11.99,23 L12,23 C12.55,23 12.99,22.56 12.99,22.01 L12.99,21.05 C12.99,20.5 12.55,20.06 12,20.06 L11.99,20.06 C11.44,20.06 11,20.5 11,21.05 L11,22.01 C11,22.56 11.44,23 11.99,23 Z M3.00999996,11.05 L1.98999996,11.05 C1.43999996,11.05 0.999999954,11.49 0.999999954,12.04 L0.999999954,12.05 C0.999999954,12.6 1.43999996,13.04 1.98999996,13.04 L2.99999995,13.04 C3.54999996,13.04 3.98999997,12.6 3.98999997,12.05 L3.98999997,12.04 C3.99999995,11.49 3.55999996,11.05 3.00999996,11.05 Z M15,6.85999998 L15,3.04999996 C15,2.49999996 14.55,2.04999996 14,2.04999996 L9.99999999,2.04999996 C9.44999999,2.04999996 8.99999999,2.49999996 8.99999999,3.04999996 L8.99999999,6.85999998 C6.95999998,8.03999998 5.67999997,10.38 6.06999998,12.99 C6.46999998,15.6 8.62999999,17.69 11.25,18.01 C14.89,18.45 18,15.61 18,12.06 C18,9.82999999 16.79,7.89999998 15,6.85999998 Z M20,12.04 L20,12.05 C20,12.6 20.44,13.04 20.99,13.04 L22,13.04 C22.55,13.04 22.99,12.6 22.99,12.05 L22.99,12.04 C22.99,11.49 22.55,11.05 22,11.05 L20.99,11.05 C20.44,11.05 20,11.49 20,12.04 Z M17.94,19.41 L18.33,19.8 C18.72,20.19 19.35,20.19 19.74,19.8 C20.13,19.41 20.13,18.78 19.74,18.39 L19.35,18 C18.96,17.61 18.33,17.62 17.95,18 C17.55,18.4 17.55,19.02 17.94,19.41 Z',
      id: 'ImageWbIncandescentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wb_incandescent',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageWbIncandescentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageWbIncandescentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageWbIncandescentIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageWbIncandescentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
