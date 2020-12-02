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
    "login"
  ],
  "paths": [
    {
      "d": "M10.3,7.69999998 L10.3,7.69999998 C9.90999999,8.08999998 9.90999999,8.70999999 10.3,9.09999999 L12.2,11 L2.99999996,11 C2.44999996,11 1.99999996,11.45 1.99999996,12 L1.99999996,12 C1.99999996,12.55 2.44999996,13 2.99999996,13 L12.2,13 L10.3,14.9 C9.90999999,15.29 9.90999999,15.91 10.3,16.3 L10.3,16.3 C10.69,16.69 11.31,16.69 11.7,16.3 L15.29,12.71 C15.68,12.32 15.68,11.69 15.29,11.3 L11.7,7.69999998 C11.31,7.30999998 10.69,7.30999998 10.3,7.69999998 Z M20,19 L13,19 C12.45,19 12,19.45 12,20 L12,20 C12,20.55 12.45,21 13,21 L20,21 C21.1,21 22,20.1 22,19 L22,4.99999996 C22,3.89999997 21.1,2.99999996 20,2.99999996 L13,2.99999996 C12.45,2.99999996 12,3.44999996 12,3.99999996 L12,3.99999996 C12,4.54999997 12.45,4.99999996 13,4.99999996 L20,4.99999996 L20,19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "login",
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

export const ActionsLoginIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    