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
  title: ['grid_on'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M7.99999997,20 L4.99999997,20 C4.44999997,20 3.99999997,19.55 3.99999997,19 L3.99999997,16 L7.99999997,16 L7.99999997,20 Z M7.99999997,14 L3.99999997,14 L3.99999997,9.99999999 L7.99999997,9.99999999 L7.99999997,14 Z M7.99999997,7.99999997 L3.99999997,7.99999997 L3.99999997,4.99999997 C3.99999997,4.44999997 4.44999997,3.99999997 4.99999997,3.99999997 L7.99999997,3.99999997 L7.99999997,7.99999997 Z M14,20 L9.99999999,20 L9.99999999,16 L14,16 L14,20 Z M14,14 L9.99999999,14 L9.99999999,9.99999999 L14,9.99999999 L14,14 Z M14,7.99999997 L9.99999999,7.99999997 L9.99999999,3.99999997 L14,3.99999997 L14,7.99999997 Z M19,20 L16,20 L16,16 L20,16 L20,19 C20,19.55 19.55,20 19,20 Z M20,14 L16,14 L16,9.99999999 L20,9.99999999 L20,14 Z M20,7.99999997 L16,7.99999997 L16,3.99999997 L19,3.99999997 C19.55,3.99999997 20,4.44999997 20,4.99999997 L20,7.99999997 Z',
      id: 'ImageGridOnIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'grid_on',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageGridOnIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageGridOnIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageGridOnIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageGridOnIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
