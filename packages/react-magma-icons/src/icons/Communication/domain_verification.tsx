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
  title: ['domain_verification'],
  paths: [
    {
      d:
        'M19,3.99999997 C20.11,3.99999997 21,4.89999997 21,5.99999997 L21,5.99999997 L21,18 C21,19.1 20.1,20 19,20 L19,20 L4.99999996,20 C3.88999997,20 2.99999996,19.1 2.99999996,18 L2.99999996,18 L2.99999996,5.99999997 C2.99999996,4.89999997 3.88999997,3.99999997 4.99999996,3.99999997 L4.99999996,3.99999997 Z M19,7.99999998 L4.99999997,7.99999998 L4.99999997,17 C4.99999997,17.55 5.44999997,18 5.99999997,18 L5.99999997,18 L18,18 C18.55,18 19,17.55 19,17 L19,17 L19,7.99999998 Z M14.47,10.17 C14.86,9.77999999 15.49,9.77999999 15.88,10.17 L15.88,10.17 L15.9630769,10.2661766 C16.2676923,10.665503 16.24,11.23 15.88,11.59 L15.88,11.59 L11.64,15.83 C11.25,16.22 10.62,16.22 10.23,15.83 L10.23,15.83 L8.09999998,13.7 C7.70999998,13.31 7.69999998,12.68 8.09999998,12.29 C8.49999999,11.9 9.12999999,11.9 9.51999999,12.29 L9.51999999,12.29 L10.93,13.7 Z',
      id: 'CommunicationDomainVerificationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'domain_verification',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationDomainVerificationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationDomainVerificationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationDomainVerificationIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationDomainVerificationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
