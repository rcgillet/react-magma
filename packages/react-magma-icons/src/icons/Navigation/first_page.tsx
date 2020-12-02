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
  title: ['first_page'],
  paths: [
    {
      d:
        'M17.7,15.89 L13.82,12 L17.71,8.10999998 C18.1,7.71999998 18.1,7.08999998 17.71,6.69999998 C17.32,6.30999998 16.69,6.30999998 16.3,6.69999998 L11.71,11.29 C11.32,11.68 11.32,12.31 11.71,12.7 L16.3,17.29 C16.69,17.68 17.32,17.68 17.71,17.29 C18.09,16.91 18.09,16.27 17.7,15.89 L17.7,15.89 Z M6.99999998,5.99999998 C7.54999998,5.99999998 7.99999998,6.44999998 7.99999998,6.99999998 L7.99999998,17 C7.99999998,17.55 7.54999998,18 6.99999998,18 C6.44999998,18 5.99999998,17.55 5.99999998,17 L5.99999998,6.99999998 C5.99999998,6.44999998 6.44999998,5.99999998 6.99999998,5.99999998 Z',
      id: 'NavigationFirstPageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'first_page',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationFirstPageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationFirstPageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationFirstPageIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationFirstPageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
