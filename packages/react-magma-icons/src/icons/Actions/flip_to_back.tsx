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
  title: ['flip_to_back'],
  paths: [
    {
      d:
        'M8.99999998,6.99999998 L6.99999998,6.99999998 L6.99999998,8.99999998 L8.99999998,8.99999998 L8.99999998,6.99999998 Z M8.99999998,11 L6.99999998,11 L6.99999998,13 L8.99999998,13 L8.99999998,11 Z M8.99999998,2.99999996 C7.88999998,2.99999996 6.99999998,3.89999997 6.99999998,4.99999996 L8.99999998,4.99999996 L8.99999998,2.99999996 Z M13,15 L11,15 L11,17 L13,17 L13,15 Z M19,2.99999996 L19,4.99999996 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M13,2.99999996 L11,2.99999996 L11,4.99999996 L13,4.99999996 L13,2.99999996 Z M8.99999998,17 L8.99999998,15 L6.99999998,15 C6.99999998,16.1 7.88999998,17 8.99999998,17 Z M19,13 L21,13 L21,11 L19,11 L19,13 Z M19,8.99999998 L21,8.99999998 L21,6.99999998 L19,6.99999998 L19,8.99999998 Z M19,17 C20.1,17 21,16.1 21,15 L19,15 L19,17 Z M3.99999996,6.99999998 C3.44999996,6.99999998 2.99999996,7.44999998 2.99999996,7.99999998 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L16,21 C16.55,21 17,20.55 17,20 C17,19.45 16.55,19 16,19 L5.99999996,19 C5.44999997,19 4.99999996,18.55 4.99999996,18 L4.99999996,7.99999998 C4.99999996,7.44999998 4.54999997,6.99999998 3.99999996,6.99999998 Z M15,4.99999996 L17,4.99999996 L17,2.99999996 L15,2.99999996 L15,4.99999996 Z M15,17 L17,17 L17,15 L15,15 L15,17 Z',
      id: 'ActionsFlipToBackIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'flip_to_back',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFlipToBackIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFlipToBackIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFlipToBackIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFlipToBackIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
