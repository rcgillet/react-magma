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
  title: ['cancel'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.46999998,1.99999996 1.99999996,6.46999998 1.99999996,12 C1.99999996,17.53 6.46999998,22 12,22 C17.53,22 22,17.53 22,12 C22,6.46999998 17.53,1.99999996 12,1.99999996 Z M16.3,16.3 C15.91,16.69 15.28,16.69 14.89,16.3 L12,13.41 L9.10999999,16.3 C8.71999999,16.69 8.08999998,16.69 7.69999998,16.3 C7.30999998,15.91 7.30999998,15.28 7.69999998,14.89 L10.59,12 L7.69999998,9.10999999 C7.30999998,8.71999999 7.30999998,8.08999998 7.69999998,7.69999998 C8.08999998,7.30999998 8.71999999,7.30999998 9.10999999,7.69999998 L12,10.59 L14.89,7.69999998 C15.28,7.30999998 15.91,7.30999998 16.3,7.69999998 C16.69,8.08999998 16.69,8.71999999 16.3,9.10999999 L13.41,12 L16.3,14.89 C16.68,15.27 16.68,15.91 16.3,16.3 Z',
      id: 'NavigationCancelIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'cancel',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationCancelIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationCancelIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationCancelIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationCancelIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
