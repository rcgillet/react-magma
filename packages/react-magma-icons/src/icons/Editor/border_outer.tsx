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
  title: ['border_outer'],
  paths: [
    {
      d:
        'M13,6.99999998 L11,6.99999998 L11,8.99999998 L13,8.99999998 L13,6.99999998 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z M17,11 L15,11 L15,13 L17,13 L17,11 Z M2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,18 C19,18.55 18.55,19 18,19 Z M13,15 L11,15 L11,17 L13,17 L13,15 Z M8.99999998,11 L6.99999998,11 L6.99999998,13 L8.99999998,13 L8.99999998,11 Z',
      id: 'EditorBorderOuterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'border_outer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBorderOuterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBorderOuterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBorderOuterIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBorderOuterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
