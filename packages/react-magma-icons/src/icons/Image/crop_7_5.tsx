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
    "crop_7_5"
  ],
  "paths": [
    {
      "d": "M19,6.99999998 L4.99999996,6.99999998 C3.89999997,6.99999998 2.99999996,7.89999998 2.99999996,8.99999998 L2.99999996,15 C2.99999996,16.1 3.89999997,17 4.99999996,17 L19,17 C20.1,17 21,16.1 21,15 L21,8.99999998 C21,7.89999998 20.1,6.99999998 19,6.99999998 Z M18,15 L5.99999997,15 C5.44999997,15 4.99999997,14.55 4.99999997,14 L4.99999997,9.99999999 C4.99999997,9.44999999 5.44999997,8.99999999 5.99999997,8.99999999 L18,8.99999999 C18.55,8.99999999 19,9.44999999 19,9.99999999 L19,14 C19,14.55 18.55,15 18,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "crop_7_5",
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

export const ImageCrop75Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    