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
  title: ['music_video'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19 L3.99999996,19 C3.44999996,19 2.99999996,18.55 2.99999996,18 L2.99999996,5.99999997 C2.99999996,5.44999997 3.44999996,4.99999997 3.99999996,4.99999997 L20,4.99999997 C20.55,4.99999997 21,5.44999997 21,5.99999997 L21,18 C21,18.55 20.55,19 20,19 Z M8.04999998,15.54 C7.71999998,13.64 9.15999999,12 11,12 C11.35,12 11.69,12.07 12,12.18 L12,7.99999997 C12,6.89999998 12.9,5.99999997 14,5.99999997 L16,5.99999997 C16.55,5.99999997 17,6.44999998 17,6.99999997 C17,7.54999998 16.55,7.99999997 16,7.99999997 L14,7.99999997 L14,15.03 C13.98,16.85 12.34,18.29 10.45,17.95 C9.23999999,17.74 8.24999998,16.75 8.04999998,15.54 L8.04999998,15.54 Z',
      id: 'AVMusicVideoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'music_video',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVMusicVideoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVMusicVideoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVMusicVideoIcon-path-1',
        },
      ],
    },
  ],
};

export const AVMusicVideoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
