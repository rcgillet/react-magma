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
    "tablet"
  ],
  "paths": [
    {
      "d": "M21,3.99999997 L2.99999995,3.99999997 C1.89999996,3.99999997 0.999999954,4.89999997 0.999999954,5.99999997 L0.999999954,18 C0.999999954,19.1 1.89999996,20 2.99999995,20 L21,20 C22.1,20 22.99,19.1 22.99,18 L23,5.99999997 C23,4.89999997 22.1,3.99999997 21,3.99999997 Z M19,18 L4.99999997,18 L4.99999997,5.99999997 L19,5.99999997 L19,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "tablet",
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

export const HardwareTabletIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    