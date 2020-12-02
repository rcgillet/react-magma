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
    "next_week"
  ],
  "paths": [
    {
      "d": "M20,6.99999996 L16,6.99999996 L16,4.99999996 C16,4.44999997 15.78,3.94999997 15.41,3.58999996 C15.05,3.21999996 14.55,2.99999996 14,2.99999996 L9.99999996,2.99999996 C8.89999999,2.99999996 7.99999996,3.89999997 7.99999996,4.99999996 L7.99999996,6.99999996 L3.99999996,6.99999996 C2.89999996,6.99999996 1.99999996,7.89999998 1.99999996,8.99999996 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,8.99999996 C22,7.89999998 21.1,6.99999996 20,6.99999996 Z M9.99999999,4.99999997 L14,4.99999997 L14,6.99999997 L9.99999999,6.99999997 L9.99999999,4.99999997 Z M10.5,18 C10.22,17.72 10.22,17.28 10.5,17 L13,14.5 L10.5,12 C10.22,11.72 10.22,11.28 10.5,11 C10.78,10.72 11.22,10.72 11.5,11 L14.65,14.15 C14.85,14.35 14.85,14.66 14.65,14.86 L11.5,18 C11.22,18.28 10.78,18.28 10.5,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "next_week",
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

export const ContentNextWeekIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    