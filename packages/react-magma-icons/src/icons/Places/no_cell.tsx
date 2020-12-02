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
    "no_cell"
  ],
  "paths": [
    {
      "d": "M8.82999999,5.99999995 L5.12999997,2.29999996 C5.41999997,1.54999996 6.14999998,0.999999954 6.99999998,0.999999954 L17,1.00999995 C18.1,1.00999995 19,1.89999996 19,2.99999995 L19,16.17 L17,14.17 L17,5.99999995 L8.82999999,5.99999995 Z M20.49,21.9 C20.1,22.29 19.47,22.29 19.08,21.9 L18.88,21.7 C18.58,22.45 17.85,23 17,23 L6.99999998,23 C5.89999997,23 4.99999997,22.1 4.99999997,21 L4.99999997,7.82999998 L2.09999996,4.92999997 C1.70999996,4.53999997 1.70999996,3.90999997 2.09999996,3.51999996 C2.48999996,3.12999996 3.11999996,3.12999996 3.50999996,3.51999996 L20.48,20.49 C20.88,20.88 20.88,21.51 20.49,21.9 Z M15.17,18 L6.99999998,9.82999999 L6.99999998,18 L15.17,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "no_cell",
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

export const PlacesNoCellIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    