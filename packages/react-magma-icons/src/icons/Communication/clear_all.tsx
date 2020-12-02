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
    "clear_all"
  ],
  "paths": [
    {
      "d": "M5.99999997,13 L18,13 C18.55,13 19,12.55 19,12 C19,11.45 18.55,11 18,11 L5.99999997,11 C5.44999997,11 4.99999997,11.45 4.99999997,12 C4.99999997,12.55 5.44999997,13 5.99999997,13 Z M3.99999996,17 L16,17 C16.55,17 17,16.55 17,16 C17,15.45 16.55,15 16,15 L3.99999996,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 C2.99999996,16.55 3.44999996,17 3.99999996,17 Z M6.99999998,7.99999998 C6.99999998,8.54999999 7.44999998,8.99999998 7.99999998,8.99999998 L20,8.99999998 C20.55,8.99999998 21,8.54999999 21,7.99999998 C21,7.44999998 20.55,6.99999998 20,6.99999998 L7.99999998,6.99999998 C7.44999998,6.99999998 6.99999998,7.44999998 6.99999998,7.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "clear_all",
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

export const CommunicationClearAllIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    