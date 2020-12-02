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
    "mic"
  ],
  "paths": [
    {
      "d": "M12,14 C13.66,14 15,12.66 15,11 L15,4.99999996 C15,3.33999996 13.66,1.99999996 12,1.99999996 C10.34,1.99999996 8.99999999,3.33999996 8.99999999,4.99999996 L8.99999999,11 C8.99999999,12.66 10.34,14 12,14 Z M17.91,11 C17.42,11 17.01,11.36 16.93,11.85 C16.52,14.2 14.47,16 12,16 C9.52999999,16 7.47999998,14.2 7.06999998,11.85 C6.98999998,11.36 6.57999998,11 6.08999998,11 C5.47999997,11 4.99999997,11.54 5.08999997,12.14 C5.57999997,15.14 7.97999998,17.49 11,17.92 L11,20 C11,20.55 11.45,21 12,21 C12.55,21 13,20.55 13,20 L13,17.92 C16.02,17.49 18.42,15.14 18.91,12.14 C19.01,11.54 18.52,11 17.91,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "mic",
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

export const AVMicIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    