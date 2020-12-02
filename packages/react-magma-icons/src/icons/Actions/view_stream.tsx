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
  title: ['view_stream'],
  paths: [
    {
      d:
        'M4.99999997,18 L20,18 C20.55,18 21,17.55 21,17 L21,13 C21,12.45 20.55,12 20,12 L4.99999997,12 C4.44999997,12 3.99999997,12.45 3.99999997,13 L3.99999997,17 C3.99999997,17.55 4.44999997,18 4.99999997,18 Z M3.99999997,5.99999997 L3.99999997,9.99999997 C3.99999997,10.55 4.44999997,11 4.99999997,11 L20,11 C20.55,11 21,10.55 21,9.99999997 L21,5.99999997 C21,5.44999997 20.55,4.99999997 20,4.99999997 L4.99999997,4.99999997 C4.44999997,4.99999997 3.99999997,5.44999997 3.99999997,5.99999997 Z',
      id: 'ActionsViewStreamIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_stream',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewStreamIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewStreamIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewStreamIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewStreamIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
