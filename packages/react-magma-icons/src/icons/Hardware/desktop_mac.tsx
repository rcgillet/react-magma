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
    "desktop_mac"
  ],
  "paths": [
    {
      "d": "M21,1.99999996 L2.99999995,1.99999996 C1.89999996,1.99999996 0.999999954,2.89999996 0.999999954,3.99999996 L0.999999954,16 C0.999999954,17.1 1.89999996,18 2.99999995,18 L9.99999995,18 L8.36999998,20.45 C7.92999998,21.11 8.39999999,22 9.19999999,22 L14.8,22 C15.6,22 16.08,21.11 15.63,20.45 L14,18 L21,18 C22.1,18 23,17.1 23,16 L23,3.99999996 C23,2.89999996 22.1,1.99999996 21,1.99999996 Z M21,14 L2.99999996,14 L2.99999996,4.99999997 C2.99999996,4.44999997 3.44999996,3.99999997 3.99999996,3.99999997 L20,3.99999997 C20.55,3.99999997 21,4.44999997 21,4.99999997 L21,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "desktop_mac",
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

export const HardwareDesktopMacIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    