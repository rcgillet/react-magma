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
  title: ['hourglass_bottom'],
  paths: [
    {
      d:
        'M16,22 C17.1,22 18,21.1 18,20 L17.99,16.82 C17.99,16.29 17.78,15.79 17.41,15.41 L14,12 L17.41,8.56999999 C17.78,8.19999998 17.99,7.68999998 17.99,7.15999998 L18,3.99999996 C18,2.89999996 17.1,1.99999996 16,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,7.15999998 C5.99999997,7.68999998 6.20999998,8.19999998 6.57999998,8.57999999 L9.99999997,12 L6.58999998,15.4 C6.20999998,15.78 5.99999997,16.29 5.99999997,16.82 L5.99999997,20 C5.99999997,21.1 6.89999998,22 7.99999997,22 L16,22 Z M7.99999998,7.08999998 L7.99999998,4.99999997 C7.99999998,4.44999997 8.44999999,3.99999997 8.99999998,3.99999997 L15,3.99999997 C15.55,3.99999997 16,4.44999997 16,4.99999997 L16,7.08999998 C16,7.35999998 15.89,7.60999998 15.71,7.79999998 L12,11.5 L8.28999998,7.78999998 C8.10999998,7.60999998 7.99999998,7.34999998 7.99999998,7.08999998 Z',
      id: 'CommunicationHourglassBottomIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'hourglass_bottom',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationHourglassBottomIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationHourglassBottomIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationHourglassBottomIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationHourglassBottomIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
