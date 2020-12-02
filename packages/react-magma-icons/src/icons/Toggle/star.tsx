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
  title: ['star'],
  paths: [
    {
      d:
        'M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.11999999 19.64,9.04999999 L14.81,8.63999999 L12.92,4.17999997 C12.58,3.36999996 11.42,3.36999996 11.08,4.17999997 L9.18999999,8.62999999 L4.35999997,9.03999999 C3.47999996,9.10999999 3.11999996,10.21 3.78999997,10.79 L7.45999998,13.97 L6.35999998,18.69 C6.15999998,19.55 7.08999998,20.23 7.84999998,19.77 L12,17.27 Z',
      id: 'ToggleStarIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'star',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ToggleStarIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ToggleStarIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ToggleStarIcon-path-1',
        },
      ],
    },
  ],
};

export const ToggleStarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
