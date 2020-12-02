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
  title: ['thumb_down'],
  paths: [
    {
      d:
        'M14.99,2.99999996 C16.09,2.99999996 16.99,3.89999997 16.99,4.99999996 L16.99,4.99999996 L16.99,14.99 C16.99,15.52 16.78,16.03 16.41,16.4 L16.41,16.4 L10.88,21.94 C10.3,22.53 9.35999999,22.53 8.76999999,21.95 C8.40999999,21.59 8.25999998,21.08 8.35999998,20.58 L8.35999998,20.58 L9.30999999,16 L3.65999997,16 C1.50999996,16 0.0599999502,13.8 0.909999954,11.82 L0.909999954,11.82 L4.16999997,4.20999997 C4.47999997,3.47999996 5.19999997,2.99999996 5.99999997,2.99999996 L5.99999997,2.99999996 Z M21,2.99999996 C22.1,2.99999996 23,3.89999997 23,4.99999996 L23,4.99999996 L23,13 C23,14.1 22.1,15 21,15 C19.9,15 19,14.1 19,13 L19,13 L19,4.99999996 C19,3.89999997 19.9,2.99999996 21,2.99999996 Z',
      id: 'ActionsThumbDownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'thumb_down',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsThumbDownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsThumbDownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsThumbDownIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsThumbDownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
