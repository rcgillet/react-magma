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
  title: ['local_gas_station'],
  paths: [
    {
      d:
        'M19.77,7.22999998 L19.78,7.21999998 L16.59,4.02999997 C16.3,3.73999997 15.82,3.73999997 15.53,4.02999997 C15.24,4.31999997 15.24,4.79999997 15.53,5.08999997 L17.11,6.66999998 C16.06,7.06999998 15.35,8.13999998 15.53,9.37999999 C15.69,10.48 16.63,11.37 17.73,11.49 C18.2,11.54 18.61,11.46 19,11.29 L19,18.5 C19,19.05 18.55,19.5 18,19.5 C17.45,19.5 17,19.05 17,18.5 L17,14 C17,12.9 16.1,12 15,12 L14,12 L14,4.99999996 C14,3.89999997 13.1,2.99999996 12,2.99999996 L5.99999997,2.99999996 C4.89999997,2.99999996 3.99999997,3.89999997 3.99999997,4.99999996 L3.99999997,20 C3.99999997,20.55 4.44999997,21 4.99999997,21 L13,21 C13.55,21 14,20.55 14,20 L14,13.5 L15.5,13.5 L15.5,18.36 C15.5,19.67 16.44,20.86 17.74,20.99 C19.24,21.14 20.5,19.97 20.5,18.5 L20.5,8.99999996 C20.5,8.30999998 20.22,7.67999998 19.77,7.22999998 Z M12,9.99999997 L5.99999997,9.99999997 L5.99999997,5.99999997 C5.99999997,5.44999997 6.44999998,4.99999997 6.99999997,4.99999997 L11,4.99999997 C11.55,4.99999997 12,5.44999997 12,5.99999997 L12,9.99999997 Z M18,9.99999998 C17.45,9.99999998 17,9.54999999 17,8.99999998 C17,8.44999999 17.45,7.99999998 18,7.99999998 C18.55,7.99999998 19,8.44999999 19,8.99999998 C19,9.54999999 18.55,9.99999998 18,9.99999998 Z',
      id: 'MapsLocalGasStationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_gas_station',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalGasStationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalGasStationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalGasStationIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalGasStationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
