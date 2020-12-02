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
    "tab"
  ],
  "paths": [
    {
      "d": "M21,2.99999996 C22.1,2.99999996 23,3.89999997 23,4.99999996 L23,4.99999996 L23,19 C23,20.1 22.1,21 21,21 L21,21 L2.99999995,21 C1.89999996,21 0.999999954,20.1 0.999999954,19 L0.999999954,19 L0.999999954,4.99999996 C0.999999954,3.89999997 1.89999996,2.99999996 2.99999995,2.99999996 L2.99999995,2.99999996 Z M13,4.99999997 L3.99999996,4.99999997 C3.44999996,4.99999997 2.99999996,5.44999997 2.99999996,5.99999997 L2.99999996,5.99999997 L2.99999996,18 C2.99999996,18.55 3.44999996,19 3.99999996,19 L3.99999996,19 L20,19 C20.55,19 21,18.55 21,18 L21,18 L21,8.99999997 L14,8.99999997 C13.45,8.99999997 13,8.54999999 13,7.99999997 L13,7.99999997 L13,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "tab",
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

export const ActionsTabIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    