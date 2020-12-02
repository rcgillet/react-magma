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
    "view_comfy"
  ],
  "paths": [
    {
      "d": "M2.99999996,8.99999997 L6.99999996,8.99999997 L6.99999996,4.99999997 L4.99999996,4.99999997 C3.89999997,4.99999997 2.99999996,5.89999997 2.99999996,6.99999997 L2.99999996,8.99999997 Z M2.99999996,14 L6.99999996,14 L6.99999996,9.99999999 L2.99999996,9.99999999 L2.99999996,14 Z M7.99999998,14 L12,14 L12,9.99999999 L7.99999998,9.99999999 L7.99999998,14 Z M13,14 L17,14 L17,9.99999999 L13,9.99999999 L13,14 Z M7.99999998,8.99999997 L12,8.99999997 L12,4.99999997 L7.99999998,4.99999997 L7.99999998,8.99999997 Z M13,4.99999997 L13,8.99999997 L17,8.99999997 L17,4.99999997 L13,4.99999997 Z M18,14 L22,14 L22,9.99999999 L18,9.99999999 L18,14 Z M4.99999996,19 L6.99999996,19 L6.99999996,15 L2.99999996,15 L2.99999996,17 C2.99999996,18.1 3.89999997,19 4.99999996,19 Z M7.99999998,19 L12,19 L12,15 L7.99999998,15 L7.99999998,19 Z M13,19 L17,19 L17,15 L13,15 L13,19 Z M18,19 L20,19 C21.1,19 22,18.1 22,17 L22,15 L18,15 L18,19 Z M18,4.99999997 L18,8.99999997 L22,8.99999997 L22,6.99999997 C22,5.89999997 21.1,4.99999997 20,4.99999997 L18,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "view_comfy",
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

export const ImageViewComfyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    