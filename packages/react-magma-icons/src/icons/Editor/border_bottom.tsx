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
  title: ['border_bottom'],
  paths: [
    {
      d:
        'M8.99999998,11 L6.99999998,11 L6.99999998,13 L8.99999998,13 L8.99999998,11 Z M13,15 L11,15 L11,17 L13,17 L13,15 Z M8.99999998,2.99999996 L6.99999998,2.99999996 L6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z M4.99999996,2.99999996 L2.99999996,2.99999996 L2.99999996,4.99999996 L4.99999996,4.99999996 L4.99999996,2.99999996 Z M13,6.99999998 L11,6.99999998 L11,8.99999998 L13,8.99999998 L13,6.99999998 Z M17,11 L15,11 L15,13 L17,13 L17,11 Z M13,2.99999996 L11,2.99999996 L11,4.99999996 L13,4.99999996 L13,2.99999996 Z M17,2.99999996 L15,2.99999996 L15,4.99999996 L17,4.99999996 L17,2.99999996 Z M19,13 L21,13 L21,11 L19,11 L19,13 Z M19,17 L21,17 L21,15 L19,15 L19,17 Z M4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 Z M19,2.99999996 L19,4.99999996 L21,4.99999996 L21,2.99999996 L19,2.99999996 Z M19,8.99999998 L21,8.99999998 L21,6.99999998 L19,6.99999998 L19,8.99999998 Z M4.99999996,11 L2.99999996,11 L2.99999996,13 L4.99999996,13 L4.99999996,11 Z M3.99999996,21 L20,21 C20.55,21 21,20.55 21,20 C21,19.45 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M4.99999996,15 L2.99999996,15 L2.99999996,17 L4.99999996,17 L4.99999996,15 Z',
      id: 'EditorBorderBottomIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'border_bottom',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBorderBottomIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBorderBottomIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBorderBottomIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBorderBottomIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
