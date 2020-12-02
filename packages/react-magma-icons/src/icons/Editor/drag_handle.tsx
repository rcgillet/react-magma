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
  title: ['drag_handle'],
  paths: [
    {
      d:
        'M19,8.99999999 L4.99999997,8.99999999 C4.44999997,8.99999999 3.99999997,9.44999999 3.99999997,9.99999999 C3.99999997,10.55 4.44999997,11 4.99999997,11 L19,11 C19.55,11 20,10.55 20,9.99999999 C20,9.44999999 19.55,8.99999999 19,8.99999999 Z M4.99999997,15 L19,15 C19.55,15 20,14.55 20,14 C20,13.45 19.55,13 19,13 L4.99999997,13 C4.44999997,13 3.99999997,13.45 3.99999997,14 C3.99999997,14.55 4.44999997,15 4.99999997,15 Z',
      id: 'EditorDragHandleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'drag_handle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorDragHandleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorDragHandleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorDragHandleIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorDragHandleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
