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
    "archive"
  ],
  "paths": [
    {
      "d": "M20.54,5.22999997 L19.15,3.54999996 C18.88,3.20999996 18.47,2.99999996 18,2.99999996 L5.99999996,2.99999996 C5.52999997,2.99999996 5.11999997,3.20999996 4.83999997,3.54999996 L3.45999996,5.22999997 C3.16999996,5.56999997 2.99999996,6.01999998 2.99999996,6.49999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.49999996 C21,6.01999998 20.83,5.56999997 20.54,5.22999997 Z M11.65,17.15 L6.49999998,12 L9.99999998,12 L9.99999998,9.99999999 L14,9.99999999 L14,12 L17.5,12 L12.35,17.15 C12.16,17.34 11.84,17.34 11.65,17.15 Z M5.11999997,4.99999997 L5.92999997,3.99999997 L17.93,3.99999997 L18.87,4.99999997 L5.11999997,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "archive",
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

export const ContentArchiveIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    