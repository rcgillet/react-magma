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
  title: ['info'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,17 C11.45,17 11,16.55 11,16 L11,12 C11,11.45 11.45,11 12,11 C12.55,11 13,11.45 13,12 L13,16 C13,16.55 12.55,17 12,17 Z M13,8.99999998 L11,8.99999998 L11,6.99999998 L13,6.99999998 L13,8.99999998 Z',
      id: 'ActionsInfoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'info',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsInfoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsInfoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsInfoIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsInfoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
