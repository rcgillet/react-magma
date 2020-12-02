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
  title: ['timeline'],
  paths: [
    {
      d:
        'M23,7.99999997 C23,9.09999999 22.1,9.99999997 21,9.99999997 C20.82,9.99999997 20.65,9.97999999 20.49,9.92999999 L16.93,13.48 C16.98,13.64 17,13.82 17,14 C17,15.1 16.1,16 15,16 C13.9,16 13,15.1 13,14 C13,13.82 13.02,13.64 13.07,13.48 L10.52,10.93 C10.36,10.98 10.18,11 9.99999995,11 C9.81999999,11 9.63999999,10.98 9.47999999,10.93 L4.92999997,15.49 C4.97999997,15.65 4.99999995,15.82 4.99999995,16 C4.99999995,17.1 4.09999997,18 2.99999995,18 C1.89999996,18 0.999999954,17.1 0.999999954,16 C0.999999954,14.9 1.89999996,14 2.99999995,14 C3.17999996,14 3.34999996,14.02 3.50999996,14.07 L8.06999998,9.51999999 C8.01999998,9.35999999 7.99999995,9.17999999 7.99999995,8.99999997 C7.99999995,7.89999998 8.89999999,6.99999997 9.99999995,6.99999997 C11.1,6.99999997 12,7.89999998 12,8.99999997 C12,9.17999999 11.98,9.35999999 11.93,9.51999999 L14.48,12.07 C14.64,12.02 14.82,12 15,12 C15.18,12 15.36,12.02 15.52,12.07 L19.07,8.50999999 C19.02,8.34999998 19,8.17999998 19,7.99999997 C19,6.89999998 19.9,5.99999997 21,5.99999997 C22.1,5.99999997 23,6.89999998 23,7.99999997 Z',
      id: 'ActionsTimelineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'timeline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTimelineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTimelineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTimelineIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTimelineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
