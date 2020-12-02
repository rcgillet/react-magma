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
  title: ['graphic_eq'],
  paths: [
    {
      d:
        'M7.99999998,18 C8.54999999,18 8.99999998,17.55 8.99999998,17 L8.99999998,6.99999997 C8.99999998,6.44999998 8.54999999,5.99999997 7.99999998,5.99999997 C7.44999998,5.99999997 6.99999998,6.44999998 6.99999998,6.99999997 L6.99999998,17 C6.99999998,17.55 7.44999998,18 7.99999998,18 Z M12,22 C12.55,22 13,21.55 13,21 L13,2.99999996 C13,2.44999996 12.55,1.99999996 12,1.99999996 C11.45,1.99999996 11,2.44999996 11,2.99999996 L11,21 C11,21.55 11.45,22 12,22 Z M3.99999996,14 C4.54999997,14 4.99999996,13.55 4.99999996,13 L4.99999996,11 C4.99999996,10.45 4.54999997,9.99999999 3.99999996,9.99999999 C3.44999996,9.99999999 2.99999996,10.45 2.99999996,11 L2.99999996,13 C2.99999996,13.55 3.44999996,14 3.99999996,14 Z M16,18 C16.55,18 17,17.55 17,17 L17,6.99999997 C17,6.44999998 16.55,5.99999997 16,5.99999997 C15.45,5.99999997 15,6.44999998 15,6.99999997 L15,17 C15,17.55 15.45,18 16,18 Z M19,11 L19,13 C19,13.55 19.45,14 20,14 C20.55,14 21,13.55 21,13 L21,11 C21,10.45 20.55,9.99999999 20,9.99999999 C19.45,9.99999999 19,10.45 19,11 Z',
      id: 'DeviceGraphicEqIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'graphic_eq',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceGraphicEqIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceGraphicEqIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceGraphicEqIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceGraphicEqIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
