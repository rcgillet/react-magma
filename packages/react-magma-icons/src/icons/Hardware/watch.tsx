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
    "watch"
  ],
  "paths": [
    {
      "d": "M20,11.9999999 C20,9.45999999 18.81,7.18999998 16.96,5.72999997 L16.28,1.66999996 C16.12,0.709999953 15.28,-5.00000006e-08 14.31,-5.00000006e-08 L9.69999999,-5.00000006e-08 C8.71999999,-5.00000006e-08 7.87999998,0.709999953 7.71999998,1.66999996 L7.04999998,5.72999997 C5.18999997,7.18999998 3.99999997,9.44999999 3.99999997,11.9999999 C3.99999997,14.55 5.18999997,16.81 7.04999998,18.27 L7.71999998,22.33 C7.87999998,23.29 8.71999999,23.9999999 9.69999999,23.9999999 L14.31,23.9999999 C15.29,23.9999999 16.12,23.29 16.28,22.33 L16.96,18.27 C18.81,16.81 20,14.54 20,11.9999999 Z M5.99999997,12 C5.99999997,8.68999999 8.68999999,5.99999997 12,5.99999997 C15.31,5.99999997 18,8.68999999 18,12 C18,15.31 15.31,18 12,18 C8.68999999,18 5.99999997,15.31 5.99999997,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "watch",
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

export const HardwareWatchIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    