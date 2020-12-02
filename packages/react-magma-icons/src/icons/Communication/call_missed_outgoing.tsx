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
  title: ['call_missed_outgoing'],
  paths: [
    {
      d:
        'M3.69999997,9.10999999 L11.29,16.7 C11.68,17.09 12.31,17.09 12.7,16.7 L19,10.4 L19,14 C19,14.55 19.45,15 20,15 C20.55,15 21,14.55 21,14 L21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 L14,6.99999998 C13.45,6.99999998 13,7.44999998 13,7.99999998 C13,8.54999999 13.45,8.99999998 14,8.99999998 L17.59,8.99999998 L12,14.59 L5.10999997,7.69999998 C4.71999997,7.30999998 4.08999997,7.30999998 3.69999997,7.69999998 C3.31999996,8.08999998 3.31999996,8.72999999 3.69999997,9.10999999 Z',
      id: 'CommunicationCallMissedOutgoingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'call_missed_outgoing',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationCallMissedOutgoingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationCallMissedOutgoingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationCallMissedOutgoingIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationCallMissedOutgoingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
