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
  title: ['forward_to_inbox'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L13,20 L13,18 L3.99999996,18 L3.99999996,7.99999997 L10.94,12.34 C11.59,12.75 12.41,12.75 13.06,12.34 L20,7.99999997 L20,13 L22,13 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M12,11 L3.99999997,5.99999997 L20,5.99999997 L12,11 Z M19,16.21 C19,15.76 19.54,15.54 19.85,15.86 L22.64,18.65 C22.84,18.85 22.84,19.16 22.64,19.36 L19.85,22.15 C19.54,22.46 19,22.24 19,21.79 L19,20 L16,20 C15.45,20 15,19.55 15,19 L15,19 C15,18.45 15.45,18 16,18 L19,18 L19,16.21 Z',
      id: 'CommunicationForwardToInboxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'forward_to_inbox',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationForwardToInboxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationForwardToInboxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationForwardToInboxIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationForwardToInboxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
