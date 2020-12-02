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
  title: ['filter_frames'],
  paths: [
    {
      d:
        'M20,3.99999997 L16,3.99999997 L12.71,0.709999953 C12.32,0.319999951 11.69,0.319999951 11.3,0.709999953 L7.99999996,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999998 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,5.99999998 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M19,20 L4.99999997,20 C4.44999997,20 3.99999997,19.55 3.99999997,19 L3.99999997,6.99999996 C3.99999997,6.44999998 4.44999997,5.99999996 4.99999997,5.99999996 L8.51999999,5.99999996 L12.04,2.49999996 L15.52,5.99999996 L19,5.99999996 C19.55,5.99999996 20,6.44999998 20,6.99999996 L20,19 C20,19.55 19.55,20 19,20 Z M17,7.99999998 L6.99999997,7.99999998 C6.44999998,7.99999998 5.99999997,8.44999999 5.99999997,8.99999998 L5.99999997,17 C5.99999997,17.55 6.44999998,18 6.99999997,18 L17,18 C17.55,18 18,17.55 18,17 L18,8.99999998 C18,8.44999999 17.55,7.99999998 17,7.99999998 Z',
      id: 'ImageFilterFramesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'filter_frames',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageFilterFramesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageFilterFramesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageFilterFramesIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageFilterFramesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
