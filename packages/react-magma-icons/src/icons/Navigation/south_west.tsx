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
    "south_west"
  ],
  "paths": [
    {
      "d": "M15,18 L15,18 C15,17.44 14.55,17 14,17 L8.40999999,17 L19.3,6.10999998 C19.69,5.71999997 19.69,5.08999997 19.3,4.69999997 L19.3,4.69999997 C18.91,4.30999997 18.28,4.30999997 17.89,4.69999997 L6.99999997,15.59 L6.99999997,9.99999999 C6.99999997,9.44999999 6.54999998,8.99999999 5.99999997,8.99999999 L5.99999997,8.99999999 C5.44999997,8.99999999 4.99999997,9.44999999 4.99999997,9.99999999 L4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 L14,19 C14.55,19 15,18.55 15,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "south_west",
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

export const NavigationSouthWestIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    