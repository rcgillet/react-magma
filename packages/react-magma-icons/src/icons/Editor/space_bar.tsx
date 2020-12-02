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
  title: ['space_bar'],
  paths: [
    {
      d:
        'M18,9.99999999 L18,13 L5.99999997,13 L5.99999997,9.99999999 C5.99999997,9.44999999 5.54999997,8.99999999 4.99999997,8.99999999 C4.44999997,8.99999999 3.99999997,9.44999999 3.99999997,9.99999999 L3.99999997,14 C3.99999997,14.55 4.44999997,15 4.99999997,15 L19,15 C19.55,15 20,14.55 20,14 L20,9.99999999 C20,9.44999999 19.55,8.99999999 19,8.99999999 C18.45,8.99999999 18,9.44999999 18,9.99999999 Z',
      id: 'EditorSpaceBarIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'space_bar',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorSpaceBarIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorSpaceBarIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorSpaceBarIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorSpaceBarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
