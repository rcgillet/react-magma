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
  title: ['perm_phone_msg'],
  paths: [
    {
      d:
        'M20,2.99999996 L13,2.99999996 C12.45,2.99999996 12,3.44999996 12,3.99999996 L12,13 L15,9.99999996 L20,9.99999996 C20.55,9.99999996 21,9.54999999 21,8.99999996 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 Z M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.05999998,13.63 6.61999998,10.79 L8.46999999,8.93999999 C8.89999999,8.50999996 9.10999999,7.90999998 9.03999999,7.29999998 L8.74999999,4.77999997 C8.62999999,3.76999997 7.77999998,3.00999996 6.75999998,3.00999996 L5.02999997,3.00999996 C3.89999997,3.00999996 2.95999996,3.94999997 3.02999996,5.07999997 C3.55999996,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.9900976,20.1 20.9900976,18.97 L20.9900976,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z',
      id: 'ActionsPermPhoneMsgIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_phone_msg',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermPhoneMsgIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermPhoneMsgIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermPhoneMsgIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermPhoneMsgIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
