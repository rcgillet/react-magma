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
  title: ['list_alt'],
  paths: [
    {
      d:
        'M12,8.99999998 L16,8.99999998 C16.55,8.99999998 17,8.54999999 17,7.99999998 C17,7.44999998 16.55,6.99999998 16,6.99999998 L12,6.99999998 C11.45,6.99999998 11,7.44999998 11,7.99999998 C11,8.54999999 11.45,8.99999998 12,8.99999998 Z M12,13 L16,13 C16.55,13 17,12.55 17,12 C17,11.45 16.55,11 16,11 L12,11 C11.45,11 11,11.45 11,12 C11,12.55 11.45,13 12,13 Z M12,17 L16,17 C16.55,17 17,16.55 17,16 C17,15.45 16.55,15 16,15 L12,15 C11.45,15 11,15.45 11,16 C11,16.55 11.45,17 12,17 Z M6.99999998,6.99999998 L8.99999998,6.99999998 L8.99999998,8.99999998 L6.99999998,8.99999998 L6.99999998,6.99999998 Z M6.99999998,11 L8.99999998,11 L8.99999998,13 L6.99999998,13 L6.99999998,11 Z M6.99999998,15 L8.99999998,15 L8.99999998,17 L6.99999998,17 L6.99999998,15 Z M20,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 L2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 L20,21 C20.55,21 21,20.55 21,20 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 Z M19,19 L4.99999997,19 L4.99999997,4.99999997 L19,4.99999997 L19,19 Z',
      id: 'CommunicationListAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'list_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationListAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationListAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationListAltIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationListAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
