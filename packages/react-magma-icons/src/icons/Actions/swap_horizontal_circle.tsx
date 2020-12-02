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
    "swap_horizontal_circle"
  ],
  "paths": [
    {
      "d": "M22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 Z M15,6.49999998 L18.15,9.64999999 C18.35,9.84999999 18.35,10.16 18.15,10.36 L15,13.5 L15,11 L11,11 L11,8.99999998 L15,8.99999998 L15,6.49999998 Z M8.99999999,17.5 L5.84999997,14.35 C5.64999997,14.15 5.64999997,13.84 5.84999997,13.64 L8.99999999,10.5 L8.99999999,13 L13,13 L13,15 L8.99999999,15 L8.99999999,17.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "swap_horizontal_circle",
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

export const ActionsSwapHorizontalCircleIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    