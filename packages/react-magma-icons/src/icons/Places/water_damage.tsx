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
  title: ['water_damage'],
  paths: [
    {
      d:
        'M11.33,3.59999997 L2.96999996,11.13 C2.62999996,11.43 2.83999996,12 3.29999996,12 L4.99999997,12 L4.99999997,19 C4.99999997,19.55 5.44999997,20 5.99999998,20 L18,20 C18.55,20 19,19.55 19,19 L19,12 L20.7,12 C21.16,12 21.38,11.43 21.03,11.13 L12.67,3.59999997 C12.29,3.25999996 11.71,3.25999996 11.33,3.59999997 Z M12,16 C10.9,16 9.99999999,15.1 9.99999999,14 C9.99999999,13.22 10.99,11.56 11.58,10.64 C11.78,10.33 12.22,10.33 12.42,10.64 C13.01,11.56 14,13.22 14,14 C14,15.1 13.1,16 12,16 Z',
      id: 'PlacesWaterDamageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'water_damage',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesWaterDamageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesWaterDamageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesWaterDamageIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesWaterDamageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
