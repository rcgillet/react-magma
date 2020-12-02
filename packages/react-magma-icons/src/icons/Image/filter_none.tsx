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
  title: ['filter_none'],
  paths: [
    {
      d:
        'M1.99999995,4.99999997 C1.44999996,4.99999997 0.999999954,5.44999997 0.999999954,5.99999997 L0.999999954,21 C0.999999954,22.1 1.89999996,23 2.99999995,23 L18,23 C18.55,23 19,22.55 19,22 C19,21.45 18.55,21 18,21 L3.99999995,21 C3.44999996,21 2.99999995,20.55 2.99999995,20 L2.99999995,5.99999997 C2.99999995,5.44999997 2.54999996,4.99999997 1.99999995,4.99999997 Z M21,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,17 C4.99999997,18.1 5.89999997,19 6.99999997,19 L21,19 C22.1,19 23,18.1 23,17 L23,2.99999995 C23,1.89999996 22.1,0.999999954 21,0.999999954 Z M20,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 L6.99999998,3.99999996 C6.99999998,3.44999996 7.44999998,2.99999996 7.99999998,2.99999996 L20,2.99999996 C20.55,2.99999996 21,3.44999996 21,3.99999996 L21,16 C21,16.55 20.55,17 20,17 Z',
      id: 'ImageFilterNoneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'filter_none',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageFilterNoneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageFilterNoneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageFilterNoneIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageFilterNoneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
