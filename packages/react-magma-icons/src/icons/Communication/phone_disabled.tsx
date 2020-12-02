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
  title: ['phone_disabled'],
  paths: [
    {
      d:
        'M14.54,17.37 C11.91,19.45 8.64999999,20.76 5.08999997,20.98 C3.95999997,21.05 3.01999996,20.11 3.01999996,18.98 L3.01999996,17.25 C3.00999996,16.24 3.76999997,15.39 4.77999997,15.27 L7.31999998,14.98 C7.92999998,14.91 8.52999999,15.12 8.95999999,15.55 L10.8,17.39 C11.61,16.98 12.39,16.49 13.11,15.94 L2.09999996,4.92999997 C1.70999996,4.53999997 1.70999996,3.90999997 2.09999996,3.51999996 L2.09999996,3.51999996 C2.48999996,3.12999996 3.12999996,3.12999996 3.51999996,3.51999996 L20.49,20.5 C20.88,20.89 20.88,21.52 20.49,21.91 C20.1,22.3 19.47,22.3 19.08,21.91 L14.54,17.37 Z M17.39,10.8 L15.54,8.94999999 C15.11,8.51999996 14.9,7.91999998 14.97,7.30999998 L15.26,4.78999997 C15.38,3.77999997 16.23,3.01999996 17.25,3.01999996 L18.98,3.01999996 C20.11,3.01999996 21.05,3.95999997 20.98,5.08999997 C20.76,8.65999999 19.44,11.92 17.36,14.56 L15.93,13.13 C16.48,12.4 16.97,11.62 17.39,10.8 Z',
      id: 'CommunicationPhoneDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationPhoneDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationPhoneDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationPhoneDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationPhoneDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
