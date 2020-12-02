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
    "refresh"
  ],
  "paths": [
    {
      "d": "M17.65,6.34999998 C16.02,4.71999997 13.71,3.77999997 11.17,4.03999997 C7.49999998,4.40999997 4.47999997,7.38999998 4.06999997,11.06 C3.51999996,15.91 7.26999998,20 12,20 C15.19,20 17.93,18.13 19.21,15.44 C19.53,14.77 19.05,14 18.31,14 C17.94,14 17.59,14.2 17.43,14.53 C16.3,16.96 13.59,18.5 10.63,17.84 C8.40999999,17.35 6.61999998,15.54 6.14999998,13.32 C5.30999997,9.43999999 8.25999998,5.99999998 12,5.99999998 C13.66,5.99999998 15.14,6.68999998 16.22,7.77999998 L14.71,9.28999999 C14.08,9.91999999 14.52,11 15.41,11 L19,11 C19.55,11 20,10.55 20,9.99999999 L20,6.40999998 C20,5.51999997 18.92,5.06999997 18.29,5.69999997 L17.65,6.34999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "refresh",
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

export const NavigationRefreshIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    