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
  title: ['folder_shared'],
  paths: [
    {
      d:
        'M20,5.99999997 L12,5.99999997 L10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M15,8.99999999 C16.1,8.99999999 17,9.89999999 17,11 C17,12.1 16.1,13 15,13 C13.9,13 13,12.1 13,11 C13,9.89999999 13.9,8.99999999 15,8.99999999 Z M19,17 L11,17 L11,16 C11,14.67 13.67,14 15,14 C16.33,14 19,14.67 19,16 L19,17 Z',
      id: 'FileFolderSharedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'folder_shared',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileFolderSharedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileFolderSharedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileFolderSharedIcon-path-1',
        },
      ],
    },
  ],
};

export const FileFolderSharedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
