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
    "arrow_circle_down"
  ],
  "paths": [
    {
      "d": "M12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 L12,1.99999996 Z M13,12 L13,8.99999998 C13,8.44999999 12.55,7.99999998 12,7.99999998 L12,7.99999998 C11.45,7.99999998 11,8.44999999 11,8.99999998 L11,12 L9.20999999,12 C8.75999999,12 8.53999999,12.54 8.85999999,12.85 L11.65,15.64 C11.85,15.84 12.16,15.84 12.36,15.64 L15.15,12.85 C15.46,12.54 15.24,12 14.8,12 L13,12 L13,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "arrow_circle_down",
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

export const ActionsArrowCircleDownIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    