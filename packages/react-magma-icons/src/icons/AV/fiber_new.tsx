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
  title: ['fiber_new'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.88999996,3.99999997 2.00999996,4.88999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.11 2.88999996,20 3.99999996,20 L20,20 C21.11,20 22,19.11 22,18 L22,5.99999997 C22,4.88999997 21.11,3.99999997 20,3.99999997 Z M8.49999996,14.21 C8.49999996,14.64 8.13999998,15 7.70999998,15 C7.45999998,15 7.21999998,14.88 7.06999998,14.67 L4.74999997,11.5 L4.74999997,14.38 C4.74999997,14.73 4.46999997,15 4.12999997,15 C3.78999997,15 3.49999996,14.72 3.49999996,14.38 L3.49999996,9.78999999 C3.49999996,9.35999999 3.85999997,8.99999999 4.28999997,8.99999999 L4.33999997,8.99999999 C4.59999997,8.99999999 4.83999997,9.11999999 4.98999997,9.32999999 L7.24999998,12.5 L7.24999998,9.61999999 C7.24999998,9.27999999 7.52999998,8.99999999 7.87999998,8.99999999 C8.22999998,8.99999999 8.49999996,9.27999999 8.49999996,9.61999999 L8.49999996,14.21 L8.49999996,14.21 Z M13.5,9.63999999 C13.5,9.98999999 13.22,10.26 12.88,10.26 L11,10.26 L11,11.38 L12.88,11.38 C13.23,11.38 13.5,11.66 13.5,12 L13.5,12.01 C13.5,12.36 13.22,12.63 12.88,12.63 L11,12.63 L11,13.74 L12.88,13.74 C13.23,13.74 13.5,14.02 13.5,14.36 C13.5,14.71 13.22,14.98 12.88,14.98 L10.35,14.98 C9.87999999,14.98 9.49999999,14.6 9.49999999,14.13 L9.49999999,9.82999999 C9.49999999,9.37999999 9.87999999,8.99999999 10.35,8.99999999 L12.88,8.99999999 C13.23,8.99999999 13.5,9.27999999 13.5,9.61999999 L13.5,9.63999999 L13.5,9.63999999 Z M20.5,14 C20.5,14.55 20.05,15 19.5,15 L15.5,15 C14.95,15 14.5,14.55 14.5,14 L14.5,9.61999999 C14.5,9.27999999 14.78,8.99999999 15.12,8.99999999 C15.46,8.99999999 15.74,9.27999999 15.74,9.61999999 L15.74,13.51 L16.87,13.51 L16.87,10.61 C16.87,10.26 17.15,9.98999999 17.49,9.98999999 C17.83,9.98999999 18.11,10.27 18.11,10.61 L18.11,13.5 L19.23,13.5 L19.23,9.61999999 C19.23,9.26999999 19.51,8.99999999 19.85,8.99999999 C20.19,8.99999999 20.47,9.27999999 20.47,9.61999999 L20.47,14 L20.5,14 Z',
      id: 'AVFiberNewIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fiber_new',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVFiberNewIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVFiberNewIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVFiberNewIcon-path-1',
        },
      ],
    },
  ],
};

export const AVFiberNewIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
