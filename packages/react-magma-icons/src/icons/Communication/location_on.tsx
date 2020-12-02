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
  title: ['location_on'],
  paths: [
    {
      d:
        'M12,1.99999996 C8.12999998,1.99999996 4.99999997,5.12999997 4.99999997,8.99999996 C4.99999997,13.17 9.41999999,18.92 11.24,21.11 C11.64,21.59 12.37,21.59 12.77,21.11 C14.58,18.92 19,13.17 19,8.99999996 C19,5.12999997 15.87,1.99999996 12,1.99999996 Z M12,11.5 C10.62,11.5 9.49999999,10.38 9.49999999,8.99999998 C9.49999999,7.61999998 10.62,6.49999998 12,6.49999998 C13.38,6.49999998 14.5,7.61999998 14.5,8.99999998 C14.5,10.38 13.38,11.5 12,11.5 Z',
      id: 'CommunicationLocationOnIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'location_on',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationLocationOnIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationLocationOnIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationLocationOnIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationLocationOnIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
