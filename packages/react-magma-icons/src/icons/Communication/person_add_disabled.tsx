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
  title: ['person_add_disabled'],
  paths: [
    {
      d:
        'M14.48,11.95 C14.65,11.97 14.82,12 15,12 C17.21,12 19,10.21 19,7.99999997 C19,5.78999997 17.21,3.99999997 15,3.99999997 C12.79,3.99999997 11,5.78999997 11,7.99999997 C11,8.17999998 11.03,8.34999998 11.05,8.51999999 L14.48,11.95 Z M16.69,14.16 L22.43,19.9 C22.76,19.73 23,19.4 23,19 L23,18 C23,15.86 19.44,14.5 16.69,14.16 Z M2.11999996,2.41999996 C1.72999996,2.02999996 1.09999995,2.02999996 0.709999953,2.41999996 C0.319999951,2.80999996 0.319999951,3.43999996 0.709999953,3.82999997 L3.99999997,7.11999998 L3.99999997,9.99999999 L1.99999996,9.99999999 C1.44999996,9.99999999 0.999999954,10.45 0.999999954,11 C0.999999954,11.55 1.44999996,12 1.99999996,12 L3.99999997,12 L3.99999997,14 C3.99999997,14.55 4.44999997,15 4.99999997,15 C5.54999997,15 5.99999997,14.55 5.99999997,14 L5.99999997,12 L8.87999999,12 L11.39,14.51 C9.18999999,15.11 6.99999998,16.3 6.99999998,18 L6.99999998,19 C6.99999998,19.55 7.44999998,20 7.99999998,20 L16.88,20 L20.17,23.29 C20.56,23.68 21.19,23.68 21.58,23.29 C21.97,22.9 21.97,22.27 21.58,21.88 L2.11999996,2.41999996 Z M5.99999997,9.99999999 L5.99999997,9.11999999 L6.87999998,9.99999999 L5.99999997,9.99999999 Z',
      id: 'CommunicationPersonAddDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'person_add_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationPersonAddDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationPersonAddDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationPersonAddDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationPersonAddDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
