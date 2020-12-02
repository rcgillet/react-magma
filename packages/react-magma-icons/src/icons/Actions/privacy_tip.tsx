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
  title: ['privacy_tip'],
  paths: [
    {
      d:
        'M4.18999997,4.46999997 C3.46999996,4.78999997 2.99999996,5.50999997 2.99999996,6.29999998 L2.99999996,11 C2.99999996,16.55 6.83999998,21.74 12,23 C17.16,21.74 21,16.55 21,11 L21,6.29999998 C21,5.50999997 20.53,4.78999997 19.81,4.46999997 L12.81,1.35999996 C12.29,1.12999995 11.7,1.12999995 11.19,1.35999996 L4.18999997,4.46999997 Z M12,6.99999998 L12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 L13,7.99999998 C13,8.54999999 12.55,8.99999998 12,8.99999998 L12,8.99999998 C11.45,8.99999998 11,8.54999999 11,7.99999998 L11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 Z M12,11 L12,11 C12.55,11 13,11.45 13,12 L13,16 C13,16.55 12.55,17 12,17 L12,17 C11.45,17 11,16.55 11,16 L11,12 C11,11.45 11.45,11 12,11 Z',
      id: 'ActionsPrivacyTipIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'privacy_tip',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPrivacyTipIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPrivacyTipIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPrivacyTipIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPrivacyTipIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
