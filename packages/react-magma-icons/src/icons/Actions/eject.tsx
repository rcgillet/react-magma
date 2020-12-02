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
    "eject"
  ],
  "paths": [
    {
      "d": "M5.99999997,17 L18,17 C18.55,17 19,17.45 19,18 C19,18.55 18.55,19 18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 C4.99999997,17.45 5.44999997,17 5.99999997,17 Z M11.17,6.24999998 L6.36999998,13.45 C5.91999997,14.11 6.39999998,15 7.19999998,15 L16.8,15 C17.6,15 18.08,14.11 17.63,13.45 L12.83,6.24999998 C12.44,5.64999997 11.56,5.64999997 11.17,6.24999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "eject",
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

export const ActionsEjectIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    