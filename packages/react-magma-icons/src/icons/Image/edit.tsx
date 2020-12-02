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
  title: ['edit'],
  paths: [
    {
      d:
        'M2.99999996,17.46 L2.99999996,20.5 C2.99999996,20.78 3.21999996,21 3.49999996,21 L6.53999998,21 C6.66999998,21 6.79999998,20.95 6.88999998,20.85 L17.81,9.93999999 L14.06,6.18999998 L3.14999996,17.1 C3.04999996,17.2 2.99999996,17.32 2.99999996,17.46 Z M20.71,7.03999998 C21.1,6.64999998 21.1,6.01999998 20.71,5.62999997 L18.37,3.28999996 C17.98,2.89999996 17.35,2.89999996 16.96,3.28999996 L15.13,5.11999997 L18.88,8.86999999 L20.71,7.03999998 Z',
      id: 'ImageEditIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'edit',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageEditIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageEditIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageEditIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageEditIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
