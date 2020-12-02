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
  title: ['print_disabled'],
  paths: [
    {
      d:
        'M2.11999996,2.31999996 C1.72999996,1.92999996 1.09999995,1.92999996 0.709999953,2.31999996 C0.319999951,2.70999996 0.319999951,3.33999996 0.709999953,3.72999997 L4.97999997,7.99999998 C3.32999996,8.00999998 1.99999996,9.34999999 1.99999996,11 L1.99999996,15 C1.99999996,16.1 2.89999996,17 3.99999997,17 L5.99999997,17 L5.99999997,19 C5.99999997,20.1 6.89999998,21 7.99999998,21 L16,21 C16.55,21 17.04,20.78 17.4,20.42 L20.23,23.25 C20.62,23.64 21.25,23.64 21.64,23.25 C22.03,22.86 22.03,22.23 21.64,21.84 L2.11999996,2.31999996 Z M15,19 L8.99999998,19 C8.44999999,19 7.99999998,18.55 7.99999998,18 L7.99999998,14 L10.98,14 L15.7,18.72 C15.51,18.89 15.27,19 15,19 Z M19,7.99999998 L10.63,7.99999998 L19.63,17 L20,17 C21.1,17 22,16.1 22,15 L22,11 C22,9.33999999 20.66,7.99999998 19,7.99999998 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,9.99999999 19,9.99999999 C19.55,9.99999999 20,10.45 20,11 C20,11.55 19.55,12 19,12 Z M17,6.99999996 C17.55,6.99999996 18,6.54999998 18,5.99999996 L18,3.99999996 C18,3.44999996 17.55,2.99999996 17,2.99999996 L6.99999998,2.99999996 C6.62999998,2.99999996 6.31999998,3.20999996 6.14999998,3.50999996 L9.62999999,6.99999996 L17,6.99999996 Z',
      id: 'CommunicationPrintDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'print_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationPrintDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationPrintDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationPrintDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationPrintDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
