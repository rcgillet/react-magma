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
  title: ['mobile_off'],
  paths: [
    {
      d:
        'M17,16.44 L3.60999997,3.04999996 C3.21999996,2.65999996 2.58999996,2.65999996 2.19999996,3.04999996 C1.80999996,3.43999996 1.80999996,4.06999997 2.19999996,4.45999997 L4.99999997,7.26999998 L4.99999997,21 C4.99999997,22.1 5.89999997,23 6.99999998,23 L17,23 C18.02,23 18.85,22.23 18.98,21.25 L20,22.27 C20.39,22.66 21.02,22.66 21.41,22.27 C21.8,21.88 21.8,21.25 21.41,20.86 L19,18.44 L17,16.44 Z M6.99999998,19 L6.99999998,9.26999999 L16.73,19 L6.99999998,19 Z M17,4.99999995 L17,13.61 L19,15.61 L19,2.99999995 C19,1.89999996 18.1,0.999999954 17,0.999999954 L6.99999998,0.999999954 C6.28999998,0.999999954 5.66999997,1.36999996 5.31999997,1.92999996 L8.38999998,4.99999995 L17,4.99999995 Z',
      id: 'DeviceMobileOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mobile_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceMobileOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceMobileOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceMobileOffIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceMobileOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
