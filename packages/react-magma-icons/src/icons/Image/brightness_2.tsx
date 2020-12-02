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
  title: ['brightness_2'],
  paths: [
    {
      d:
        'M12.43,2.29999996 C10.05,1.70999996 7.74999998,2.02999996 5.79999997,2.93999996 C5.44999997,3.09999996 5.38999997,3.57999996 5.69999997,3.79999997 C8.29999998,5.59999997 9.99999999,8.59999999 9.99999999,12 C9.99999999,15.4 8.29999998,18.4 5.69999997,20.2 C5.37999997,20.42 5.43999997,20.9 5.78999997,21.06 C7.06999998,21.66 8.49999999,22 9.99999999,22 C16.05,22 20.85,16.62 19.87,10.4 C19.26,6.47999998 16.28,3.23999996 12.43,2.29999996 L12.43,2.29999996 Z',
      id: 'ImageBrightness2Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'brightness_2',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBrightness2Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBrightness2Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBrightness2Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageBrightness2Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
