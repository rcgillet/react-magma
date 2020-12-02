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
  title: ['network_locked'],
  paths: [
    {
      d:
        'M19.5,13 C20.88,13 22,14.12 22,15.5 L22,15.5 L22,16 C22.55,16 23,16.45 23,17 L23,17 L23,21 C23,21.55 22.55,22 22,22 L22,22 L17,22 C16.45,22 16,21.55 16,21 L16,21 L16,17 C16,16.45 16.45,16 17,16 L17,16 L17,15.5 C17,14.12 18.12,13 19.5,13 Z M18.29,2.69999996 C18.92,2.06999996 20,2.51999996 20,3.40999996 L20,3.40999996 L20,11.05 C19.83,11.03 19.67,11 19.5,11 C17.29,11 15.45,12.6 15.07,14.7 C14.42,15.26 14,16.08 14,17 L14,17 L14,20 L3.40999996,20 C2.51999996,20 2.07999996,18.92 2.70999996,18.29 L2.70999996,18.29 Z M19.5,14 C18.67,14 18,14.67 18,15.5 L18,15.5 L18,16 L21,16 L21,15.5 C21,14.67 20.33,14 19.5,14 Z',
      id: 'NotificationsNetworkLockedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'network_locked',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsNetworkLockedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsNetworkLockedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsNetworkLockedIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsNetworkLockedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
