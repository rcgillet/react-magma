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
  title: ['broken_image'],
  paths: [
    {
      d:
        'M21,4.99999996 L21,11.59 L18.71,9.28999999 C18.32,8.89999999 17.68,8.89999999 17.29,9.28999999 L14,12.59 L10.71,9.29999999 C10.32,8.90999999 9.68999999,8.90999999 9.29999999,9.29999999 L5.99999996,12.59 L2.99999996,9.57999999 L2.99999996,4.99999996 C2.99999996,3.89999997 3.89999997,2.99999996 4.99999996,2.99999996 L19,2.99999996 C20.1,2.99999996 21,3.89999997 21,4.99999996 Z M18,11.42 L21,14.43 L21,19 C21,20.1 20.1,21 19,21 L4.99999996,21 C3.89999997,21 2.99999996,20.1 2.99999996,19 L2.99999996,12.42 L5.28999997,14.71 C5.67999997,15.1 6.30999998,15.1 6.69999998,14.71 L9.99999996,11.41 L13.29,14.7 C13.68,15.09 14.31,15.09 14.7,14.7 L18,11.42 Z',
      id: 'ImageBrokenImageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'broken_image',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBrokenImageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBrokenImageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBrokenImageIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageBrokenImageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
