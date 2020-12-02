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
  title: ['format_align_center'],
  paths: [
    {
      d:
        'M6.99999998,16 C6.99999998,16.55 7.44999998,17 7.99999998,17 L16,17 C16.55,17 17,16.55 17,16 C17,15.45 16.55,15 16,15 L7.99999998,15 C7.44999998,15 6.99999998,15.45 6.99999998,16 Z M3.99999996,21 L20,21 C20.55,21 21,20.55 21,20 C21,19.45 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M6.99999998,7.99999998 C6.99999998,8.54999999 7.44999998,8.99999998 7.99999998,8.99999998 L16,8.99999998 C16.55,8.99999998 17,8.54999999 17,7.99999998 C17,7.44999998 16.55,6.99999998 16,6.99999998 L7.99999998,6.99999998 C7.44999998,6.99999998 6.99999998,7.44999998 6.99999998,7.99999998 Z M2.99999996,3.99999996 C2.99999996,4.54999997 3.44999996,4.99999996 3.99999996,4.99999996 L20,4.99999996 C20.55,4.99999996 21,4.54999997 21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 Z',
      id: 'EditorFormatAlignCenterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_align_center',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatAlignCenterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatAlignCenterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatAlignCenterIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatAlignCenterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
