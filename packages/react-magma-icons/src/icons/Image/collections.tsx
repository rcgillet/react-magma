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
  title: ['collections'],
  paths: [
    {
      d:
        'M22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L20,18 C21.1,18 22,17.1 22,16 Z M11.4,12.53 L13.03,14.71 L15.61,11.49 C15.81,11.24 16.19,11.24 16.39,11.49 L19.35,15.19 C19.61,15.52 19.38,16 18.96,16 L8.99999999,16 C8.58999999,16 8.34999998,15.53 8.59999999,15.2 L10.6,12.53 C10.8,12.27 11.2,12.27 11.4,12.53 L11.4,12.53 Z M1.99999996,6.99999998 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L17,22 C17.55,22 18,21.55 18,21 C18,20.45 17.55,20 17,20 L4.99999996,20 C4.44999997,20 3.99999996,19.55 3.99999996,19 L3.99999996,6.99999998 C3.99999996,6.44999998 3.54999996,5.99999998 2.99999996,5.99999998 C2.44999996,5.99999998 1.99999996,6.44999998 1.99999996,6.99999998 Z',
      id: 'ImageCollectionsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'collections',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCollectionsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCollectionsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCollectionsIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCollectionsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
