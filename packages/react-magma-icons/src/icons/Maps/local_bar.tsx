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
    "local_bar"
  ],
  "paths": [
    {
      "d": "M21,4.44999997 C21,3.64999997 20.35,2.99999996 19.55,2.99999996 L4.44999997,2.99999996 C3.64999997,2.99999996 2.99999996,3.64999997 2.99999996,4.44999997 C2.99999996,4.79999997 3.12999996,5.14999997 3.36999996,5.40999997 L11,14 L11,19 L6.99999996,19 C6.44999998,19 5.99999996,19.45 5.99999996,20 C5.99999996,20.55 6.44999998,21 6.99999996,21 L17,21 C17.55,21 18,20.55 18,20 C18,19.45 17.55,19 17,19 L13,19 L13,14 L20.63,5.40999997 C20.87,5.14999997 21,4.79999997 21,4.44999997 Z M7.42999998,6.99999997 L5.65999997,4.99999997 L18.35,4.99999997 L16.57,6.99999997 L7.42999998,6.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_bar",
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

export const MapsLocalBarIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    