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
  title: ['mode_comment'],
  paths: [
    {
      d:
        'M22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,16 C1.99999996,17.1 2.89999996,18 3.99999996,18 L18,18 L22,22 L22,3.99999996 Z',
      id: 'EditorModeCommentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mode_comment',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorModeCommentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorModeCommentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorModeCommentIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorModeCommentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
