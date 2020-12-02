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
  title: ['screen_share'],
  paths: [
    {
      d:
        'M20,18 C21.1,18 22,17.1 22,16 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 L3.99999995,3.99999997 C2.89999996,3.99999997 1.99999995,4.89999997 1.99999995,5.99999997 L1.99999995,16 C1.99999995,17.1 2.88999996,18 3.99999995,18 L0.99999995,18 C0.449999952,18 -4.99999473e-08,18.45 -4.99999473e-08,19 C-4.99999473e-08,19.55 0.449999952,20 0.99999995,20 L23,20 C23.55,20 24,19.55 24,19 C24,18.45 23.55,18 23,18 L20,18 Z M13,14.47 L13,12.28 C10.22,12.28 8.38999998,13.13 6.99999998,15 C7.55999998,12.33 9.10999999,9.66999999 13,9.12999999 L13,6.99999998 L16.61,10.36 C16.82,10.56 16.82,10.89 16.61,11.09 L13,14.47 Z',
      id: 'CommunicationScreenShareIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'screen_share',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationScreenShareIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationScreenShareIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationScreenShareIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationScreenShareIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
