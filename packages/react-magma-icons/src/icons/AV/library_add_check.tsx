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
  title: ['library_add_check'],
  paths: [
    {
      d:
        'M20,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M11.76,13.28 L9.68999999,11.2 C9.30999999,10.81 9.30999999,10.19 9.68999999,9.79999999 L9.68999999,9.79999999 C10.08,9.40999999 10.71,9.40999999 11.1,9.79999999 L12.46,11.17 L16.88,6.70999998 C17.27,6.31999998 17.9,6.31999998 18.29,6.70999998 L18.29,6.70999998 C18.67,7.09999998 18.67,7.71999998 18.29,8.10999998 L13.16,13.28 C12.79,13.68 12.15,13.68 11.76,13.28 Z M2.99999996,5.99999997 L2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,6.44999998 1.99999996,6.99999997 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L17,22 C17.55,22 18,21.55 18,21 L18,21 C18,20.45 17.55,20 17,20 L4.99999996,20 C4.44999997,20 3.99999996,19.55 3.99999996,19 L3.99999996,6.99999997 C3.99999996,6.44999998 3.54999996,5.99999997 2.99999996,5.99999997 Z',
      id: 'AVLibraryAddCheckIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'library_add_check',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVLibraryAddCheckIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVLibraryAddCheckIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#AVLibraryAddCheckIcon-path-1',
        },
      ],
    },
  ],
};

export const AVLibraryAddCheckIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
