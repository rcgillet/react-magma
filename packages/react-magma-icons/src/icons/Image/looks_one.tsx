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
  title: ['looks_one'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M13,17 C12.45,17 12,16.55 12,16 L12,8.99999998 L11,8.99999998 C10.45,8.99999998 9.99999999,8.54999999 9.99999999,7.99999998 C9.99999999,7.44999998 10.45,6.99999998 11,6.99999998 L13,6.99999998 C13.55,6.99999998 14,7.44999998 14,7.99999998 L14,16 C14,16.55 13.55,17 13,17 Z',
      id: 'ImageLooksOneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'looks_one',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageLooksOneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageLooksOneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageLooksOneIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageLooksOneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
