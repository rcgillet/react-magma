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
  title: ['chevron_right'],
  paths: [
    {
      d:
        'M9.28999999,6.70999998 C8.89999999,7.09999998 8.89999999,7.72999998 9.28999999,8.11999998 L13.17,12 L9.28999999,15.88 C8.89999999,16.27 8.89999999,16.9 9.28999999,17.29 C9.67999999,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.69999998 C10.32,6.31999998 9.67999999,6.31999998 9.28999999,6.70999998 Z',
      id: 'NavigationChevronRightIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'chevron_right',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationChevronRightIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationChevronRightIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationChevronRightIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationChevronRightIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
