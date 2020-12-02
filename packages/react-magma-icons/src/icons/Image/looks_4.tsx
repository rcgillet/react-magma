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
  title: ['looks_4'],
  paths: [
    {
      d:
        'M18.2784,3.35999996 L4.83839997,3.35999996 C3.78239997,3.35999996 2.91839996,4.22399997 2.91839996,5.27999997 L2.91839996,18.72 C2.91839996,19.776 3.78239997,20.64 4.83839997,20.64 L18.2784,20.64 C19.3344,20.64 20.1984,19.776 20.1984,18.72 L20.1984,5.27999997 C20.1984,4.22399997 19.3344,3.35999996 18.2784,3.35999996 Z M13.4784,16.8 C12.9504,16.8 12.5184,16.368 12.5184,15.84 L12.5184,12.96 L9.63839999,12.96 C9.11039999,12.96 8.67839999,12.528 8.67839999,12 L8.67839999,8.15999998 C8.67839999,7.63199998 9.11039999,7.19999998 9.63839999,7.19999998 C10.1664,7.19999998 10.5984,7.63199998 10.5984,8.15999998 L10.5984,11.04 L12.5184,11.04 L12.5184,8.15999998 C12.5184,7.63199998 12.9504,7.19999998 13.4784,7.19999998 C14.0064,7.19999998 14.4384,7.63199998 14.4384,8.15999998 L14.4384,15.84 C14.4384,16.368 14.0064,16.8 13.4784,16.8 Z',
      id: 'ImageLooks4Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'looks_4',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageLooks4Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageLooks4Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageLooks4Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageLooks4Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
