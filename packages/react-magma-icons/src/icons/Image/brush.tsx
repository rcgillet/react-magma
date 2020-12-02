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
  title: ['brush'],
  paths: [
    {
      d:
        'M6.99999996,14 C5.33999997,14 3.99999996,15.34 3.99999996,17 C3.99999996,18.31 2.83999996,19 1.99999996,19 C2.91999996,20.22 4.48999997,21 5.99999996,21 C8.20999998,21 9.99999996,19.21 9.99999996,17 C9.99999996,15.34 8.65999999,14 6.99999996,14 Z M20.71,4.62999997 L19.37,3.28999996 C18.98,2.89999996 18.35,2.89999996 17.96,3.28999996 L8.99999999,12.25 L11.75,15 L20.71,6.03999998 C21.1,5.64999997 21.1,5.01999997 20.71,4.62999997 Z',
      id: 'ImageBrushIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'brush',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBrushIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBrushIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBrushIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageBrushIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
