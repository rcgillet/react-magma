import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  "width": "24px",
  "height": "24px",
  "viewBox": "0 0 24 24",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "title": [
    "keyboard_hide"
  ],
  "paths": [
    {
      "d": "M20,2.99999996 L3.99999996,2.99999996 C2.89999996,2.99999996 2.00999996,3.89999997 2.00999996,4.99999996 L1.99999996,15 C1.99999996,16.1 2.89999996,17 3.99999996,17 L20,17 C21.1,17 22,16.1 22,15 L22,4.99999996 C22,3.89999997 21.1,2.99999996 20,2.99999996 Z M11,5.99999998 L13,5.99999998 L13,7.99999998 L11,7.99999998 L11,5.99999998 Z M11,8.99999999 L13,8.99999999 L13,11 L11,11 L11,8.99999999 Z M7.99999998,5.99999998 L9.99999998,5.99999998 L9.99999998,7.99999998 L7.99999998,7.99999998 L7.99999998,5.99999998 Z M7.99999998,8.99999999 L9.99999998,8.99999999 L9.99999998,11 L7.99999998,11 L7.99999998,8.99999999 Z M6.99999997,11 L4.99999997,11 L4.99999997,8.99999999 L6.99999997,8.99999999 L6.99999997,11 Z M6.99999997,7.99999998 L4.99999997,7.99999998 L4.99999997,5.99999998 L6.99999997,5.99999998 L6.99999997,7.99999998 Z M15,15 L8.99999998,15 C8.44999999,15 7.99999998,14.55 7.99999998,14 C7.99999998,13.45 8.44999999,13 8.99999998,13 L15,13 C15.55,13 16,13.45 16,14 C16,14.55 15.55,15 15,15 Z M16,11 L14,11 L14,8.99999999 L16,8.99999999 L16,11 Z M16,7.99999998 L14,7.99999998 L14,5.99999998 L16,5.99999998 L16,7.99999998 Z M19,11 L17,11 L17,8.99999999 L19,8.99999999 L19,11 Z M19,7.99999998 L17,7.99999998 L17,5.99999998 L19,5.99999998 L19,7.99999998 Z M12.35,22.65 L15.14,19.86 C15.45,19.55 15.23,19.01 14.79,19.01 L9.20999999,19.01 C8.75999999,19.01 8.53999999,19.55 8.85999999,19.86 L11.65,22.65 C11.84,22.84 12.16,22.84 12.35,22.65 L12.35,22.65 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "keyboard_hide",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd",
      "masks": [
        {
          "id": "mask-2",
          "fill": "white",
          "uses": [
            {
              "xlink:href": "#path-1"
            }
          ]
        }
      ],
      "uses": [
        {
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const HardwareKeyboardHideIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    