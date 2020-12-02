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
  title: ['done'],
  paths: [
    {
      d:
        'M8.99999999,16.2 L5.49999997,12.7 C5.10999997,12.31 4.48999997,12.31 4.09999997,12.7 C3.70999997,13.09 3.70999997,13.71 4.09999997,14.1 L8.28999998,18.29 C8.67999999,18.68 9.30999999,18.68 9.69999999,18.29 L20.3,7.69999998 C20.69,7.30999998 20.69,6.68999998 20.3,6.29999998 C19.91,5.90999997 19.29,5.90999997 18.9,6.29999998 L8.99999999,16.2 Z',
      id: 'ActionsDoneIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'done',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDoneIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDoneIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDoneIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDoneIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
