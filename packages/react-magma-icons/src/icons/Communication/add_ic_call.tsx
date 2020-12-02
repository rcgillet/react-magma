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
  title: ['add_ic_call'],
  paths: [
    {
      d:
        'M14,7.99999996 L16,7.99999996 L16,9.99999996 C16,10.55 16.45,11 17,11 C17.55,11 18,10.55 18,9.99999996 L18,7.99999996 L20,7.99999996 C20.55,7.99999996 21,7.54999998 21,6.99999996 C21,6.44999998 20.55,5.99999996 20,5.99999996 L18,5.99999996 L18,3.99999996 C18,3.44999996 17.55,2.99999996 17,2.99999996 C16.45,2.99999996 16,3.44999996 16,3.99999996 L16,5.99999996 L14,5.99999996 C13.45,5.99999996 13,6.44999998 13,6.99999996 C13,7.54999998 13.45,7.99999996 14,7.99999996 Z M19.21,15.27 L16.67,14.98 C16.06,14.91 15.46,15.12 15.03,15.55 L13.19,17.39 C10.36,15.95 8.03999998,13.64 6.59999998,10.8 L8.44999999,8.94999999 C8.87999999,8.51999999 9.08999999,7.90999998 9.01999999,7.30999998 L8.72999999,4.78999997 C8.61999999,3.77999997 7.75999998,3.00999996 6.74999998,3.00999996 L5.01999997,3.00999996 C3.88999997,3.00999996 2.94999996,3.94999997 3.01999996,5.07999997 C3.54999996,13.62 10.38,20.44 18.91,20.97 C20.04,21.04 20.9800963,20.1 20.9800963,18.97 L20.9800963,17.24 C20.99,16.24 20.22,15.38 19.21,15.27 Z',
      id: 'CommunicationAddIcCallIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_ic_call',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationAddIcCallIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationAddIcCallIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationAddIcCallIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationAddIcCallIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
