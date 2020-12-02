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
  title: ['call_end'],
  paths: [
    {
      d:
        'M4.50999997,15.48 L6.50999998,13.89 C6.98999998,13.51 7.26999998,12.93 7.26999998,12.32 L7.26999998,9.71999999 C10.29,8.73999999 13.56,8.72999999 16.59,9.71999999 L16.59,12.33 C16.59,12.94 16.87,13.52 17.35,13.9 L19.34,15.48 C20.14,16.11 21.28,16.05 22,15.33 L23.22,14.11 C24.0200001,13.31 24.0200001,11.98 23.17,11.23 C16.76,5.56999997 7.09999998,5.56999997 0.689999953,11.23 C-0.160000051,11.98 -0.160000051,13.31 0.639999953,14.11 L1.85999996,15.33 C2.56999996,16.05 3.70999997,16.11 4.50999997,15.48 Z',
      id: 'CommunicationCallEndIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'call_end',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationCallEndIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationCallEndIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationCallEndIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationCallEndIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
