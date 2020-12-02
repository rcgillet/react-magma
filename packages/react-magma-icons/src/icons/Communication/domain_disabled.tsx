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
  title: ['domain_disabled'],
  paths: [
    {
      d:
        'M0.709999953,2.38999996 C0.319999951,2.77999996 0.319999951,3.40999996 0.709999953,3.79999997 L1.99999996,5.09999997 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999997,21 L17.9,21 L20.19,23.29 C20.58,23.68 21.21,23.68 21.6,23.29 C21.99,22.9 21.99,22.27 21.6,21.88 L2.11999996,2.38999996 C1.72999996,1.99999996 1.09999995,1.99999996 0.709999953,2.38999996 Z M5.99999997,19 L3.99999997,19 L3.99999997,17 L5.99999997,17 L5.99999997,19 Z M5.99999997,15 L3.99999997,15 L3.99999997,13 L5.99999997,13 L5.99999997,15 Z M3.99999997,11 L3.99999997,8.99999999 L5.99999997,8.99999999 L5.99999997,11 L3.99999997,11 Z M9.99999998,19 L7.99999998,19 L7.99999998,17 L9.99999998,17 L9.99999998,19 Z M7.99999998,15 L7.99999998,13 L9.99999998,13 L9.99999998,15 L7.99999998,15 Z M12,19 L12,17 L13.9,17 L15.9,19 L12,19 Z M7.99999998,4.99999996 L9.99999999,4.99999996 L9.99999999,6.99999996 L9.54999997,6.99999996 L12,9.44999999 L12,8.99999996 L19,8.99999996 C19.55,8.99999996 20,9.44999999 20,9.99999996 L20,17.45 L22,19.45 L22,8.99999996 C22,7.89999998 21.1,6.99999996 20,6.99999996 L12,6.99999996 L12,4.99999996 C12,3.89999997 11.1,2.99999996 9.99999999,2.99999996 L5.54999997,2.99999996 L7.99999998,5.44999997 L7.99999998,4.99999996 Z M16,11 L18,11 L18,13 L16,13 L16,11 Z',
      id: 'CommunicationDomainDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'domain_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationDomainDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationDomainDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationDomainDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationDomainDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
