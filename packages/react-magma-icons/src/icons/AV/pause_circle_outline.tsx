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
    "pause_circle_outline"
  ],
  "paths": [
    {
      "d": "M9.99999999,16 C10.55,16 11,15.55 11,15 L11,8.99999998 C11,8.44999999 10.55,7.99999998 9.99999999,7.99999998 C9.44999999,7.99999998 8.99999999,8.44999999 8.99999999,8.99999998 L8.99999999,15 C8.99999999,15.55 9.44999999,16 9.99999999,16 Z M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 Z M14,16 C14.55,16 15,15.55 15,15 L15,8.99999998 C15,8.44999999 14.55,7.99999998 14,7.99999998 C13.45,7.99999998 13,8.44999999 13,8.99999998 L13,15 C13,15.55 13.45,16 14,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "pause_circle_outline",
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

export const AVPauseCircleOutlineIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    