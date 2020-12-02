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
  title: ['library_music'],
  paths: [
    {
      d:
        'M20,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M17,6.99999997 L15,6.99999997 L15,12.37 C15,13.64 14.1,14.81 12.84,14.97 C11.15,15.2 9.72999999,13.72 10.04,12.02 C10.24,10.92 11.22,10.07 12.34,9.99999997 C12.97,9.95999999 13.54,10.16 14,10.51 L14,5.99999997 C14,5.44999997 14.45,4.99999997 15,4.99999997 L17,4.99999997 C17.55,4.99999997 18,5.44999997 18,5.99999997 C18,6.54999998 17.55,6.99999997 17,6.99999997 Z M2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,6.44999998 1.99999996,6.99999997 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L17,22 C17.55,22 18,21.55 18,21 C18,20.45 17.55,20 17,20 L4.99999996,20 C4.44999997,20 3.99999996,19.55 3.99999996,19 L3.99999996,6.99999997 C3.99999996,6.44999998 3.54999996,5.99999997 2.99999996,5.99999997 Z',
      id: 'AVLibraryMusicIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'library_music',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVLibraryMusicIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVLibraryMusicIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVLibraryMusicIcon-path-1',
        },
      ],
    },
  ],
};

export const AVLibraryMusicIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
