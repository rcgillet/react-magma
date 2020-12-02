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
  title: ['vpn_key'],
  paths: [
    {
      d:
        'M12.65,9.99999999 C11.7,7.30999998 8.89999999,5.49999997 5.76999997,6.11999998 C3.47999996,6.57999998 1.61999996,8.40999999 1.13999995,10.7 C0.319999951,14.57 3.25999996,18 6.99999998,18 C9.60999999,18 11.83,16.33 12.65,14 L17,14 L17,16 C17,17.1 17.9,18 19,18 C20.1,18 21,17.1 21,16 L21,14 C22.1,14 23,13.1 23,12 C23,10.9 22.1,9.99999999 21,9.99999999 L12.65,9.99999999 Z M6.99999997,14 C5.89999997,14 4.99999997,13.1 4.99999997,12 C4.99999997,10.9 5.89999997,9.99999999 6.99999997,9.99999999 C8.09999998,9.99999999 8.99999997,10.9 8.99999997,12 C8.99999997,13.1 8.09999998,14 6.99999997,14 Z',
      id: 'CommunicationVpnKeyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'vpn_key',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationVpnKeyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationVpnKeyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationVpnKeyIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationVpnKeyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
