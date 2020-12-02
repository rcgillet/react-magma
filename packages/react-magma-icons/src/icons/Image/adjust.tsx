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
  title: ['adjust'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.48999998,1.99999996 1.99999996,6.48999998 1.99999996,12 C1.99999996,17.51 6.48999998,22 12,22 C17.51,22 22,17.51 22,12 C22,6.48999998 17.51,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 Z M15,12 C15,13.66 13.66,15 12,15 C10.34,15 8.99999999,13.66 8.99999999,12 C8.99999999,10.34 10.34,8.99999999 12,8.99999999 C13.66,8.99999999 15,10.34 15,12 Z',
      id: 'ImageAdjustIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'adjust',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageAdjustIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageAdjustIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageAdjustIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageAdjustIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
