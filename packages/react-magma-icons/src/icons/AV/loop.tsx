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
  title: ['loop'],
  paths: [
    {
      d:
        'M12,3.99999997 L12,2.20999996 C12,1.75999996 11.46,1.53999996 11.15,1.85999996 L8.34999998,4.64999997 C8.14999998,4.84999997 8.14999998,5.15999997 8.34999998,5.35999997 L11.14,8.14999998 C11.46,8.45999999 12,8.23999998 12,7.78999998 L12,5.99999997 C15.31,5.99999997 18,8.68999999 18,12 C18,12.79 17.85,13.56 17.56,14.25 C17.41,14.61 17.52,15.02 17.79,15.29 C18.3,15.8 19.16,15.62 19.43,14.95 C19.8,14.04 20,13.04 20,12 C20,7.57999998 16.42,3.99999997 12,3.99999997 Z M12,18 C8.68999999,18 5.99999997,15.31 5.99999997,12 C5.99999997,11.21 6.14999998,10.44 6.43999998,9.74999999 C6.58999998,9.38999999 6.47999998,8.97999999 6.20999998,8.70999999 C5.69999997,8.19999998 4.83999997,8.37999998 4.56999997,9.04999999 C4.19999997,9.95999999 3.99999997,10.96 3.99999997,12 C3.99999997,16.42 7.57999998,20 12,20 L12,21.79 C12,22.24 12.54,22.46 12.85,22.14 L15.64,19.35 C15.84,19.15 15.84,18.84 15.64,18.64 L12.85,15.85 C12.54,15.54 12,15.76 12,16.21 L12,18 Z',
      id: 'AVLoopIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'loop',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVLoopIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVLoopIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVLoopIcon-path-1',
        },
      ],
    },
  ],
};

export const AVLoopIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
