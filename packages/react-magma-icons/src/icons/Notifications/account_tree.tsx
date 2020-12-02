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
    "account_tree"
  ],
  "paths": [
    {
      "d": "M17,11 L20,11 C21.11,11 22,10.1 22,8.99999996 L22,4.99999996 C22,3.88999997 21.1,2.99999996 20,2.99999996 L17,2.99999996 C15.89,2.99999996 15,3.89999997 15,4.99999996 L15,5.99999996 L9.00999999,5.99999996 L9.00999999,4.99999996 C9.00999999,3.88999997 8.10999998,2.99999996 7.00999998,2.99999996 L3.99999996,2.99999996 C2.89999996,2.99999996 1.99999996,3.89999997 1.99999996,4.99999996 L1.99999996,8.99999996 C1.99999996,10.11 2.89999996,11 3.99999996,11 L6.99999996,11 C8.10999998,11 8.99999996,10.1 8.99999996,8.99999996 L8.99999996,7.99999996 L11,7.99999996 L11,15.01 C11,16.66 12.34,18 13.99,18 L15,18 L15,19 C15,20.11 15.9,21 17,21 L20,21 C21.11,21 22,20.1 22,19 L22,15 C22,13.89 21.1,13 20,13 L17,13 C15.89,13 15,13.9 15,15 L15,16 L13.99,16 C13.45,16 13,15.55 13,15.01 L13,7.99999996 L15,7.99999996 L15,8.99999996 C15,10.1 15.9,11 17,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "account_tree",
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

export const NotificationsAccountTreeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    