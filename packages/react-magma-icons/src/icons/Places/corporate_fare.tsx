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
    "corporate_fare"
  ],
  "paths": [
    {
      "d": "M12,6.99999996 L12,4.99999996 C12,3.89999997 11.1,2.99999996 9.99999996,2.99999996 L3.99999996,2.99999996 C2.89999996,2.99999996 1.99999996,3.89999997 1.99999996,4.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,8.99999996 C22,7.89999998 21.1,6.99999996 20,6.99999996 L12,6.99999996 Z M9.99999997,19 L3.99999997,19 L3.99999997,17 L9.99999997,17 L9.99999997,19 Z M9.99999997,15 L3.99999997,15 L3.99999997,13 L9.99999997,13 L9.99999997,15 Z M9.99999997,11 L3.99999997,11 L3.99999997,8.99999999 L9.99999997,8.99999999 L9.99999997,11 Z M9.99999997,6.99999997 L3.99999997,6.99999997 L3.99999997,4.99999997 L9.99999997,4.99999997 L9.99999997,6.99999997 Z M20,19 L12,19 L12,8.99999999 L20,8.99999999 L20,19 Z M18,11 L14,11 L14,13 L18,13 L18,11 Z M18,15 L14,15 L14,17 L18,17 L18,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "corporate_fare",
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

export const PlacesCorporateFareIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    