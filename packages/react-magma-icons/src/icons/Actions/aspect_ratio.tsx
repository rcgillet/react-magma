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
  title: ['aspect_ratio'],
  paths: [
    {
      d:
        'M18,12 C17.45,12 17,12.45 17,13 L17,15 L15,15 C14.45,15 14,15.45 14,16 C14,16.55 14.45,17 15,17 L18,17 C18.55,17 19,16.55 19,16 L19,13 C19,12.45 18.55,12 18,12 Z M6.99999997,8.99999998 L8.99999997,8.99999998 C9.54999999,8.99999998 9.99999997,8.54999999 9.99999997,7.99999998 C9.99999997,7.44999998 9.54999999,6.99999998 8.99999997,6.99999998 L5.99999997,6.99999998 C5.44999997,6.99999998 4.99999997,7.44999998 4.99999997,7.99999998 L4.99999997,11 C4.99999997,11.55 5.44999997,12 5.99999997,12 C6.54999998,12 6.99999997,11.55 6.99999997,11 L6.99999997,8.99999998 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19.01 L3.99999996,19.01 C3.44999996,19.01 2.99999996,18.56 2.99999996,18.01 L2.99999996,5.98999997 C2.99999996,5.43999997 3.44999996,4.98999997 3.99999996,4.98999997 L20,4.98999997 C20.55,4.98999997 21,5.43999997 21,5.98999997 L21,18.01 C21,18.56 20.55,19.01 20,19.01 L20,19.01 Z',
      id: 'ActionsAspectRatioIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'aspect_ratio',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAspectRatioIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAspectRatioIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAspectRatioIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAspectRatioIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
