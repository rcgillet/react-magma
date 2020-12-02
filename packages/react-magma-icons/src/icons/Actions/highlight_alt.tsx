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
  title: ['highlight_alt'],
  paths: [
    {
      d:
        'M17,4.99999996 L15,4.99999996 L15,2.99999996 L17,2.99999996 L17,4.99999996 Z M19,8.99999998 L21,8.99999998 L21,6.99999998 L19,6.99999998 L19,8.99999998 Z M19,13 L21,13 L21,11 L19,11 L19,13 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 L6.99999998,2.99999996 L6.99999998,4.99999996 Z M2.99999996,17 L4.99999996,17 L4.99999996,15 L2.99999996,15 L2.99999996,17 Z M4.99999996,21 L4.99999996,19 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 Z M19,2.99999996 L19,4.99999996 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M11,4.99999996 L13,4.99999996 L13,2.99999996 L11,2.99999996 L11,4.99999996 Z M2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 Z M6.99999998,21 L8.99999998,21 L8.99999998,19 L6.99999998,19 L6.99999998,21 Z M2.99999996,13 L4.99999996,13 L4.99999996,11 L2.99999996,11 L2.99999996,13 Z M2.99999996,4.99999996 L4.99999996,4.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 Z M18.71,17.29 L20.15,15.85 C20.47,15.53 20.24,15 19.8,15 L16,15 C15.45,15 15,15.45 15,16 L15,19.79 C15,20.24 15.54,20.46 15.85,20.14 L17.29,18.7 L19.29,20.7 C19.68,21.09 20.31,21.09 20.7,20.7 C21.09,20.31 21.09,19.68 20.7,19.29 L18.71,17.29 Z',
      id: 'ActionsHighlightAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'highlight_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHighlightAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHighlightAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHighlightAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHighlightAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
