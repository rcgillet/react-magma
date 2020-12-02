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
    "local_cafe"
  ],
  "paths": [
    {
      "d": "M20,2.99999996 L5.99999997,2.99999996 C4.89999997,2.99999996 3.99999997,3.89999997 3.99999997,4.99999996 L3.99999997,13 C3.99999997,15.21 5.78999997,17 7.99999997,17 L14,17 C16.21,17 18,15.21 18,13 L18,9.99999996 L20,9.99999996 C21.1,9.99999996 22,9.09999999 22,7.99999996 L22,4.99999996 C22,3.89999997 21.1,2.99999996 20,2.99999996 Z M20,7.99999997 L18,7.99999997 L18,4.99999997 L20,4.99999997 L20,7.99999997 Z M2.99999996,21 L19,21 C19.55,21 20,20.55 20,20 C20,19.45 19.55,19 19,19 L2.99999996,19 C2.44999996,19 1.99999996,19.45 1.99999996,20 C1.99999996,20.55 2.44999996,21 2.99999996,21 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_cafe",
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

export const MapsLocalCafeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    