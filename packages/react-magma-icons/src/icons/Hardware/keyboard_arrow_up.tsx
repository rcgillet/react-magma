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
  title: ['keyboard_arrow_up'],
  paths: [
    {
      d:
        'M8.11999998,14.71 L12,10.83 L15.88,14.71 C16.27,15.1 16.9,15.1 17.29,14.71 C17.68,14.32 17.68,13.69 17.29,13.3 L12.7,8.70999999 C12.31,8.31999998 11.68,8.31999998 11.29,8.70999999 L6.69999998,13.3 C6.30999998,13.69 6.30999998,14.32 6.69999998,14.71 C7.08999998,15.09 7.72999998,15.1 8.11999998,14.71 Z',
      id: 'HardwareKeyboardArrowUpIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'keyboard_arrow_up',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareKeyboardArrowUpIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareKeyboardArrowUpIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareKeyboardArrowUpIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareKeyboardArrowUpIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
