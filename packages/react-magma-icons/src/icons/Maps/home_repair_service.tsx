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
  title: ['home_repair_service'],
  paths: [
    {
      d:
        'M5.99999996,15 C5.99999996,15.55 6.44999998,16 6.99999996,16 C7.54999998,16 7.99999996,15.55 7.99999996,15 L7.99999996,15 L16,15 C16,15.55 16.45,16 17,16 C17.55,16 18,15.55 18,15 L18,15 L22,15 L22,18 C22,19.1 21.1,20 20,20 L20,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,18 L1.99999996,15 Z M15,3.99999997 C16.1,3.99999997 17,4.89999997 17,5.99999997 L17,5.99999997 L17,7.99999997 L20,7.99999997 C21.1,7.99999997 22,8.89999999 22,9.99999997 L22,9.99999997 L22,14 L18,14 L18,13 C18,12.45 17.55,12 17,12 C16.45,12 16,12.45 16,13 L16,13 L16,14 L7.99999996,14 L7.99999996,13 C7.99999996,12.45 7.54999998,12 6.99999996,12 C6.44999998,12 5.99999996,12.45 5.99999996,13 L5.99999996,13 L5.99999996,14 L1.99999996,14 L1.99999996,9.99999997 C1.99999996,8.89999999 2.89999996,7.99999997 3.99999996,7.99999997 L3.99999996,7.99999997 L6.99999996,7.99999997 L6.99999996,5.99999997 C6.99999996,4.89999997 7.89999998,3.99999997 8.99999996,3.99999997 L8.99999996,3.99999997 Z M15,5.99999998 L8.99999999,5.99999998 L8.99999999,7.99999998 L15,7.99999998 L15,5.99999998 Z',
      id: 'MapsHomeRepairServiceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'home_repair_service',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsHomeRepairServiceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsHomeRepairServiceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsHomeRepairServiceIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsHomeRepairServiceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
