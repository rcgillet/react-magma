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
  title: ['burst_mode'],
  paths: [
    {
      d:
        'M1.99999995,4.99999997 C2.54999996,4.99999997 2.99999995,5.44999997 2.99999995,5.99999997 L2.99999995,18 C2.99999995,18.55 2.54999996,19 1.99999995,19 C1.44999996,19 0.999999954,18.55 0.999999954,18 L0.999999954,5.99999997 C0.999999954,5.44999997 1.44999996,4.99999997 1.99999995,4.99999997 Z M5.99999997,4.99999997 C6.54999998,4.99999997 6.99999997,5.44999997 6.99999997,5.99999997 L6.99999997,18 C6.99999997,18.55 6.54999998,19 5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 Z M22,4.99999997 L9.99999999,4.99999997 C9.44999999,4.99999997 8.99999999,5.44999997 8.99999999,5.99999997 L8.99999999,18 C8.99999999,18.55 9.44999999,19 9.99999999,19 L22,19 C22.55,19 23,18.55 23,18 L23,5.99999997 C23,5.44999997 22.55,4.99999997 22,4.99999997 Z M11.64,16.19 L13.11,14.33 C13.31,14.08 13.68,14.08 13.89,14.32 L15.29,16 L17.39,13.29 C17.59,13.03 17.98,13.03 18.18,13.29 L20.39,16.19 C20.64,16.52 20.41,16.99 19.99,16.99 L12.03,16.99 C11.62,17 11.38,16.52 11.64,16.19 Z',
      id: 'ImageBurstModeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'burst_mode',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBurstModeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBurstModeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBurstModeIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageBurstModeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
