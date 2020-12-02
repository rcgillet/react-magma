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
  title: ['compare'],
  paths: [
    {
      d:
        'M9.99999996,2.99999995 L4.99999996,2.99999995 C3.89999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L9.99999996,21 L9.99999996,22 C9.99999996,22.55 10.45,23 11,23 C11.55,23 12,22.55 12,22 L12,1.99999995 C12,1.44999996 11.55,0.999999954 11,0.999999954 C10.45,0.999999954 9.99999996,1.44999996 9.99999996,1.99999995 L9.99999996,2.99999995 Z M9.99999997,18 L4.99999997,18 L9.99999997,12 L9.99999997,18 Z M19,2.99999996 L14,2.99999996 L14,4.99999996 L18,4.99999996 C18.55,4.99999996 19,5.44999997 19,5.99999996 L19,18 L14,12 L14,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z',
      id: 'ImageCompareIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'compare',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageCompareIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageCompareIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageCompareIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageCompareIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
