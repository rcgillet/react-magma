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
  title: ['vignette'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M12,18 C7.57999998,18 3.99999997,15.31 3.99999997,12 C3.99999997,8.68999999 7.57999998,5.99999998 12,5.99999998 C16.42,5.99999998 20,8.68999999 20,12 C20,15.31 16.42,18 12,18 Z',
      id: 'ImageVignetteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'vignette',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageVignetteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageVignetteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageVignetteIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageVignetteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
