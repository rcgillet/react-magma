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
  title: ['quickreply'],
  paths: [
    {
      d:
        'M21.24,12 C21.6,12 21.84,12.37 21.7,12.7 L21.7,12.7 L20.3,16 L21.69,16 C22.06,16 22.3,16.39 22.13,16.72 L22.13,16.72 L19.47,22.05 C19.36,22.29 19,22.2 19,21.94 L19,21.94 L19,18 L17.5,18 C17.22,18 17,17.78 17,17.5 L17,17.5 L17,12.5 C17,12.22 17.22,12 17.5,12 L17.5,12 Z M20,1.99999996 C21.1,1.99999996 22,2.89999996 22,3.99999996 L22,3.99999996 L22,9.99999996 L16,9.99999996 C15.45,9.99999996 15,10.45 15,11 L15,11 L15,18 L5.99999996,18 L1.99999996,22 L2.00999996,3.99999996 C2.00999996,2.89999996 2.89999996,1.99999996 3.99999996,1.99999996 L3.99999996,1.99999996 Z',
      id: 'ActionsQuickreplyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'quickreply',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsQuickreplyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsQuickreplyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsQuickreplyIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsQuickreplyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
