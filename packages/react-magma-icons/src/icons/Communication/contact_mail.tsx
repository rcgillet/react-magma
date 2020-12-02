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
  title: ['contact_mail'],
  paths: [
    {
      d:
        'M21,7.99999998 L21,6.99999998 L18,8.99999998 L15,6.99999998 L15,7.99999998 L17.72,9.81999999 C17.89,9.92999999 18.11,9.92999999 18.27,9.81999999 L21,7.99999998 Z M22,2.99999996 L1.99999995,2.99999996 C0.899999954,2.99999996 -4.99999473e-08,3.89999997 -4.99999473e-08,4.99999996 L-4.99999473e-08,19 C-4.99999473e-08,20.1 0.899999954,21 1.99999995,21 L22,21 C23.1,21 23.99,20.1 23.99,19 L24,4.99999996 C24,3.89999997 23.1,2.99999996 22,2.99999996 Z M7.99999997,5.99999997 C9.65999999,5.99999997 11,7.33999998 11,8.99999997 C11,10.66 9.65999999,12 7.99999997,12 C6.33999998,12 4.99999997,10.66 4.99999997,8.99999997 C4.99999997,7.33999998 6.33999998,5.99999997 7.99999997,5.99999997 Z M14,18 L1.99999996,18 L1.99999996,17 C1.99999996,15 5.99999996,13.9 7.99999996,13.9 C9.99999996,13.9 14,15 14,17 L14,18 Z M21.5,12 L14.5,12 C14.22,12 14,11.78 14,11.5 L14,6.49999997 C14,6.21999998 14.22,5.99999997 14.5,5.99999997 L21.5,5.99999997 C21.78,5.99999997 22,6.21999998 22,6.49999997 L22,11.5 C22,11.78 21.78,12 21.5,12 Z',
      id: 'CommunicationContactMailIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'contact_mail',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationContactMailIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationContactMailIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationContactMailIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationContactMailIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
