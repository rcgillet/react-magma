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
  title: ['fitness_center'],
  paths: [
    {
      d:
        'M20.57,14.86 L21.29,14.14 C21.68,13.75 21.68,13.12 21.29,12.73 L21.27,12.71 C20.88,12.32 20.25,12.32 19.86,12.71 L17,15.57 L8.42999999,6.99999998 L11.29,4.13999997 C11.68,3.74999997 11.68,3.11999996 11.29,2.72999996 L11.27,2.70999996 C10.88,2.31999996 10.25,2.31999996 9.85999999,2.70999996 L9.13999999,3.42999996 L8.41999999,2.70999996 C8.02999998,2.31999996 7.38999998,2.31999996 6.99999998,2.70999996 L5.56999997,4.13999997 L4.84999997,3.41999996 C4.45999997,3.02999996 3.80999997,3.02999996 3.41999996,3.41999996 C3.02999996,3.80999997 3.02999996,4.45999997 3.41999996,4.84999997 L4.13999997,5.56999997 L2.70999996,6.99999998 C2.31999996,7.38999998 2.31999996,8.01999998 2.70999996,8.40999999 L3.42999996,9.12999999 L2.70999996,9.85999999 C2.31999996,10.25 2.31999996,10.88 2.70999996,11.27 L2.72999996,11.29 C3.11999996,11.68 3.74999997,11.68 4.13999997,11.29 L6.99999998,8.42999999 L15.57,17 L12.71,19.86 C12.32,20.25 12.32,20.88 12.71,21.27 L12.73,21.29 C13.12,21.68 13.75,21.68 14.14,21.29 L14.86,20.57 L15.58,21.29 C15.97,21.68 16.6,21.68 16.99,21.29 L18.42,19.86 L19.14,20.58 C19.53,20.97 20.18,20.97 20.57,20.58 C20.96,20.19 20.96,19.54 20.57,19.15 L19.85,18.43 L21.29,17 C21.68,16.61 21.68,15.98 21.29,15.59 L20.57,14.86 Z',
      id: 'PlacesFitnessCenterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fitness_center',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesFitnessCenterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesFitnessCenterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesFitnessCenterIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesFitnessCenterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
