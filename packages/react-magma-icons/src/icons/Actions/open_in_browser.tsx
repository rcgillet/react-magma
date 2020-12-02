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
  title: ['open_in_browser'],
  paths: [
    {
      d:
        'M19,3.99999997 L4.99999996,3.99999997 C3.88999997,3.99999997 2.99999996,4.89999997 2.99999996,5.99999997 L2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L7.99999996,20 C8.54999999,20 8.99999996,19.55 8.99999996,19 C8.99999996,18.45 8.54999999,18 7.99999996,18 L4.99999996,18 L4.99999996,7.99999997 L19,7.99999997 L19,18 L16,18 C15.45,18 15,18.45 15,19 C15,19.55 15.45,20 16,20 L19,20 C20.1,20 21,19.1 21,18 L21,5.99999997 C21,4.89999997 20.11,3.99999997 19,3.99999997 Z M11.65,10.35 L8.85999999,13.14 C8.53999999,13.46 8.75999999,14 9.20999999,14 L11,14 L11,19 C11,19.55 11.45,20 12,20 C12.55,20 13,19.55 13,19 L13,14 L14.79,14 C15.24,14 15.46,13.46 15.14,13.15 L12.35,10.36 C12.16,10.16 11.84,10.16 11.65,10.35 L11.65,10.35 Z',
      id: 'ActionsOpenInBrowserIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'open_in_browser',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsOpenInBrowserIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsOpenInBrowserIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsOpenInBrowserIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsOpenInBrowserIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
