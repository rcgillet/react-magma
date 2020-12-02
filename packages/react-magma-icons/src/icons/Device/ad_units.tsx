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
  title: ['ad_units'],
  paths: [
    {
      d:
        'M17,0.999999954 C18.1,0.999999954 19,1.89999996 19,2.99999995 L19,2.99999995 L19,21 C19,22.1 18.1,23 17,23 L17,23 L6.99999997,23 C5.89999997,23 4.99999997,22.1 4.99999997,21 L4.99999997,21 L4.99999997,2.99999995 C4.99999997,1.89999996 5.89999997,0.999999954 6.99999997,0.999999954 L6.99999997,0.999999954 Z M16,4.99999997 L7.99999998,4.99999997 C7.44999998,4.99999997 6.99999998,5.44999997 6.99999998,5.99999997 L6.99999998,5.99999997 L6.99999998,18 C6.99999998,18.55 7.44999998,19 7.99999998,19 L7.99999998,19 L16,19 C16.55,19 17,18.55 17,18 L17,18 L17,5.99999997 C17,5.44999997 16.55,4.99999997 16,4.99999997 L16,4.99999997 Z M15,5.99999997 C15.55,5.99999997 16,6.44999998 16,6.99999997 L16,6.99999997 L15.9932398,7.11619896 C15.9352041,7.61198978 15.5107143,7.99999997 15,7.99999997 L15,7.99999997 L8.99999998,7.99999997 C8.44999999,7.99999997 7.99999998,7.54999998 7.99999998,6.99999997 L7.99999998,6.99999997 L8.00676019,6.883801 C8.0647959,6.38801018 8.4892857,5.99999997 8.99999998,5.99999997 L8.99999998,5.99999997 Z',
      id: 'DeviceAdUnitsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'ad_units',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceAdUnitsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceAdUnitsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceAdUnitsIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceAdUnitsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
