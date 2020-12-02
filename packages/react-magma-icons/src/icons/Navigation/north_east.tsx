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
    "north_east"
  ],
  "paths": [
    {
      "d": "M8.99999999,5.99999997 L8.99999999,5.99999997 C8.99999999,6.55999998 9.44999999,6.99999997 9.99999999,6.99999997 L15.59,6.99999997 L4.69999997,17.89 C4.30999997,18.28 4.30999997,18.91 4.69999997,19.3 L4.69999997,19.3 C5.08999997,19.69 5.71999997,19.69 6.10999998,19.3 L17,8.40999999 L17,14 C17,14.55 17.45,15 18,15 L18,15 C18.55,15 19,14.55 19,14 L19,5.99999997 C19,5.44999997 18.55,4.99999997 18,4.99999997 L9.99999999,4.99999997 C9.44999999,4.99999997 8.99999999,5.44999997 8.99999999,5.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "north_east",
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

export const NavigationNorthEastIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    