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
  title: ['repeat'],
  paths: [
    {
      d:
        'M6.99999997,6.99999998 L17,6.99999998 L17,8.78999999 C17,9.23999999 17.54,9.45999999 17.85,9.13999999 L20.64,6.34999998 C20.84,6.14999998 20.84,5.83999997 20.64,5.63999997 L17.85,2.84999996 C17.54,2.53999996 17,2.75999996 17,3.20999996 L17,4.99999997 L5.99999997,4.99999997 C5.44999997,4.99999997 4.99999997,5.44999997 4.99999997,5.99999997 L4.99999997,9.99999999 C4.99999997,10.55 5.44999997,11 5.99999997,11 C6.54999998,11 6.99999997,10.55 6.99999997,9.99999999 L6.99999997,6.99999998 Z M17,17 L6.99999998,17 L6.99999998,15.21 C6.99999998,14.76 6.45999998,14.54 6.14999998,14.86 L3.35999996,17.65 C3.15999996,17.85 3.15999996,18.16 3.35999996,18.36 L6.14999998,21.15 C6.45999998,21.46 6.99999998,21.24 6.99999998,20.79 L6.99999998,19 L18,19 C18.55,19 19,18.55 19,18 L19,14 C19,13.45 18.55,13 18,13 C17.45,13 17,13.45 17,14 L17,17 Z',
      id: 'AVRepeatIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'repeat',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVRepeatIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVRepeatIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVRepeatIcon-path-1',
        },
      ],
    },
  ],
};

export const AVRepeatIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
