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
  title: ['insert_comment'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,16 C1.99999996,17.1 2.89999996,18 3.99999996,18 L18,18 L22,22 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M17,14 L6.99999997,14 C6.44999998,14 5.99999997,13.55 5.99999997,13 C5.99999997,12.45 6.44999998,12 6.99999997,12 L17,12 C17.55,12 18,12.45 18,13 C18,13.55 17.55,14 17,14 Z M17,11 L6.99999997,11 C6.44999998,11 5.99999997,10.55 5.99999997,9.99999999 C5.99999997,9.44999999 6.44999998,8.99999999 6.99999997,8.99999999 L17,8.99999999 C17.55,8.99999999 18,9.44999999 18,9.99999999 C18,10.55 17.55,11 17,11 Z M17,7.99999997 L6.99999997,7.99999997 C6.44999998,7.99999997 5.99999997,7.54999998 5.99999997,6.99999997 C5.99999997,6.44999998 6.44999998,5.99999997 6.99999997,5.99999997 L17,5.99999997 C17.55,5.99999997 18,6.44999998 18,6.99999997 C18,7.54999998 17.55,7.99999997 17,7.99999997 Z',
      id: 'EditorInsertCommentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'insert_comment',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorInsertCommentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorInsertCommentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorInsertCommentIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorInsertCommentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
