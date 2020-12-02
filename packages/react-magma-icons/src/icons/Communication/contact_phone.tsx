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
  title: ['contact_phone'],
  paths: [
    {
      d:
        'M22,2.99999996 L1.99999995,2.99999996 C0.899999954,2.99999996 -4.99999473e-08,3.89999997 -4.99999473e-08,4.99999996 L-4.99999473e-08,19 C-4.99999473e-08,20.1 0.899999954,21 1.99999995,21 L22,21 C23.1,21 23.99,20.1 23.99,19 L24,4.99999996 C24,3.89999997 23.1,2.99999996 22,2.99999996 Z M7.99999997,5.99999997 C9.65999999,5.99999997 11,7.33999998 11,8.99999997 C11,10.66 9.65999999,12 7.99999997,12 C6.33999998,12 4.99999997,10.66 4.99999997,8.99999997 C4.99999997,7.33999998 6.33999998,5.99999997 7.99999997,5.99999997 Z M14,18 L1.99999996,18 L1.99999996,17 C1.99999996,15 5.99999996,13.9 7.99999996,13.9 C9.99999996,13.9 14,15 14,17 L14,18 Z M17.85,14 L19.24,14 C19.4,14 19.54,14.07 19.64,14.2 L20.74,15.65 C20.89,15.85 20.87,16.13 20.69,16.3 L19.33,17.66 C19.15,17.84 18.85,17.86 18.66,17.7 C17.53,16.74 16.69,15.45 16.28,13.99 C16.1,13.36 16,12.69 16,12 C16,11.31 16.1,10.64 16.28,9.99999999 C16.69,8.52999999 17.53,7.24999998 18.66,6.28999998 C18.86,6.11999998 19.15,6.14999998 19.33,6.32999998 L20.69,7.68999998 C20.87,7.86999998 20.89,8.14999998 20.74,8.33999998 L19.64,9.78999999 C19.55,9.91999999 19.4,9.98999999 19.24,9.98999999 L17.85,9.98999999 C17.63,10.62 17.5,11.29 17.5,11.99 C17.5,12.69 17.63,13.37 17.85,14 L17.85,14 Z',
      id: 'CommunicationContactPhoneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'contact_phone',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationContactPhoneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationContactPhoneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationContactPhoneIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationContactPhoneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
