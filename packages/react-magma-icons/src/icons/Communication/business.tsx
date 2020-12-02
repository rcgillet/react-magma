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
  title: ['business'],
  paths: [
    {
      d:
        'M12,6.99999996 L12,4.99999996 C12,3.89999997 11.1,2.99999996 9.99999996,2.99999996 L3.99999996,2.99999996 C2.89999996,2.99999996 1.99999996,3.89999997 1.99999996,4.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,8.99999996 C22,7.89999998 21.1,6.99999996 20,6.99999996 L12,6.99999996 Z M5.99999997,19 L3.99999997,19 L3.99999997,17 L5.99999997,17 L5.99999997,19 Z M5.99999997,15 L3.99999997,15 L3.99999997,13 L5.99999997,13 L5.99999997,15 Z M5.99999997,11 L3.99999997,11 L3.99999997,8.99999999 L5.99999997,8.99999999 L5.99999997,11 Z M5.99999997,6.99999997 L3.99999997,6.99999997 L3.99999997,4.99999997 L5.99999997,4.99999997 L5.99999997,6.99999997 Z M9.99999998,19 L7.99999998,19 L7.99999998,17 L9.99999998,17 L9.99999998,19 Z M9.99999998,15 L7.99999998,15 L7.99999998,13 L9.99999998,13 L9.99999998,15 Z M9.99999998,11 L7.99999998,11 L7.99999998,8.99999999 L9.99999998,8.99999999 L9.99999998,11 Z M9.99999998,6.99999997 L7.99999998,6.99999997 L7.99999998,4.99999997 L9.99999998,4.99999997 L9.99999998,6.99999997 Z M19,19 L12,19 L12,17 L14,17 L14,15 L12,15 L12,13 L14,13 L14,11 L12,11 L12,8.99999999 L19,8.99999999 C19.55,8.99999999 20,9.44999999 20,9.99999999 L20,18 C20,18.55 19.55,19 19,19 Z M18,11 L16,11 L16,13 L18,13 L18,11 Z M18,15 L16,15 L16,17 L18,17 L18,15 Z',
      id: 'CommunicationBusinessIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'business',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationBusinessIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationBusinessIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationBusinessIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationBusinessIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
