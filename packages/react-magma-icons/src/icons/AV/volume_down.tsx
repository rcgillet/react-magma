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
  title: ['volume_down'],
  paths: [
    {
      d:
        'M18.5,12 C18.5,10.23 17.48,8.70999999 16,7.96999998 L16,16.02 C17.48,15.29 18.5,13.77 18.5,12 Z M4.99999997,9.99999999 L4.99999997,14 C4.99999997,14.55 5.44999997,15 5.99999997,15 L8.99999997,15 L12.29,18.29 C12.92,18.92 14,18.47 14,17.58 L14,6.40999998 C14,5.51999997 12.92,5.06999997 12.29,5.69999997 L8.99999997,8.99999999 L5.99999997,8.99999999 C5.44999997,8.99999999 4.99999997,9.44999999 4.99999997,9.99999999 Z',
      id: 'AVVolumeDownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'volume_down',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVVolumeDownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVVolumeDownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVVolumeDownIcon-path-1',
        },
      ],
    },
  ],
};

export const AVVolumeDownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
