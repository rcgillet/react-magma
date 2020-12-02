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
  title: ['upgrade'],
  paths: [
    {
      d:
        'M16,19 L16,19 C16,19.55 15.55,20 15,20 L8.99999998,20 C8.44999999,20 7.99999998,19.55 7.99999998,19 L7.99999998,19 C7.99999998,18.45 8.44999999,18 8.99999998,18 L15,18 C15.55,18 16,18.45 16,19 Z M11,7.98999998 L11,15 C11,15.55 11.45,16 12,16 L12,16 C12.55,16 13,15.55 13,15 L13,7.98999998 L14.79,7.98999998 C15.24,7.98999998 15.46,7.44999998 15.14,7.13999998 L12.35,4.35999997 C12.15,4.16999997 11.84,4.16999997 11.64,4.35999997 L8.85999999,7.13999998 C8.53999999,7.44999998 8.75999999,7.98999998 9.20999999,7.98999998 L11,7.98999998 Z',
      id: 'ActionsUpgradeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'upgrade',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsUpgradeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsUpgradeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsUpgradeIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsUpgradeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
