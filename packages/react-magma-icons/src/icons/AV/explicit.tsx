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
    "explicit"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M14,8.99999998 L11,8.99999998 L11,11 L14,11 C14.55,11 15,11.45 15,12 C15,12.55 14.55,13 14,13 L11,13 L11,15 L14,15 C14.55,15 15,15.45 15,16 C15,16.55 14.55,17 14,17 L9.99999999,17 C9.44999999,17 8.99999999,16.55 8.99999999,16 L8.99999999,7.99999998 C8.99999999,7.44999998 9.44999999,6.99999998 9.99999999,6.99999998 L14,6.99999998 C14.55,6.99999998 15,7.44999998 15,7.99999998 C15,8.54999999 14.55,8.99999998 14,8.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "explicit",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const AVExplicitIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    