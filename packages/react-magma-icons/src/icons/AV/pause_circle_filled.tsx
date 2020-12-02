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
  title: ['pause_circle_filled'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M9.99999999,16 C9.44999999,16 8.99999999,15.55 8.99999999,15 L8.99999999,8.99999998 C8.99999999,8.44999999 9.44999999,7.99999998 9.99999999,7.99999998 C10.55,7.99999998 11,8.44999999 11,8.99999998 L11,15 C11,15.55 10.55,16 9.99999999,16 Z M14,16 C13.45,16 13,15.55 13,15 L13,8.99999998 C13,8.44999999 13.45,7.99999998 14,7.99999998 C14.55,7.99999998 15,8.44999999 15,8.99999998 L15,15 C15,15.55 14.55,16 14,16 Z',
      id: 'AVPauseCircleFilledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pause_circle_filled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPauseCircleFilledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPauseCircleFilledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPauseCircleFilledIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPauseCircleFilledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
