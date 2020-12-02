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
    "filter_list"
  ],
  "paths": [
    {
      "d": "M11,18 L13,18 C13.55,18 14,17.55 14,17 C14,16.45 13.55,16 13,16 L11,16 C10.45,16 9.99999999,16.45 9.99999999,17 C9.99999999,17.55 10.45,18 11,18 Z M2.99999996,6.99999997 C2.99999996,7.54999998 3.44999996,7.99999997 3.99999996,7.99999997 L20,7.99999997 C20.55,7.99999997 21,7.54999998 21,6.99999997 C21,6.44999998 20.55,5.99999997 20,5.99999997 L3.99999996,5.99999997 C3.44999996,5.99999997 2.99999996,6.44999998 2.99999996,6.99999997 Z M6.99999998,13 L17,13 C17.55,13 18,12.55 18,12 C18,11.45 17.55,11 17,11 L6.99999998,11 C6.44999998,11 5.99999998,11.45 5.99999998,12 C5.99999998,12.55 6.44999998,13 6.99999998,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "filter_list",
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

export const ContentFilterListIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    