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
    "last_page"
  ],
  "paths": [
    {
      "d": "M6.28999998,8.10999998 L10.18,12 L6.28999998,15.89 C5.89999997,16.28 5.89999997,16.91 6.28999998,17.3 C6.67999998,17.69 7.30999998,17.69 7.69999998,17.3 L12.29,12.71 C12.68,12.32 12.68,11.69 12.29,11.3 L7.69999998,6.69999998 C7.30999998,6.30999998 6.67999998,6.30999998 6.28999998,6.69999998 C5.90999997,7.08999998 5.90999997,7.72999998 6.28999998,8.10999998 Z M17,5.99999998 C17.55,5.99999998 18,6.44999998 18,6.99999998 L18,17 C18,17.55 17.55,18 17,18 C16.45,18 16,17.55 16,17 L16,6.99999998 C16,6.44999998 16.45,5.99999998 17,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "last_page",
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

export const NavigationLastPageIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    