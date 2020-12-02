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
  title: ['live_help'],
  paths: [
    {
      d:
        'M19,1.99999996 L4.99999996,1.99999996 C3.88999997,1.99999996 2.99999996,2.89999996 2.99999996,3.99999996 L2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L8.99999996,20 L11.29,22.29 C11.68,22.68 12.31,22.68 12.7,22.29 L15,20 L19,20 C20.1,20 21,19.1 21,18 L21,3.99999996 C21,2.89999996 20.1,1.99999996 19,1.99999996 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M15.07,10.25 L14.17,11.17 C13.59,11.76 13.18,12.27 13.05,13.23 C12.99,13.66 12.64,13.99 12.2,13.99 L11.89,13.99 C11.37,13.99 10.97,13.53 11.04,13.01 C11.15,12.1 11.57,11.29 12.18,10.67 L13.42,9.40999999 C13.78,9.04999999 14,8.54999999 14,7.99999997 C14,6.89999998 13.1,5.99999997 12,5.99999997 C11.13,5.99999997 10.38,6.56999998 10.11,7.34999998 C9.97999999,7.71999998 9.66999999,7.98999998 9.27999999,7.98999998 L8.97999999,7.98999998 C8.39999998,7.98999998 7.99999998,7.42999998 8.15999998,6.86999998 C8.64999999,5.20999997 10.18,3.99999997 12,3.99999997 C14.21,3.99999997 16,5.78999997 16,7.99999997 C16,8.87999999 15.64,9.67999999 15.07,10.25 Z',
      id: 'CommunicationLiveHelpIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'live_help',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationLiveHelpIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationLiveHelpIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationLiveHelpIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationLiveHelpIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
