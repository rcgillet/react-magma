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
  title: ['update'],
  paths: [
    {
      d:
        'M11,8.74999999 L11,12.43 C11,12.78 11.19,13.11 11.49,13.29 L14.61,15.14 C14.97,15.35 15.43,15.23 15.64,14.88 C15.85,14.52 15.74,14.06 15.38,13.85 L12.51,12.14 L12.51,8.73999999 C12.5,8.33999998 12.16,7.99999998 11.75,7.99999998 C11.34,7.99999998 11,8.33999998 11,8.74999999 Z M21,9.49999999 L21,4.20999997 C21,3.75999997 20.46,3.53999996 20.15,3.85999997 L18.37,5.63999997 C16.56,3.82999997 13.98,2.78999996 11.16,3.03999996 C6.96999998,3.41999996 3.51999996,6.78999998 3.05999996,10.98 C2.45999996,16.4 6.68999998,21 12,21 C16.59,21 20.38,17.56 20.93,13.12 C21,12.52 20.53,12 19.93,12 C19.43,12 19.01,12.37 18.95,12.86 C18.52,16.35 15.51,19.05 11.9,19 C8.18999998,18.95 5.05999997,15.82 4.99999997,12.1 C4.93999997,8.19999998 8.10999998,4.99999997 12,4.99999997 C13.93,4.99999997 15.68,5.78999997 16.95,7.04999998 L14.86,9.13999999 C14.54,9.45999999 14.76,9.99999999 15.21,9.99999999 L20.5,9.99999999 C20.78,9.99999999 21,9.77999999 21,9.49999999 Z',
      id: 'ActionsUpdateIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'update',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsUpdateIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsUpdateIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsUpdateIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsUpdateIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
