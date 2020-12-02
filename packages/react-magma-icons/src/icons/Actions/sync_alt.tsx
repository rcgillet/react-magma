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
  title: ['sync_alt'],
  paths: [
    {
      d:
        'M5.14999997,12.86 C5.45999997,12.54 5.99999997,12.76 5.99999997,13.21 L5.99999997,13.21 L5.99999997,15 L20,15 C20.55,15 21,15.45 21,16 L21,16 L20.9932398,16.116199 C20.9352041,16.6119898 20.5107143,17 20,17 L20,17 L5.99999997,17 L5.99999997,18.79 C5.99999997,19.24 5.45999997,19.46 5.13999997,19.14 L5.13999997,19.14 L2.34999996,16.35 C2.15999996,16.16 2.15999996,15.84 2.35999996,15.65 L2.35999996,15.65 Z M18,5.20999997 C18,4.75999997 18.54,4.53999997 18.86,4.85999997 L18.86,4.85999997 L21.65,7.64999998 C21.84,7.83999998 21.84,8.15999998 21.64,8.34999998 L21.64,8.34999998 L18.85,11.14 C18.54,11.46 18,11.24 18,10.79 L18,10.79 L18,8.99999999 L3.99999996,8.99999999 C3.44999996,8.99999999 2.99999996,8.54999999 2.99999996,7.99999998 L2.99999996,7.99999998 L3.00676017,7.883801 C3.06479588,7.38801018 3.48928568,6.99999998 3.99999996,6.99999998 L3.99999996,6.99999998 L18,6.99999998 Z',
      id: 'ActionsSyncAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sync_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSyncAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSyncAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSyncAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSyncAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
