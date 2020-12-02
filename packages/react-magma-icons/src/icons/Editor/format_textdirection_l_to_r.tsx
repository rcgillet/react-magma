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
  title: ['format_textdirection_l_to_r'],
  paths: [
    {
      d:
        'M8.99999999,9.99999996 L8.99999999,14 C8.99999999,14.55 9.44999999,15 9.99999999,15 C10.55,15 11,14.55 11,14 L11,3.99999996 L13,3.99999996 L13,14 C13,14.55 13.45,15 14,15 C14.55,15 15,14.55 15,14 L15,3.99999996 L16,3.99999996 C16.55,3.99999996 17,3.54999996 17,2.99999996 C17,2.44999996 16.55,1.99999996 16,1.99999996 L9.16999999,1.99999996 C7.07999998,1.99999996 5.21999997,3.52999996 5.01999997,5.60999997 C4.78999997,7.98999998 6.65999998,9.99999996 8.99999999,9.99999996 Z M20.65,17.65 L17.86,14.86 C17.54,14.54 17,14.76 17,15.21 L17,17 L5.99999997,17 C5.44999997,17 4.99999997,17.45 4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 L17,19 L17,20.79 C17,21.24 17.54,21.46 17.85,21.14 L20.64,18.35 C20.84,18.16 20.84,17.84 20.65,17.65 L20.65,17.65 Z',
      id: 'EditorFormatTextdirectionLToRIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_textdirection_l_to_r',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatTextdirectionLToRIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatTextdirectionLToRIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatTextdirectionLToRIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatTextdirectionLToRIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
