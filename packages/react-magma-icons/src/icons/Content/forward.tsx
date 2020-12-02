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
  title: ['forward'],
  paths: [
    {
      d:
        'M12,7.99999998 L12,6.40999998 C12,5.51999997 13.08,5.06999997 13.71,5.69999997 L19.3,11.29 C19.69,11.68 19.69,12.31 19.3,12.7 L13.71,18.29 C13.08,18.92 12,18.48 12,17.59 L12,16 L4.99999997,16 C4.44999997,16 3.99999997,15.55 3.99999997,15 L3.99999997,8.99999999 C3.99999997,8.44999999 4.44999997,7.99999998 4.99999997,7.99999998 L12,7.99999998 Z',
      id: 'ContentForwardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'forward',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentForwardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentForwardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentForwardIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentForwardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
