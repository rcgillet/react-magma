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
    "polymer"
  ],
  "paths": [],
  "polygons": [
    {
      "id": "path-1",
      "points": "19 3.99999997 15 3.99999997 7.10999998 16.63 4.49999997 12 8.99999999 3.99999997 4.99999997 3.99999997 0.499999952 12 4.99999997 20 8.99999999 20 16.89 7.36999998 19.5 12 15 20 19 20 23.5 12"
    }
  ],
  "groups": [
    {
      "id": "polymer",
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

export const ActionsPolymerIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    