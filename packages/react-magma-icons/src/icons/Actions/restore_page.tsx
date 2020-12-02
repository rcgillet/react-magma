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
  title: ['restore_page'],
  paths: [
    {
      d:
        'M19.41,7.40999998 L14.58,2.57999996 C14.21,2.20999996 13.7,1.99999996 13.17,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 4.00999997,2.89999996 4.00999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.88999997,22 5.98999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,8.82999999 C20,8.29999998 19.79,7.78999998 19.41,7.40999998 Z M12,18 C10.35,18 8.80999999,17.19 7.87999998,15.83 C7.64999998,15.49 7.72999998,15.02 8.06999998,14.79 C8.40999999,14.55 8.87999999,14.64 9.10999999,14.98 C9.75999999,15.93 10.84,16.5 11.99,16.5 C13.92,16.5 15.49,14.93 15.49,13 C15.49,11.07 13.93,9.49999998 12,9.49999998 C10.67,9.49999998 9.47999999,10.24 8.88999999,11.39 L10.5,13 L6.99999998,13 C6.71999998,13 6.49999998,12.78 6.49999998,12.5 L6.49999998,8.99999998 L7.79999998,10.3 C8.70999999,8.88999999 10.26,7.99999998 12,7.99999998 C14.76,7.99999998 17,10.24 17,13 C17,15.76 14.76,18 12,18 Z',
      id: 'ActionsRestorePageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'restore_page',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsRestorePageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsRestorePageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsRestorePageIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsRestorePageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
