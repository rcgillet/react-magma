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
  title: ['where_to_vote'],
  paths: [
    {
      d:
        'M12,1.99999996 C8.13999998,1.99999996 4.99999997,5.13999997 4.99999997,8.99999996 C4.99999997,13.17 9.41999999,18.92 11.23,21.11 C11.63,21.59 12.36,21.59 12.76,21.11 C14.58,18.92 19,13.17 19,8.99999996 C19,5.13999997 15.86,1.99999996 12,1.99999996 Z M16.31,8.15999998 L11.18,13.29 C10.79,13.68 10.16,13.68 9.76999999,13.29 L7.69999998,11.22 C7.30999998,10.83 7.30999998,10.19 7.69999998,9.79999999 C8.08999998,9.40999999 8.72999999,9.40999999 9.11999999,9.79999999 L10.48,11.16 L14.9,6.73999998 C15.29,6.34999998 15.93,6.34999998 16.32,6.73999998 C16.7,7.13999998 16.7,7.76999998 16.31,8.15999998 Z',
      id: 'ContentWhereToVoteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'where_to_vote',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentWhereToVoteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentWhereToVoteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentWhereToVoteIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentWhereToVoteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
