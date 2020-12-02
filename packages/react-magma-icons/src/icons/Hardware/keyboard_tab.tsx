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
    "keyboard_tab"
  ],
  "paths": [
    {
      "d": "M12.29,8.11999998 L15.17,11 L1.99999995,11 C1.44999996,11 0.999999954,11.45 0.999999954,12 C0.999999954,12.55 1.44999996,13 1.99999995,13 L15.17,13 L12.29,15.88 C11.9,16.27 11.9,16.9 12.29,17.29 C12.68,17.68 13.31,17.68 13.7,17.29 L18.29,12.7 C18.68,12.31 18.68,11.68 18.29,11.29 L13.7,6.69999998 C13.31,6.30999998 12.68,6.30999998 12.29,6.69999998 C11.91,7.08999998 11.9,7.72999998 12.29,8.11999998 Z M20,6.99999998 L20,17 C20,17.55 20.45,18 21,18 C21.55,18 22,17.55 22,17 L22,6.99999998 C22,6.44999998 21.55,5.99999998 21,5.99999998 C20.45,5.99999998 20,6.44999998 20,6.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "keyboard_tab",
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

export const HardwareKeyboardTabIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    