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
  title: ['settings_input_component'],
  paths: [
    {
      d:
        'M4.99999995,1.99999995 C4.99999995,1.44999996 4.54999997,0.999999954 3.99999995,0.999999954 C3.44999996,0.999999954 2.99999995,1.44999996 2.99999995,1.99999995 L2.99999995,5.99999995 L1.99999995,5.99999995 C1.44999996,5.99999995 0.999999954,6.44999998 0.999999954,6.99999995 L0.999999954,12 L6.99999995,12 L6.99999995,6.99999995 C6.99999995,6.44999998 6.54999998,5.99999995 5.99999995,5.99999995 L4.99999995,5.99999995 L4.99999995,1.99999995 Z M8.99999999,16 C8.99999999,17.3 9.83999999,18.4 11,18.82 L11,22 C11,22.55 11.45,23 12,23 C12.55,23 13,22.55 13,22 L13,18.82 C14.16,18.41 15,17.31 15,16 L15,14 L8.99999999,14 L8.99999999,16 Z M0.999999954,16 C0.999999954,17.3 1.83999996,18.4 2.99999995,18.82 L2.99999995,22 C2.99999995,22.55 3.44999996,23 3.99999995,23 C4.54999997,23 4.99999995,22.55 4.99999995,22 L4.99999995,18.82 C6.15999998,18.4 6.99999995,17.3 6.99999995,16 L6.99999995,14 L0.999999954,14 L0.999999954,16 Z M21,5.99999995 L21,1.99999995 C21,1.44999996 20.55,0.999999954 20,0.999999954 C19.45,0.999999954 19,1.44999996 19,1.99999995 L19,5.99999995 L18,5.99999995 C17.45,5.99999995 17,6.44999998 17,6.99999995 L17,12 L23,12 L23,6.99999995 C23,6.44999998 22.55,5.99999995 22,5.99999995 L21,5.99999995 Z M13,1.99999995 C13,1.44999996 12.55,0.999999954 12,0.999999954 C11.45,0.999999954 11,1.44999996 11,1.99999995 L11,5.99999995 L9.99999999,5.99999995 C9.44999999,5.99999995 8.99999999,6.44999998 8.99999999,6.99999995 L8.99999999,12 L15,12 L15,6.99999995 C15,6.44999998 14.55,5.99999995 14,5.99999995 L13,5.99999995 L13,1.99999995 Z M17,16 C17,17.3 17.84,18.4 19,18.82 L19,22 C19,22.55 19.45,23 20,23 C20.55,23 21,22.55 21,22 L21,18.82 C22.16,18.41 23,17.31 23,16 L23,14 L17,14 L17,16 Z',
      id: 'ActionsSettingsInputComponentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'settings_input_component',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSettingsInputComponentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSettingsInputComponentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSettingsInputComponentIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSettingsInputComponentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
