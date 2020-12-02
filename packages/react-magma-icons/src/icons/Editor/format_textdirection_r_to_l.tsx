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
  title: ['format_textdirection_r_to_l'],
  paths: [
    {
      d:
        'M9.99999999,9.99999996 L9.99999999,14 C9.99999999,14.55 10.45,15 11,15 C11.55,15 12,14.55 12,14 L12,3.99999996 L14,3.99999996 L14,14 C14,14.55 14.45,15 15,15 C15.55,15 16,14.55 16,14 L16,3.99999996 L17,3.99999996 C17.55,3.99999996 18,3.54999996 18,2.99999996 C18,2.44999996 17.55,1.99999996 17,1.99999996 L10.17,1.99999996 C8.07999998,1.99999996 6.21999998,3.52999996 6.01999998,5.60999997 C5.78999997,7.98999998 7.65999998,9.99999996 9.99999999,9.99999996 Z M7.99999998,17 L7.99999998,15.21 C7.99999998,14.76 7.45999998,14.54 7.14999998,14.86 L4.35999997,17.65 C4.15999997,17.85 4.15999997,18.16 4.35999997,18.36 L7.14999998,21.15 C7.45999998,21.46 7.99999998,21.24 7.99999998,20.79 L7.99999998,19 L19,19 C19.55,19 20,18.55 20,18 C20,17.45 19.55,17 19,17 L7.99999998,17 Z',
      id: 'EditorFormatTextdirectionRToLIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_textdirection_r_to_l',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatTextdirectionRToLIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatTextdirectionRToLIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatTextdirectionRToLIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatTextdirectionRToLIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
