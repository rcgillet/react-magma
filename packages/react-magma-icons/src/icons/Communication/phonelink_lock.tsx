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
  title: ['phonelink_lock'],
  paths: [
    {
      d:
        'M19,0.999999954 L8.99999998,0.999999954 C7.89999998,0.999999954 6.99999998,1.89999996 6.99999998,2.99999995 L6.99999998,4.99999995 C6.99999998,5.54999997 7.44999998,5.99999995 7.99999998,5.99999995 C8.54999999,5.99999995 8.99999998,5.54999997 8.99999998,4.99999995 L8.99999998,3.99999995 L19,3.99999995 L19,20 L8.99999998,20 L8.99999998,19 C8.99999998,18.45 8.54999999,18 7.99999998,18 C7.44999998,18 6.99999998,18.45 6.99999998,19 L6.99999998,21 C6.99999998,22.1 7.89999998,23 8.99999998,23 L19,23 C20.1,23 21,22.1 21,21 L21,2.99999995 C21,1.89999996 20.1,0.999999954 19,0.999999954 Z M10.8,11 L10.8,9.49999998 C10.8,8.09999998 9.39999999,6.99999998 7.99999997,6.99999998 C6.59999998,6.99999998 5.19999997,8.09999998 5.19999997,9.49999998 L5.19999997,11 C4.59999997,11 3.99999997,11.6 3.99999997,12.2 L3.99999997,15.7 C3.99999997,16.4 4.59999997,17 5.19999997,17 L10.7,17 C11.4,17 12,16.4 12,15.8 L12,12.3 C12,11.6 11.4,11 10.8,11 Z M9.49999998,11 L6.49999998,11 L6.49999998,9.49999999 C6.49999998,8.69999998 7.19999998,8.19999998 7.99999998,8.19999998 C8.79999999,8.19999998 9.49999998,8.69999998 9.49999998,9.49999999 L9.49999998,11 Z',
      id: 'CommunicationPhonelinkLockIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phonelink_lock',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationPhonelinkLockIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationPhonelinkLockIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationPhonelinkLockIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationPhonelinkLockIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
