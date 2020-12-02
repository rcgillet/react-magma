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
  title: ['unsubscribe'],
  paths: [
    {
      d:
        'M18.5,11.5 C19.42,11.5 20.25,11.76 20.99,12.19 L20.99,4.99999996 C20.99,3.89999997 20.1,2.99999996 19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,15 C2.99999996,16.1 3.89999997,17 4.99999996,17 L13.55,17 C13.53,16.83 13.5,16.67 13.5,16.5 C13.5,13.74 15.74,11.5 18.5,11.5 Z M12.89,10.05 C12.33,10.33 11.66,10.33 11.1,10.05 L5.48999997,7.24999998 C5.18999997,7.09999998 4.99999997,6.78999998 4.99999997,6.44999998 C4.99999997,5.78999997 5.69999997,5.34999997 6.28999998,5.64999997 L12,8.49999999 L17.71,5.64999997 C18.3,5.34999997 19,5.77999997 19,6.44999998 C19,6.78999998 18.81,7.09999998 18.51,7.24999998 L12.89,10.05 Z M18.5,13 C16.57,13 15,14.57 15,16.5 C15,18.43 16.57,20 18.5,20 C20.43,20 22,18.43 22,16.5 C22,14.57 20.43,13 18.5,13 Z M20.5,16.5 C20.5,16.78 20.28,17 20,17 L17,17 C16.72,17 16.5,16.78 16.5,16.5 C16.5,16.22 16.72,16 17,16 L20,16 C20.28,16 20.5,16.22 20.5,16.5 Z',
      id: 'CommunicationUnsubscribeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'unsubscribe',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationUnsubscribeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationUnsubscribeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationUnsubscribeIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationUnsubscribeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
