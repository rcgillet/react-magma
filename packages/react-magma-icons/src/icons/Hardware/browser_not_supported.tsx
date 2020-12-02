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
  title: ['browser_not_supported'],
  paths: [
    {
      d:
        'M2.58999996,3.94999997 C2.93999996,3.59999996 3.50999996,3.59999996 3.85999997,3.94999997 L3.85999997,3.94999997 L20.05,20.15 C20.4,20.5 20.4,21.07 20.05,21.42 C19.7,21.77 19.13,21.77 18.78,21.42 L18.78,21.42 L17.36,20 L4.99999997,20 C3.89999997,20 2.99999996,19.1 2.99999996,18 L2.99999996,18 L2.99999996,5.63999997 L2.58999996,5.21999997 C2.23999996,4.86999997 2.23999996,4.29999997 2.58999996,3.94999997 Z M19,3.99999997 C20.1,3.99999997 21,4.89999997 21,5.99999997 L21,5.99999997 L21,18 C21,18.15 20.98,18.3 20.95,18.45 L20.95,18.45 L19,16.5 L19,5.99999997 L8.49999998,5.99999997 L6.49999998,3.99999997 Z M4.99999997,7.63999998 L4.99999997,18 L15.36,18 L4.99999997,7.63999998 Z',
      id: 'HardwareBrowserNotSupportedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'browser_not_supported',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareBrowserNotSupportedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareBrowserNotSupportedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#HardwareBrowserNotSupportedIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareBrowserNotSupportedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
