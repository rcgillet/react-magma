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
  title: ['border_horizontal'],
  paths: [
    {
      d:
        'M2.99999996,21 L4.99999996,21 L4.99999996,19 L2.99999996,19 L2.99999996,21 Z M4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 Z M2.99999996,17 L4.99999996,17 L4.99999996,15 L2.99999996,15 L2.99999996,17 Z M6.99999998,21 L8.99999998,21 L8.99999998,19 L6.99999998,19 L6.99999998,21 Z M4.99999996,2.99999996 L2.99999996,2.99999996 L2.99999996,4.99999996 L4.99999996,4.99999996 L4.99999996,2.99999996 Z M8.99999998,2.99999996 L6.99999998,2.99999996 L6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 Z M17,2.99999996 L15,2.99999996 L15,4.99999996 L17,4.99999996 L17,2.99999996 Z M13,6.99999998 L11,6.99999998 L11,8.99999998 L13,8.99999998 L13,6.99999998 Z M13,2.99999996 L11,2.99999996 L11,4.99999996 L13,4.99999996 L13,2.99999996 Z M19,17 L21,17 L21,15 L19,15 L19,17 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M19,2.99999996 L19,4.99999996 L21,4.99999996 L21,2.99999996 L19,2.99999996 Z M19,8.99999998 L21,8.99999998 L21,6.99999998 L19,6.99999998 L19,8.99999998 Z M11,17 L13,17 L13,15 L11,15 L11,17 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M19,21 L21,21 L21,19 L19,19 L19,21 Z',
      id: 'EditorBorderHorizontalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'border_horizontal',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBorderHorizontalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBorderHorizontalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBorderHorizontalIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBorderHorizontalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
