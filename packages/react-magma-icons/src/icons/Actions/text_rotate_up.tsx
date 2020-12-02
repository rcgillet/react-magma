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
    "text_rotate_up"
  ],
  "paths": [
    {
      "d": "M18.35,4.34999997 C18.15,4.14999997 17.84,4.14999997 17.64,4.34999997 L15.85,6.13999998 C15.54,6.45999998 15.76,6.99999998 16.21,6.99999998 L17,6.99999998 L17,19 C17,19.55 17.45,20 18,20 C18.55,20 19,19.55 19,19 L19,6.99999998 L19.79,6.99999998 C20.24,6.99999998 20.46,6.45999998 20.14,6.14999998 L18.35,4.34999997 Z M11.8,15.5 L11.8,10.5 L13.4,9.83999999 C13.76,9.69999999 14,9.34999999 14,8.95999999 C14,8.26999998 13.29,7.80999998 12.66,8.07999998 L3.68999997,11.96 C3.26999996,12.13 2.99999996,12.54 2.99999996,13 C2.99999996,13.46 3.26999996,13.87 3.68999997,14.05 L12.66,17.93 C13.29,18.2 14,17.73 14,17.04 C14,16.65 13.76,16.3 13.4,16.15 L11.8,15.5 L11.8,15.5 Z M4.97999997,13 L9.99999999,11.13 L9.99999999,14.87 L4.97999997,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "text_rotate_up",
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

export const ActionsTextRotateUpIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    