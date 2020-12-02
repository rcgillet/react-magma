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
  title: ['skip_previous'],
  paths: [
    {
      d:
        'M6.99999998,5.99999998 C7.54999998,5.99999998 7.99999998,6.44999998 7.99999998,6.99999998 L7.99999998,17 C7.99999998,17.55 7.54999998,18 6.99999998,18 C6.44999998,18 5.99999998,17.55 5.99999998,17 L5.99999998,6.99999998 C5.99999998,6.44999998 6.44999998,5.99999998 6.99999998,5.99999998 Z M10.66,12.82 L16.43,16.89 C17.09,17.36 18.01,16.88 18.01,16.07 L18.01,7.92999998 C18.01,7.11999998 17.1,6.64999998 16.43,7.10999998 L10.66,11.18 C10.09,11.58 10.09,12.42 10.66,12.82 Z',
      id: 'AVSkipPreviousIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'skip_previous',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVSkipPreviousIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVSkipPreviousIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVSkipPreviousIcon-path-1',
        },
      ],
    },
  ],
};

export const AVSkipPreviousIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
