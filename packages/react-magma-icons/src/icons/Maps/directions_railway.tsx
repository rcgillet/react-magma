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
  title: ['directions_railway'],
  paths: [
    {
      d:
        'M3.99999997,15.5 C3.99999997,17.43 5.56999997,19 7.49999997,19 L5.99999997,20.5 L5.99999997,21 L18,21 L18,20.5 L16.5,19 C18.43,19 20,17.43 20,15.5 L20,4.99999995 C20,1.49999995 16.42,0.999999954 12,0.999999954 C7.57999998,0.999999954 3.99999997,1.49999995 3.99999997,4.99999995 L3.99999997,15.5 Z M12,17 C10.9,17 9.99999999,16.1 9.99999999,15 C9.99999999,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M18,9.99999997 L5.99999997,9.99999997 L5.99999997,4.99999997 L18,4.99999997 L18,9.99999997 Z M3.99999997,15.5 C3.99999997,17.43 5.56999997,19 7.49999997,19 L6.35999998,20.15 C6.03999998,20.46 6.25999998,21 6.70999998,21 L17.29,21 C17.74,21 17.96,20.46 17.64,20.15 L16.5,19 C18.43,19 20,17.43 20,15.5 L20,4.99999995 C20,1.49999995 16.42,0.999999954 12,0.999999954 C7.57999998,0.999999954 3.99999997,1.49999995 3.99999997,4.99999995 L3.99999997,15.5 Z M12,17 C10.9,17 9.99999999,16.1 9.99999999,15 C9.99999999,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z M18,9.99999997 L5.99999997,9.99999997 L5.99999997,4.99999997 L18,4.99999997 L18,9.99999997 Z',
      id: 'MapsDirectionsRailwayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_railway',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsRailwayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsRailwayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsRailwayIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsRailwayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
