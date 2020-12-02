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
  title: ['arrow_circle_up'],
  paths: [
    {
      d:
        'M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 M12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 L12,22 Z M11,12 L11,15 C11,15.55 11.45,16 12,16 L12,16 C12.55,16 13,15.55 13,15 L13,12 L14.79,12 C15.24,12 15.46,11.46 15.14,11.15 L12.35,8.35999998 C12.15,8.15999998 11.84,8.15999998 11.64,8.35999998 L8.84999999,11.15 C8.53999999,11.46 8.75999999,12 9.20999999,12 L11,12 Z',
      id: 'ActionsArrowCircleUpIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'arrow_circle_up',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsArrowCircleUpIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsArrowCircleUpIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsArrowCircleUpIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsArrowCircleUpIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
