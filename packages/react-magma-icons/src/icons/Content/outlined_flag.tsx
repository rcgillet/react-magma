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
    "outlined_flag"
  ],
  "paths": [
    {
      "d": "M14,5.99999997 L13.28,4.54999997 C13.11,4.20999997 12.76,3.99999997 12.38,3.99999997 L5.99999997,3.99999997 C5.44999997,3.99999997 4.99999997,4.44999997 4.99999997,4.99999997 L4.99999997,20 C4.99999997,20.55 5.44999997,21 5.99999997,21 C6.54999998,21 6.99999997,20.55 6.99999997,20 L6.99999997,14 L12,14 L12.72,15.45 C12.89,15.79 13.24,16 13.61,16 L19,16 C19.55,16 20,15.55 20,15 L20,6.99999997 C20,6.44999998 19.55,5.99999997 19,5.99999997 L14,5.99999997 Z M18,14 L14,14 L13,12 L6.99999998,12 L6.99999998,5.99999997 L12,5.99999997 L13,7.99999997 L18,7.99999997 L18,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "outlined_flag",
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

export const ContentOutlinedFlagIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    