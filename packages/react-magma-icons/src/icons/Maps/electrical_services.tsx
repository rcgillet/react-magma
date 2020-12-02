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
  title: ['electrical_services'],
  paths: [
    {
      d:
        'M16,12 C16.55,12 17,12.45 17,13 L17,13 L17,19 C17,19.55 16.55,20 16,20 L16,20 L14,20 C12.9,20 12,19.1 12,18 L12,18 L11,18 C10.45,18 9.99999999,17.55 9.99999999,17 L9.99999999,17 L9.99999999,15 C9.99999999,14.45 10.45,14 11,14 L11,14 L12,14 C12,12.9 12.9,12 14,12 L14,12 Z M20,17 C20.55,17 21,17.45 21,18 C21,18.55 20.55,19 20,19 L20,19 L18,19 L18,17 Z M8.49999996,3.99999997 C10.43,3.99999997 12,5.56999997 12,7.49999997 C12,9.42999999 10.43,11 8.49999996,11 L8.49999996,11 L6.99999996,11 C5.89999997,11 4.99999996,11.9 4.99999996,13 C4.99999996,14.1 5.89999997,15 6.99999996,15 L6.99999996,15 L8.99999996,15 L8.99999996,17 L6.99999996,17 C4.78999997,17 2.99999996,15.21 2.99999996,13 C2.99999996,10.79 4.78999997,8.99999997 6.99999996,8.99999997 L6.99999996,8.99999997 L8.49999996,8.99999997 C9.32999999,8.99999997 9.99999996,8.32999998 9.99999996,7.49999997 C9.99999996,6.66999998 9.32999999,5.99999997 8.49999996,5.99999997 L8.49999996,5.99999997 L4.99999996,5.99999997 C4.44999997,5.99999997 3.99999996,5.54999997 3.99999996,4.99999997 C3.99999996,4.44999997 4.44999997,3.99999997 4.99999996,3.99999997 L4.99999996,3.99999997 Z M20,13 C20.55,13 21,13.45 21,14 C21,14.55 20.55,15 20,15 L20,15 L18,15 L18,13 Z',
      id: 'MapsElectricalServicesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'electrical_services',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsElectricalServicesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsElectricalServicesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsElectricalServicesIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsElectricalServicesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
