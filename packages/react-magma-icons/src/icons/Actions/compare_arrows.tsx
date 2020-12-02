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
  title: ['compare_arrows'],
  paths: [
    {
      d:
        'M9.00999999,14 L2.99999996,14 C2.44999996,14 1.99999996,14.45 1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 L9.00999999,16 L9.00999999,17.79 C9.00999999,18.24 9.54999999,18.46 9.85999999,18.14 L12.64,15.35 C12.83,15.15 12.83,14.84 12.64,14.64 L9.85999999,11.85 C9.54999999,11.53 9.00999999,11.76 9.00999999,12.2 L9.00999999,14 Z M14.99,11.79 L14.99,9.99999999 L21,9.99999999 C21.55,9.99999999 22,9.54999999 22,8.99999999 C22,8.44999999 21.55,7.99999998 21,7.99999998 L14.99,7.99999998 L14.99,6.20999998 C14.99,5.75999997 14.45,5.53999997 14.14,5.85999997 L11.36,8.64999999 C11.17,8.84999999 11.17,9.15999999 11.36,9.35999999 L14.14,12.15 C14.45,12.46 14.99,12.24 14.99,11.79 Z',
      id: 'ActionsCompareArrowsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'compare_arrows',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCompareArrowsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCompareArrowsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCompareArrowsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCompareArrowsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
