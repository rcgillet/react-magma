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
  title: ['border_right'],
  paths: [
    {
      d:
        'M6.99999998,21 L8.99999998,21 L8.99999998,19 L6.99999998,19 L6.99999998,21 Z M2.99999996,4.99999996 L4.99999996,4.99999996 L4.99999996,2.99999996 L2.99999996,2.99999996 L2.99999996,4.99999996 Z M6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 L6.99999998,2.99999996 L6.99999998,4.99999996 Z M6.99999998,13 L8.99999998,13 L8.99999998,11 L6.99999998,11 L6.99999998,13 Z M2.99999996,21 L4.99999996,21 L4.99999996,19 L2.99999996,19 L2.99999996,21 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M2.99999996,13 L4.99999996,13 L4.99999996,11 L2.99999996,11 L2.99999996,13 Z M2.99999996,17 L4.99999996,17 L4.99999996,15 L2.99999996,15 L2.99999996,17 Z M2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 Z M11,17 L13,17 L13,15 L11,15 L11,17 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M19,3.99999996 L19,20 C19,20.55 19.45,21 20,21 C20.55,21 21,20.55 21,20 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 C19.45,2.99999996 19,3.44999996 19,3.99999996 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M15,4.99999996 L17,4.99999996 L17,2.99999996 L15,2.99999996 L15,4.99999996 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M11,4.99999996 L13,4.99999996 L13,2.99999996 L11,2.99999996 L11,4.99999996 Z M11,8.99999998 L13,8.99999998 L13,6.99999998 L11,6.99999998 L11,8.99999998 Z',
      id: 'EditorBorderRightIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'border_right',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBorderRightIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBorderRightIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBorderRightIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBorderRightIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
