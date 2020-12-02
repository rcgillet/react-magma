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
  title: ['undo'],
  paths: [
    {
      d:
        'M12.5,7.99999998 C9.84999999,7.99999998 7.44999998,8.98999999 5.59999997,10.6 L3.70999997,8.70999999 C3.07999996,8.07999998 1.99999996,8.51999999 1.99999996,9.40999999 L1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 L8.58999999,16 C9.47999999,16 9.92999999,14.92 9.29999999,14.29 L7.38999998,12.38 C8.77999999,11.22 10.55,10.5 12.51,10.5 C15.67,10.5 18.4,12.34 19.7,15 C19.97,15.56 20.61,15.84 21.2,15.64 C21.91,15.41 22.27,14.6 21.95,13.92 C20.23,10.42 16.65,7.99999998 12.5,7.99999998 Z',
      id: 'ContentUndoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'undo',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentUndoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentUndoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentUndoIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentUndoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
