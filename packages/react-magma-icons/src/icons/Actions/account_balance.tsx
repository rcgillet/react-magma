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
  title: ['account_balance'],
  paths: [
    {
      d:
        'M3.99999997,11.5 L3.99999997,15.5 C3.99999997,16.33 4.66999997,17 5.49999997,17 C6.32999998,17 6.99999997,16.33 6.99999997,15.5 L6.99999997,11.5 C6.99999997,10.67 6.32999998,9.99999999 5.49999997,9.99999999 C4.66999997,9.99999999 3.99999997,10.67 3.99999997,11.5 Z M9.99999999,11.5 L9.99999999,15.5 C9.99999999,16.33 10.67,17 11.5,17 C12.33,17 13,16.33 13,15.5 L13,11.5 C13,10.67 12.33,9.99999999 11.5,9.99999999 C10.67,9.99999999 9.99999999,10.67 9.99999999,11.5 Z M3.49999996,22 L19.5,22 C20.33,22 21,21.33 21,20.5 C21,19.67 20.33,19 19.5,19 L3.49999996,19 C2.66999996,19 1.99999996,19.67 1.99999996,20.5 C1.99999996,21.33 2.66999996,22 3.49999996,22 Z M16,11.5 L16,15.5 C16,16.33 16.67,17 17.5,17 C18.33,17 19,16.33 19,15.5 L19,11.5 C19,10.67 18.33,9.99999999 17.5,9.99999999 C16.67,9.99999999 16,10.67 16,11.5 Z M10.57,1.48999996 L2.66999996,5.64999997 C2.25999996,5.85999997 1.99999996,6.28999998 1.99999996,6.74999998 C1.99999996,7.43999998 2.55999996,7.99999998 3.24999996,7.99999998 L19.76,7.99999998 C20.44,7.99999998 21,7.43999998 21,6.74999998 C21,6.28999998 20.74,5.85999997 20.33,5.64999997 L12.43,1.48999996 C11.85,1.17999995 11.15,1.17999995 10.57,1.48999996 Z',
      id: 'ActionsAccountBalanceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'account_balance',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAccountBalanceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAccountBalanceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAccountBalanceIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAccountBalanceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
