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
  title: ['gradient'],
  paths: [
    {
      d:
        'M11,8.99999999 L13,8.99999999 L13,11 L11,11 L11,8.99999999 Z M8.99999999,11 L11,11 L11,13 L8.99999999,13 L8.99999999,11 Z M13,11 L15,11 L15,13 L13,13 L13,11 Z M15,8.99999999 L17,8.99999999 L17,11 L15,11 L15,8.99999999 Z M6.99999998,8.99999999 L8.99999998,8.99999999 L8.99999998,11 L6.99999998,11 L6.99999998,8.99999999 Z M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M8.99999998,18 L6.99999998,18 L6.99999998,16 L8.99999998,16 L8.99999998,18 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M17,18 L15,18 L15,16 L17,16 L17,18 Z M19,11 L17,11 L17,13 L19,13 L19,15 L17,15 L17,13 L15,13 L15,15 L13,15 L13,13 L11,13 L11,15 L8.99999997,15 L8.99999997,13 L6.99999997,13 L6.99999997,15 L4.99999997,15 L4.99999997,13 L6.99999997,13 L6.99999997,11 L4.99999997,11 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,11 Z',
      id: 'ImageGradientIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'gradient',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageGradientIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageGradientIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageGradientIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageGradientIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
