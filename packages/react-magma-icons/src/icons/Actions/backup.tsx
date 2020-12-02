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
  title: ['backup'],
  paths: [
    {
      d:
        'M19.35,10.04 C18.67,6.58999998 15.64,3.99999997 12,3.99999997 C9.10999999,3.99999997 6.59999998,5.63999997 5.34999997,8.03999998 C2.33999996,8.35999998 -4.99999473e-08,10.91 -4.99999473e-08,14 C-4.99999473e-08,17.31 2.68999996,20 5.99999995,20 L19,20 C21.76,20 24,17.76 24,15 C24,12.36 21.95,10.22 19.35,10.04 Z M14,13 L14,17 L9.99999998,17 L9.99999998,13 L6.99999998,13 L11.65,8.34999998 C11.85,8.14999998 12.16,8.14999998 12.36,8.34999998 L17,13 L14,13 Z',
      id: 'ActionsBackupIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'backup',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBackupIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBackupIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBackupIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBackupIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
