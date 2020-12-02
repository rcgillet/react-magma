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
    "sort"
  ],
  "paths": [
    {
      "d": "M3.99999996,18 L7.99999996,18 C8.54999999,18 8.99999996,17.55 8.99999996,17 C8.99999996,16.45 8.54999999,16 7.99999996,16 L3.99999996,16 C3.44999996,16 2.99999996,16.45 2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 Z M2.99999996,6.99999997 C2.99999996,7.54999998 3.44999996,7.99999997 3.99999996,7.99999997 L20,7.99999997 C20.55,7.99999997 21,7.54999998 21,6.99999997 C21,6.44999998 20.55,5.99999997 20,5.99999997 L3.99999996,5.99999997 C3.44999996,5.99999997 2.99999996,6.44999998 2.99999996,6.99999997 Z M3.99999996,13 L14,13 C14.55,13 15,12.55 15,12 C15,11.45 14.55,11 14,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sort",
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

export const ContentSortIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    