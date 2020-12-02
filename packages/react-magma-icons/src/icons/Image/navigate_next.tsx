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
  title: ['navigate_next'],
  paths: [
    {
      d:
        'M9.30999999,6.70999998 C8.91999999,7.09999998 8.91999999,7.72999998 9.30999999,8.11999998 L13.19,12 L9.30999999,15.88 C8.91999999,16.27 8.91999999,16.9 9.30999999,17.29 C9.69999999,17.68 10.33,17.68 10.72,17.29 L15.31,12.7 C15.7,12.31 15.7,11.68 15.31,11.29 L10.72,6.69999998 C10.34,6.31999998 9.69999999,6.31999998 9.30999999,6.70999998 Z',
      id: 'ImageNavigateNextIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'navigate_next',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageNavigateNextIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageNavigateNextIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageNavigateNextIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageNavigateNextIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
