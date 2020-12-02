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
  title: ['rice_bowl'],
  paths: [
    {
      d:
        'M22,12 L22,12 C22,6.51999998 17.6,2.06999996 12.14,1.99999996 C8.51999999,1.94999996 5.28999997,4.02999997 3.42999996,7.13999998 C0.0999999504,12.69 2.97999996,18.27 7.99999998,20.25 L7.99999998,20.5 C7.99999998,21.33 8.66999999,22 9.49999999,22 L14.5,22 C15.33,22 16,21.33 16,20.5 L16,20.25 C19.53,18.86 22,15.69 22,12 Z M20,12 L16,12 L16,5.07999997 C18.39,6.46999998 20,9.04999999 20,12 Z M14,4.25999997 L14,12 L9.99999999,12 L9.99999999,4.25999997 C10.64,4.09999997 11.31,3.99999997 12,3.99999997 C12.69,3.99999997 13.36,4.09999997 14,4.25999997 Z M3.99999997,12 C3.99999997,9.04999999 5.60999997,6.46999998 7.99999997,5.07999997 L7.99999997,12 L3.99999997,12 Z',
      id: 'PlacesRiceBowlIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'rice_bowl',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesRiceBowlIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesRiceBowlIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesRiceBowlIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesRiceBowlIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
