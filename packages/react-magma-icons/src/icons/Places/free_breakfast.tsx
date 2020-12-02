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
    "free_breakfast"
  ],
  "paths": [
    {
      "d": "M20,2.99999996 L5.99999997,2.99999996 C4.89999997,2.99999996 3.99999997,3.89999997 3.99999997,4.99999996 L3.99999997,13 C3.99999997,15.21 5.78999997,17 7.99999997,17 L14,17 C16.21,17 18,15.21 18,13 L18,9.99999996 L20,9.99999996 C21.11,9.99999996 22,9.09999999 22,7.99999996 L22,4.99999996 C22,3.89999997 21.1,2.99999996 20,2.99999996 Z M20,7.99999997 L18,7.99999997 L18,4.99999997 L20,4.99999997 L20,7.99999997 Z M4.99999997,19 L19,19 C19.55,19 20,19.45 20,20 C20,20.55 19.55,21 19,21 L4.99999997,21 C4.44999997,21 3.99999997,20.55 3.99999997,20 C3.99999997,19.45 4.44999997,19 4.99999997,19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "free_breakfast",
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

export const PlacesFreeBreakfastIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    