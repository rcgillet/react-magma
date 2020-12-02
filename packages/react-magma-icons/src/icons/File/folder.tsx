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
  title: ['folder'],
  paths: [
    {
      d:
        'M10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 L12,5.99999997 L10.59,4.58999997 Z',
      id: 'FileFolderIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'folder',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileFolderIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileFolderIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileFolderIcon-path-1',
        },
      ],
    },
  ],
};

export const FileFolderIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
