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
  title: ['format_align_right'],
  paths: [
    {
      d:
        'M3.99999996,21 L20,21 C20.55,21 21,20.55 21,20 C21,19.45 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M9.99999999,17 L20,17 C20.55,17 21,16.55 21,16 C21,15.45 20.55,15 20,15 L9.99999999,15 C9.44999999,15 8.99999999,15.45 8.99999999,16 C8.99999999,16.55 9.44999999,17 9.99999999,17 Z M3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M9.99999999,8.99999998 L20,8.99999998 C20.55,8.99999998 21,8.54999999 21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 L9.99999999,6.99999998 C9.44999999,6.99999998 8.99999999,7.44999998 8.99999999,7.99999998 C8.99999999,8.54999999 9.44999999,8.99999998 9.99999999,8.99999998 Z M2.99999996,3.99999996 C2.99999996,4.54999997 3.44999996,4.99999996 3.99999996,4.99999996 L20,4.99999996 C20.55,4.99999996 21,4.54999997 21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 Z',
      id: 'EditorFormatAlignRightIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_align_right',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatAlignRightIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatAlignRightIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatAlignRightIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatAlignRightIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
