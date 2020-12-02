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
  title: ['expand_more'],
  paths: [
    {
      d:
        'M15.88,9.28999999 L12,13.17 L8.11999998,9.28999999 C7.72999998,8.89999999 7.09999998,8.89999999 6.70999998,9.28999999 C6.31999998,9.67999999 6.31999998,10.31 6.70999998,10.7 L11.3,15.29 C11.69,15.68 12.32,15.68 12.71,15.29 L17.3,10.7 C17.69,10.31 17.69,9.67999999 17.3,9.28999999 C16.91,8.90999999 16.27,8.89999999 15.88,9.28999999 L15.88,9.28999999 Z',
      id: 'NavigationExpandMoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'expand_more',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationExpandMoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationExpandMoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationExpandMoreIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationExpandMoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
