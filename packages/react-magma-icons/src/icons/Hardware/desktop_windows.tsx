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
  title: ['desktop_windows'],
  paths: [
    {
      d:
        'M21,1.99999996 L2.99999995,1.99999996 C1.89999996,1.99999996 0.999999954,2.89999996 0.999999954,3.99999996 L0.999999954,16 C0.999999954,17.1 1.89999996,18 2.99999995,18 L9.99999995,18 L9.99999995,20 L8.99999995,20 C8.44999999,20 7.99999995,20.45 7.99999995,21 C7.99999995,21.55 8.44999999,22 8.99999995,22 L15,22 C15.55,22 16,21.55 16,21 C16,20.45 15.55,20 15,20 L14,20 L14,18 L21,18 C22.1,18 23,17.1 23,16 L23,3.99999996 C23,2.89999996 22.1,1.99999996 21,1.99999996 Z M20,16 L3.99999996,16 C3.44999996,16 2.99999996,15.55 2.99999996,15 L2.99999996,4.99999997 C2.99999996,4.44999997 3.44999996,3.99999997 3.99999996,3.99999997 L20,3.99999997 C20.55,3.99999997 21,4.44999997 21,4.99999997 L21,15 C21,15.55 20.55,16 20,16 Z',
      id: 'HardwareDesktopWindowsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'desktop_windows',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareDesktopWindowsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareDesktopWindowsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareDesktopWindowsIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareDesktopWindowsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
