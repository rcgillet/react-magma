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
    "pageview"
  ],
  "paths": [
    {
      "d": "M11.5,8.99999999 C10.12,8.99999999 8.99999999,10.12 8.99999999,11.5 C8.99999999,12.88 10.12,14 11.5,14 C12.88,14 14,12.88 14,11.5 C14,10.12 12.88,8.99999999 11.5,8.99999999 Z M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M16.08,17.5 L13.88,15.3 C12.98,15.88 11.85,16.14 10.66,15.92 C8.77999999,15.57 7.27999998,13.99 7.03999998,12.09 C6.65999998,9.07999999 9.21999999,6.56999998 12.25,7.04999998 C14.13,7.34999998 15.64,8.88999999 15.95,10.76 C16.14,11.92 15.87,12.99 15.31,13.88 L17.51,16.07 C17.9,16.46 17.9,17.1 17.51,17.49 C17.11,17.89 16.47,17.89 16.08,17.5 L16.08,17.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "pageview",
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

export const ActionsPageviewIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    