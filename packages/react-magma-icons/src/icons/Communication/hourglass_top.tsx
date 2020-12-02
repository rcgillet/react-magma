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
  title: ['hourglass_top'],
  paths: [
    {
      d:
        'M7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L6.00999998,7.17999998 C6.00999998,7.70999998 6.21999998,8.20999998 6.58999998,8.58999999 L9.99999997,12 L6.58999998,15.43 C6.21999998,15.8 6.00999998,16.31 6.00999998,16.84 L5.99999997,20 C5.99999997,21.1 6.89999998,22 7.99999997,22 L16,22 C17.1,22 18,21.1 18,20 L18,16.84 C18,16.31 17.79,15.8 17.42,15.43 L14,12 L17.41,8.59999999 C17.79,8.21999998 18,7.70999998 18,7.17999998 L18,3.99999996 C18,2.89999996 17.1,1.99999996 16,1.99999996 L7.99999997,1.99999996 Z M16,16.91 L16,19 C16,19.55 15.55,20 15,20 L8.99999998,20 C8.44999999,20 7.99999998,19.55 7.99999998,19 L7.99999998,16.91 C7.99999998,16.64 8.10999998,16.39 8.28999998,16.2 L12,12.5 L15.71,16.21 C15.89,16.39 16,16.65 16,16.91 Z',
      id: 'CommunicationHourglassTopIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'hourglass_top',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationHourglassTopIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationHourglassTopIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationHourglassTopIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationHourglassTopIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
