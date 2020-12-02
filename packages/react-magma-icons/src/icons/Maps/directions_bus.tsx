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
  title: ['directions_bus'],
  paths: [
    {
      d:
        'M3.99999997,16 C3.99999997,16.88 4.38999997,17.67 4.99999997,18.22 L4.99999997,19.5 C4.99999997,20.33 5.66999997,21 6.49999997,21 C7.32999998,21 7.99999997,20.33 7.99999997,19.5 L7.99999997,19 L16,19 L16,19.5 C16,20.32 16.67,21 17.5,21 C18.32,21 19,20.33 19,19.5 L19,18.22 C19.61,17.67 20,16.88 20,16 L20,5.99999996 C20,2.49999996 16.42,1.99999996 12,1.99999996 C7.57999998,1.99999996 3.99999997,2.49999996 3.99999997,5.99999996 L3.99999997,16 Z M7.49999997,17 C6.66999998,17 5.99999997,16.33 5.99999997,15.5 C5.99999997,14.67 6.66999998,14 7.49999997,14 C8.32999998,14 8.99999997,14.67 8.99999997,15.5 C8.99999997,16.33 8.32999998,17 7.49999997,17 Z M16.5,17 C15.67,17 15,16.33 15,15.5 C15,14.67 15.67,14 16.5,14 C17.33,14 18,14.67 18,15.5 C18,16.33 17.33,17 16.5,17 Z M18,11 L5.99999997,11 L5.99999997,5.99999998 L18,5.99999998 L18,11 Z',
      id: 'MapsDirectionsBusIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_bus',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsBusIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsBusIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsBusIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsBusIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
