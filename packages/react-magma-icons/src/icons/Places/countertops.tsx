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
  title: ['countertops'],
  paths: [
    {
      d:
        'M18,9.99999999 L18,7.16999998 C18,5.54999997 16.78,4.08999997 15.16,3.99999997 C13.95,3.93999997 12.89,4.58999997 12.36,5.56999997 C12.01,6.21999998 12.53,6.99999998 13.27,6.99999998 L13.28,6.99999998 C13.62,6.99999998 13.96,6.83999998 14.12,6.53999998 C14.28,6.21999998 14.62,5.99999998 15,5.99999998 C15.55,5.99999998 16,6.44999998 16,6.99999998 L16,9.99999999 L7.99999996,9.99999999 C9.09999999,9.99999999 9.99999996,9.09999999 9.99999996,7.99999998 L9.99999996,4.99999997 C9.99999996,4.44999997 9.54999999,3.99999997 8.99999996,3.99999997 L4.99999996,3.99999997 C4.44999997,3.99999997 3.99999996,4.44999997 3.99999996,4.99999997 L3.99999996,7.99999998 C3.99999996,9.09999999 4.89999997,9.99999999 5.99999996,9.99999999 L2.99999996,9.99999999 C2.44999996,9.99999999 1.99999996,10.45 1.99999996,11 L1.99999996,11 C1.99999996,11.55 2.44999996,12 2.99999996,12 L3.99999996,12 L3.99999996,19 C3.99999996,19.55 4.44999997,20 4.99999996,20 L19,20 C19.55,20 20,19.55 20,19 L20,12 L21,12 C21.55,12 22,11.55 22,11 L22,11 C22,10.45 21.55,9.99999999 21,9.99999999 L18,9.99999999 Z M13,18 L11,18 L11,12 L13,12 L13,18 Z',
      id: 'PlacesCountertopsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'countertops',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesCountertopsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesCountertopsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesCountertopsIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesCountertopsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
