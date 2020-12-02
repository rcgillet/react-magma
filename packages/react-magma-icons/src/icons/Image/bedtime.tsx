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
  title: ['bedtime'],
  paths: [
    {
      d:
        'M11.97,2.72999996 C12.13,2.38999996 11.85,2.00999996 11.47,2.02999996 C5.46999997,2.32999996 0.999999954,7.85999998 2.18999996,13.99 C2.96999996,18.02 6.27999998,21.21 10.33,21.86 C14.4,22.52 18.1,20.72 20.2,17.71 C20.41,17.4 20.24,16.96 19.87,16.92 C13.13,16.16 8.99999999,8.95999999 11.97,2.72999996 Z',
      id: 'ImageBedtimeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bedtime',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBedtimeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBedtimeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBedtimeIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageBedtimeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
