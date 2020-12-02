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
    "video_library"
  ],
  "paths": [
    {
      "d": "M2.99999996,5.99999997 C2.44999996,5.99999997 1.99999996,6.44999998 1.99999996,6.99999997 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L17,22 C17.55,22 18,21.55 18,21 C18,20.45 17.55,20 17,20 L4.99999996,20 C4.44999997,20 3.99999996,19.55 3.99999996,19 L3.99999996,6.99999997 C3.99999996,6.44999998 3.54999996,5.99999997 2.99999996,5.99999997 Z M20,1.99999996 L7.99999997,1.99999996 C6.89999998,1.99999996 5.99999997,2.89999996 5.99999997,3.99999996 L5.99999997,16 C5.99999997,17.1 6.89999998,18 7.99999997,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M12,14.5 L12,5.49999997 L17.47,9.59999999 C17.74,9.79999999 17.74,10.2 17.47,10.4 L12,14.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "video_library",
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

export const AVVideoLibraryIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    