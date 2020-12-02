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
  title: ['view_compact'],
  paths: [
    {
      d:
        'M4.99999996,19 L8.99999996,19 L8.99999996,12 L2.99999996,12 L2.99999996,17 C2.99999996,18.1 3.89999997,19 4.99999996,19 Z M9.99999999,19 L20,19 C21.1,19 22,18.1 22,17 L22,12 L9.99999999,12 L9.99999999,19 Z M2.99999996,6.99999997 L2.99999996,11 L22,11 L22,6.99999997 C22,5.89999997 21.1,4.99999997 20,4.99999997 L4.99999996,4.99999997 C3.89999997,4.99999997 2.99999996,5.89999997 2.99999996,6.99999997 Z',
      id: 'ImageViewCompactIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_compact',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageViewCompactIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageViewCompactIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageViewCompactIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageViewCompactIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
