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
  title: ['local_offer'],
  paths: [
    {
      d:
        'M21.41,11.58 L12.41,2.57999996 C12.05,2.21999996 11.55,1.99999996 11,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,11 C1.99999996,11.55 2.21999996,12.05 2.58999996,12.42 L11.59,21.42 C11.95,21.78 12.45,22 13,22 C13.55,22 14.05,21.78 14.41,21.41 L21.41,14.41 C21.78,14.05 22,13.55 22,13 C22,12.45 21.77,11.94 21.41,11.58 Z M5.49999997,6.99999997 C4.66999997,6.99999997 3.99999997,6.32999998 3.99999997,5.49999997 C3.99999997,4.66999997 4.66999997,3.99999997 5.49999997,3.99999997 C6.32999998,3.99999997 6.99999997,4.66999997 6.99999997,5.49999997 C6.99999997,6.32999998 6.32999998,6.99999997 5.49999997,6.99999997 Z',
      id: 'MapsLocalOfferIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_offer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalOfferIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalOfferIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalOfferIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalOfferIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
