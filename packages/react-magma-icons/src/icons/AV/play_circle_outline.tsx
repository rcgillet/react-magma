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
  title: ['play_circle_outline'],
  paths: [
    {
      d:
        'M10.8,15.9 L15.47,12.4 C15.74,12.2 15.74,11.8 15.47,11.6 L10.8,8.09999998 C10.47,7.84999998 9.99999999,8.08999998 9.99999999,8.49999999 L9.99999999,15.5 C9.99999999,15.91 10.47,16.15 10.8,15.9 Z M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 Z',
      id: 'AVPlayCircleOutlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'play_circle_outline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVPlayCircleOutlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVPlayCircleOutlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVPlayCircleOutlineIcon-path-1',
        },
      ],
    },
  ],
};

export const AVPlayCircleOutlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
