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
    "looks_5"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M14,8.99999998 L11,8.99999998 L11,11 L13,11 C14.1,11 15,11.9 15,13 L15,15 C15,16.11 14.1,17 13,17 L9.99999999,17 C9.44999999,17 8.99999999,16.55 8.99999999,16 C8.99999999,15.45 9.44999999,15 9.99999999,15 L13,15 L13,13 L9.99999999,13 C9.44999999,13 8.99999999,12.55 8.99999999,12 L8.99999999,7.99999998 C8.99999999,7.44999998 9.44999999,6.99999998 9.99999999,6.99999998 L14,6.99999998 C14.55,6.99999998 15,7.44999998 15,7.99999998 C15,8.54999999 14.55,8.99999998 14,8.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "looks_5",
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

export const ImageLooks5Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    