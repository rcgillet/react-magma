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
    "toggle_off"
  ],
  "paths": [
    {
      "d": "M17,6.99999998 L6.99999996,6.99999998 C4.23999997,6.99999998 1.99999996,9.23999999 1.99999996,12 C1.99999996,14.76 4.23999997,17 6.99999996,17 L17,17 C19.76,17 22,14.76 22,12 C22,9.23999999 19.76,6.99999998 17,6.99999998 Z M6.99999997,15 C5.33999997,15 3.99999997,13.66 3.99999997,12 C3.99999997,10.34 5.33999997,8.99999999 6.99999997,8.99999999 C8.65999999,8.99999999 9.99999997,10.34 9.99999997,12 C9.99999997,13.66 8.65999999,15 6.99999997,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "toggle_off",
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
          "id": "Combined-Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const ToggleToggleOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    