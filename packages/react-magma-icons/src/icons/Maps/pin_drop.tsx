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
  title: ['pin_drop'],
  paths: [
    {
      d:
        'M5.99999997,20 L18,20 C18.55,20 19,20.45 19,21 C19,21.55 18.55,22 18,22 L5.99999997,22 C5.44999997,22 4.99999997,21.55 4.99999997,21 C4.99999997,20.45 5.44999997,20 5.99999997,20 Z M12,6.99999998 C10.9,6.99999998 9.99999999,7.89999998 9.99999999,8.99999998 C9.99999999,10.1 10.9,11 12,11 C13.1045695,11 14,10.1045695 14,8.99999998 C14,7.89543048 13.1045695,6.99999998 12,6.99999998 Z M12,1.99999996 C15.27,1.99999996 19,4.45999997 19,9.14999999 C19,12.13 16.87,15.27 12.61,18.54 C12.25,18.82 11.75,18.82 11.39,18.54 C7.12999998,15.26 4.99999997,12.13 4.99999997,9.14999999 C4.99999997,4.45999997 8.72999999,1.99999996 12,1.99999996 Z',
      id: 'MapsPinDropIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pin_drop',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsPinDropIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsPinDropIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsPinDropIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsPinDropIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
