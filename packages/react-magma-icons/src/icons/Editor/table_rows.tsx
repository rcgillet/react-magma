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
  title: ['table_rows'],
  paths: [
    {
      d:
        'M20,6.99999996 L3.99999996,6.99999996 C2.89999996,6.99999996 1.99999996,6.09999998 1.99999996,4.99999996 L1.99999996,3.99999996 C1.99999996,2.89999996 2.89999996,1.99999996 3.99999996,1.99999996 L20,1.99999996 C21.1,1.99999996 22,2.89999996 22,3.99999996 L22,4.99999996 C22,6.09999998 21.1,6.99999996 20,6.99999996 Z M20,9.49999999 L3.99999996,9.49999999 C2.89999996,9.49999999 1.99999996,10.4 1.99999996,11.5 L1.99999996,12.5 C1.99999996,13.6 2.89999996,14.5 3.99999996,14.5 L20,14.5 C21.1,14.5 22,13.6 22,12.5 L22,11.5 C22,10.4 21.1,9.49999999 20,9.49999999 Z M20,17 L3.99999996,17 C2.89999996,17 1.99999996,17.9 1.99999996,19 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,19 C22,17.9 21.1,17 20,17 Z',
      id: 'EditorTableRowsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'table_rows',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorTableRowsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorTableRowsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorTableRowsIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorTableRowsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
