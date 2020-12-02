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
    "flip_to_front"
  ],
  "paths": [
    {
      "d": "M2.99999996,13 L4.99999996,13 L4.99999996,11 L2.99999996,11 L2.99999996,13 Z M2.99999996,17 L4.99999996,17 L4.99999996,15 L2.99999996,15 L2.99999996,17 Z M4.99999996,21 L4.99999996,19 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 Z M2.99999996,8.99999998 L4.99999996,8.99999998 L4.99999996,6.99999998 L2.99999996,6.99999998 L2.99999996,8.99999998 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M19,2.99999996 L8.99999998,2.99999996 C7.88999998,2.99999996 6.99999998,3.89999997 6.99999998,4.99999996 L6.99999998,15 C6.99999998,16.1 7.88999998,17 8.99999998,17 L19,17 C20.1,17 21,16.1 21,15 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M18,15 L9.99999999,15 C9.44999999,15 8.99999999,14.55 8.99999999,14 L8.99999999,5.99999997 C8.99999999,5.44999997 9.44999999,4.99999997 9.99999999,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,14 C19,14.55 18.55,15 18,15 Z M11,21 L13,21 L13,19 L11,19 L11,21 Z M6.99999998,21 L8.99999998,21 L8.99999998,19 L6.99999998,19 L6.99999998,21 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "flip_to_front",
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

export const ActionsFlipToFrontIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    