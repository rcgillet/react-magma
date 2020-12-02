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
  title: ['skip_next'],
  paths: [
    {
      d:
        'M7.57999998,16.89 L13.35,12.82 C13.91,12.42 13.91,11.58 13.35,11.19 L7.57999998,7.10999998 C6.90999998,6.64999998 5.99999998,7.11999998 5.99999998,7.92999998 L5.99999998,16.07 C5.99999998,16.88 6.90999998,17.35 7.57999998,16.89 Z M16,6.99999998 L16,17 C16,17.55 16.45,18 17,18 C17.55,18 18,17.55 18,17 L18,6.99999998 C18,6.44999998 17.55,5.99999998 17,5.99999998 C16.45,5.99999998 16,6.44999998 16,6.99999998 Z',
      id: 'AVSkipNextIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'skip_next',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVSkipNextIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVSkipNextIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVSkipNextIcon-path-1',
        },
      ],
    },
  ],
};

export const AVSkipNextIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
