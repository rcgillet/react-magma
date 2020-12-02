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
  title: ['backup_table'],
  paths: [
    {
      d:
        'M21,5.99999997 L21.116199,6.00676018 C21.6119898,6.06479589 22,6.48928569 22,6.99999997 L22,6.99999997 L22,20 C22,21.1 21.1,22 20,22 L20,22 L6.99999997,22 C6.44999998,22 5.99999997,21.55 5.99999997,21 L5.99999997,21 L6.00676018,20.883801 C6.06479589,20.3880102 6.48928569,20 6.99999997,20 L6.99999997,20 L19,20 C19.55,20 20,19.55 20,19 L20,19 L20,6.99999997 C20,6.44999998 20.45,5.99999997 21,5.99999997 L21,5.99999997 Z M16,1.99999996 C17.1,1.99999996 18,2.89999996 18,3.99999996 L18,3.99999996 L18,16 C18,17.1 17.1,18 16,18 L16,18 L3.99999996,18 C2.89999996,18 1.99999996,17.1 1.99999996,16 L1.99999996,16 L1.99999996,3.99999996 C1.99999996,2.89999996 2.89999996,1.99999996 3.99999996,1.99999996 L3.99999996,1.99999996 Z M8.99999997,11 L3.99999997,11 L3.99999997,16 L8.99999997,16 L8.99999997,11 Z M16,11 L11,11 L11,16 L16,16 L16,11 Z M16,3.99999997 L3.99999997,3.99999997 L3.99999997,8.99999997 L16,8.99999997 L16,3.99999997 Z',
      id: 'ActionsBackupTableIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'backup_table',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBackupTableIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBackupTableIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBackupTableIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBackupTableIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
