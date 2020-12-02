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
  title: ['rounded_corner'],
  paths: [
    {
      d:
        'M19,19 L21,19 L21,21 L19,21 L19,19 Z M19,17 L21,17 L21,15 L19,15 L19,17 Z M2.99999996,13 L4.99999996,13 L4.99999996,11 L2.99999996,11 L2.99999996,13 Z M2.99999996,17 L4.99999996,17 L4.99999996,15 L2.99999996,15 L2.99999996,17 Z M2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 Z M2.99999996,4.99999996 L4.99999996,4.99999996 L4.99999996,2.99999996 L2.99999996,2.99999996 L2.99999996,4.99999996 Z M6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 L6.99999998,2.99999996 L6.99999998,4.99999996 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M6.99999998,21 L8.99999998,21 L8.99999998,19 L6.99999998,19 L6.99999998,21 Z M2.99999996,21 L4.99999996,21 L4.99999996,19 L2.99999996,19 L2.99999996,21 Z M21,7.99999996 C21,5.23999997 18.76,2.99999996 16,2.99999996 L11,2.99999996 L11,4.99999996 L16,4.99999996 C17.65,4.99999996 19,6.34999998 19,7.99999996 L19,13 L21,13 L21,7.99999996 Z',
      id: 'ActionsRoundedCornerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'rounded_corner',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsRoundedCornerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsRoundedCornerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsRoundedCornerIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsRoundedCornerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
