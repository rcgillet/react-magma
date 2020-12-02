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
    "line_weight"
  ],
  "paths": [
    {
      "d": "M20,15 L3.99999996,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 C2.99999996,16.55 3.44999996,17 3.99999996,17 L20,17 C20.55,17 21,16.55 21,16 C21,15.45 20.55,15 20,15 Z M20,9.99999999 L3.99999996,9.99999999 C3.44999996,9.99999999 2.99999996,10.45 2.99999996,11 L2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 L21,11 C21,10.45 20.55,9.99999999 20,9.99999999 Z M20,3.99999997 L3.99999996,3.99999997 C3.44999996,3.99999997 2.99999996,4.44999997 2.99999996,4.99999997 L2.99999996,6.99999997 C2.99999996,7.54999998 3.44999996,7.99999997 3.99999996,7.99999997 L20,7.99999997 C20.55,7.99999997 21,7.54999998 21,6.99999997 L21,4.99999997 C21,4.44999997 20.55,3.99999997 20,3.99999997 Z M20.5,19 L3.49999996,19 C3.21999996,19 2.99999996,19.22 2.99999996,19.5 C2.99999996,19.78 3.21999996,20 3.49999996,20 L20.5,20 C20.78,20 21,19.78 21,19.5 C21,19.22 20.78,19 20.5,19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "line_weight",
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

export const ActionsLineWeightIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    