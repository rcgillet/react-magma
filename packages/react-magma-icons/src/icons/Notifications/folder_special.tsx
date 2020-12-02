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
  title: ['folder_special'],
  paths: [
    {
      d:
        'M20,5.99999997 L12,5.99999997 L10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M16.94,16.41 L15,15.28 L13.06,16.41 C12.68,16.63 12.22,16.29 12.32,15.86 L12.83,13.66 L11.14,12.2 C10.81,11.91 10.98,11.36 11.42,11.32 L13.65,11.13 L14.53,9.06999999 C14.7,8.66999999 15.28,8.66999999 15.45,9.06999999 L16.33,11.13 L18.56,11.32 C19,11.36 19.18,11.91 18.84,12.2 L17.15,13.66 L17.66,15.86 C17.77,16.29 17.31,16.63 16.94,16.41 L16.94,16.41 Z',
      id: 'NotificationsFolderSpecialIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'folder_special',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsFolderSpecialIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsFolderSpecialIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsFolderSpecialIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsFolderSpecialIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
