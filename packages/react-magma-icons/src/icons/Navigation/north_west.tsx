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
    "north_west"
  ],
  "paths": [
    {
      "d": "M5.99999997,15 L5.99999997,15 C6.55999998,15 6.99999997,14.55 6.99999997,14 L6.99999997,8.40999999 L17.89,19.3 C18.28,19.69 18.91,19.69 19.3,19.3 L19.3,19.3 C19.69,18.91 19.69,18.28 19.3,17.89 L8.40999999,6.99999997 L14,6.99999997 C14.55,6.99999997 15,6.54999998 15,5.99999997 L15,5.99999997 C15,5.44999997 14.55,4.99999997 14,4.99999997 L5.99999997,4.99999997 C5.44999997,4.99999997 4.99999997,5.44999997 4.99999997,5.99999997 L4.99999997,14 C4.99999997,14.55 5.44999997,15 5.99999997,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "north_west",
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

export const NavigationNorthWestIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    