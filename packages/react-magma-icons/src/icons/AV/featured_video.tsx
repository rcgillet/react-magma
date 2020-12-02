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
  title: ['featured_video'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M11,12 L3.99999996,12 C3.44999996,12 2.99999996,11.55 2.99999996,11 L2.99999996,5.99999997 C2.99999996,5.44999997 3.44999996,4.99999997 3.99999996,4.99999997 L11,4.99999997 C11.55,4.99999997 12,5.44999997 12,5.99999997 L12,11 C12,11.55 11.55,12 11,12 Z',
      id: 'AVFeaturedVideoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'featured_video',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVFeaturedVideoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVFeaturedVideoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVFeaturedVideoIcon-path-1',
        },
      ],
    },
  ],
};

export const AVFeaturedVideoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
