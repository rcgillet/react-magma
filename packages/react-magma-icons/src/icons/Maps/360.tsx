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
  title: ['360'],
  paths: [
    {
      d:
        'M12,6.99999998 C6.47999998,6.99999998 1.99999996,9.23999999 1.99999996,12 C1.99999996,14.24 4.93999997,16.13 8.99999996,16.77 L8.99999996,18.79 C8.99999996,19.24 9.53999999,19.46 9.84999999,19.14 L12.64,16.35 C12.84,16.15 12.84,15.84 12.64,15.64 L9.84999999,12.85 C9.53999999,12.54 8.99999996,12.76 8.99999996,13.21 L8.99999996,14.73 C5.84999997,14.17 3.99999996,12.83 3.99999996,12 C3.99999996,10.94 7.03999998,8.99999998 12,8.99999998 C16.96,8.99999998 20,10.94 20,12 C20,12.66 18.8,13.68 16.68,14.34 C16.27,14.47 16,14.85 16,15.28 C16,15.95 16.65,16.44 17.28,16.24 C20.11,15.36 22,13.79 22,12 C22,9.23999999 17.52,6.99999998 12,6.99999998 Z',
      id: 'Maps360Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: '360',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'Maps360Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#Maps360Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#Maps360Icon-path-1',
        },
      ],
    },
  ],
};

export const Maps360Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
