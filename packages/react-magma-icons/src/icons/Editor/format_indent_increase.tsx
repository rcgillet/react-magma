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
  title: ['format_indent_increase'],
  paths: [
    {
      d:
        'M3.99999996,21 L20,21 C20.55,21 21,20.55 21,20 C21,19.45 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M2.99999996,9.20999999 L2.99999996,14.8 C2.99999996,15.25 3.53999996,15.47 3.84999997,15.15 L6.63999998,12.36 C6.83999998,12.16 6.83999998,11.85 6.63999998,11.65 L3.84999997,8.84999999 C3.53999996,8.53999999 2.99999996,8.75999999 2.99999996,9.20999999 L2.99999996,9.20999999 Z M12,17 L20,17 C20.55,17 21,16.55 21,16 C21,15.45 20.55,15 20,15 L12,15 C11.45,15 11,15.45 11,16 C11,16.55 11.45,17 12,17 Z M2.99999996,3.99999996 C2.99999996,4.54999997 3.44999996,4.99999996 3.99999996,4.99999996 L20,4.99999996 C20.55,4.99999996 21,4.54999997 21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 Z M12,8.99999998 L20,8.99999998 C20.55,8.99999998 21,8.54999999 21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 L12,6.99999998 C11.45,6.99999998 11,7.44999998 11,7.99999998 C11,8.54999999 11.45,8.99999998 12,8.99999998 Z M12,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L12,11 C11.45,11 11,11.45 11,12 C11,12.55 11.45,13 12,13 Z',
      id: 'EditorFormatIndentIncreaseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_indent_increase',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatIndentIncreaseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatIndentIncreaseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatIndentIncreaseIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatIndentIncreaseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
