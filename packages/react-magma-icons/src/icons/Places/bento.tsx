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
  title: ['bento'],
  paths: [
    {
      d:
        'M16,11 L16,4.99999997 L20,4.99999997 C21.1,4.99999997 22,5.89999997 22,6.99999997 L22,11 L16,11 Z M20,19 C21.1,19 22,18.1 22,17 L22,13 L16,13 L16,19 L20,19 Z M14,4.99999997 L14,19 L3.99999996,19 C2.89999996,19 1.99999996,18.1 1.99999996,17 L1.99999996,6.99999997 C1.99999996,5.89999997 2.89999996,4.99999997 3.99999996,4.99999997 L14,4.99999997 Z M9.49999998,12 C9.49999998,11.17 8.82999999,10.5 7.99999998,10.5 C7.16999998,10.5 6.49999998,11.17 6.49999998,12 C6.49999998,12.83 7.16999998,13.5 7.99999998,13.5 C8.82999999,13.5 9.49999998,12.83 9.49999998,12 Z',
      id: 'PlacesBentoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bento',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesBentoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesBentoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesBentoIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesBentoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
