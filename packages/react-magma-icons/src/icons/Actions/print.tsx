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
  title: ['print'],
  paths: [
    {
      d:
        'M19,7.99999998 L4.99999996,7.99999998 C3.33999996,7.99999998 1.99999996,9.33999999 1.99999996,11 L1.99999996,15 C1.99999996,16.1 2.89999996,17 3.99999996,17 L5.99999996,17 L5.99999996,19 C5.99999996,20.1 6.89999998,21 7.99999996,21 L16,21 C17.1,21 18,20.1 18,19 L18,17 L20,17 C21.1,17 22,16.1 22,15 L22,11 C22,9.33999999 20.66,7.99999998 19,7.99999998 Z M15,19 L8.99999998,19 C8.44999999,19 7.99999998,18.55 7.99999998,18 L7.99999998,14 L16,14 L16,18 C16,18.55 15.55,19 15,19 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,9.99999999 19,9.99999999 C19.55,9.99999999 20,10.45 20,11 C20,11.55 19.55,12 19,12 Z M17,2.99999996 L6.99999997,2.99999996 C6.44999998,2.99999996 5.99999997,3.44999996 5.99999997,3.99999996 L5.99999997,5.99999996 C5.99999997,6.54999998 6.44999998,6.99999996 6.99999997,6.99999996 L17,6.99999996 C17.55,6.99999996 18,6.54999998 18,5.99999996 L18,3.99999996 C18,3.44999996 17.55,2.99999996 17,2.99999996 Z',
      id: 'ActionsPrintIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'print',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPrintIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPrintIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPrintIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPrintIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
