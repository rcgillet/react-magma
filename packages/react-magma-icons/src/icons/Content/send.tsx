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
  title: ['send'],
  paths: [
    {
      d:
        'M3.39999996,20.4 L20.85,12.92 C21.66,12.57 21.66,11.43 20.85,11.08 L3.39999996,3.59999996 C2.73999996,3.30999996 2.00999996,3.79999997 2.00999996,4.50999997 L1.99999996,9.11999999 C1.99999996,9.61999999 2.36999996,10.05 2.86999996,10.11 L17,12 L2.86999996,13.88 C2.36999996,13.95 1.99999996,14.38 1.99999996,14.88 L2.00999996,19.49 C2.00999996,20.2 2.73999996,20.69 3.39999996,20.4 L3.39999996,20.4 Z',
      id: 'ContentSendIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'send',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentSendIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentSendIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentSendIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentSendIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
