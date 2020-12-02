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
  title: ['border_all'],
  paths: [
    {
      d:
        'M2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 Z M11,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,13 L9.99999997,13 C10.55,13 11,13.45 11,14 L11,19 Z M9.99999997,11 L4.99999997,11 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L11,4.99999997 L11,9.99999997 C11,10.55 10.55,11 9.99999997,11 Z M18,19 L13,19 L13,14 C13,13.45 13.45,13 14,13 L19,13 L19,18 C19,18.55 18.55,19 18,19 Z M19,11 L14,11 C13.45,11 13,10.55 13,9.99999997 L13,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,11 Z',
      id: 'EditorBorderAllIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'border_all',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBorderAllIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBorderAllIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBorderAllIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBorderAllIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
