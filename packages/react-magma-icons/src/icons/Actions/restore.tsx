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
  title: ['restore'],
  paths: [
    {
      d:
        'M13.25,2.99999996 C8.15999998,2.85999996 3.98999997,6.93999998 3.98999997,12 L2.19999996,12 C1.74999996,12 1.52999996,12.54 1.84999996,12.85 L4.63999997,15.65 C4.83999997,15.85 5.14999997,15.85 5.34999997,15.65 L8.13999998,12.85 C8.45999999,12.54 8.22999998,12 7.78999998,12 L5.98999997,12 C5.98999997,8.09999998 9.16999999,4.94999997 13.09,4.99999997 C16.81,5.04999997 19.94,8.17999998 19.99,11.9 C20.04,15.81 16.89,19 12.99,19 C11.38,19 9.88999999,18.45 8.70999999,17.52 C8.30999998,17.21 7.74999998,17.24 7.38999998,17.6 C6.96999998,18.03 6.99999998,18.73 7.46999998,19.1 C8.98999999,20.29 10.91,21 12.99,21 C18.04,21 22.13,16.83 21.99,11.74 C21.86,7.04999998 17.94,3.12999996 13.25,2.99999996 L13.25,2.99999996 Z M12.74,7.99999998 C12.33,7.99999998 11.99,8.33999998 11.99,8.74999999 L11.99,12.43 C11.99,12.78 12.18,13.11 12.48,13.29 L15.6,15.14 C15.96,15.35 16.42,15.23 16.63,14.88 C16.84,14.52 16.72,14.06 16.37,13.85 L13.49,12.14 L13.49,8.73999999 C13.49,8.33999998 13.16,7.99999998 12.74,7.99999998 L12.74,7.99999998 Z',
      id: 'ActionsRestoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'restore',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsRestoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsRestoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsRestoreIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsRestoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
