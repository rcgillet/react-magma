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
    "laptop_mac"
  ],
  "paths": [
    {
      "d": "M19.9999999,18 C21.1,18 21.99,17.1 21.99,16 L21.9999999,4.99999996 C21.9999999,3.89999997 21.1,2.99999996 19.9999999,2.99999996 L3.99999995,2.99999996 C2.89999996,2.99999996 1.99999995,3.89999997 1.99999995,4.99999996 L1.99999995,16 C1.99999995,17.1 2.89999996,18 3.99999995,18 L-5.00000006e-08,18 C-5.00000006e-08,19.1 0.899999954,20 1.99999995,20 L21.9999999,20 C23.1,20 23.9999999,19.1 23.9999999,18 L19.9999999,18 Z M4.99999997,4.99999997 L19,4.99999997 C19.55,4.99999997 20,5.44999997 20,5.99999997 L20,15 C20,15.55 19.55,16 19,16 L4.99999997,16 C4.44999997,16 3.99999997,15.55 3.99999997,15 L3.99999997,5.99999997 C3.99999997,5.44999997 4.44999997,4.99999997 4.99999997,4.99999997 Z M12,19 C11.45,19 11,18.55 11,18 C11,17.45 11.45,17 12,17 C12.55,17 13,17.45 13,18 C13,18.55 12.55,19 12,19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "laptop_mac",
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

export const HardwareLaptopMacIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    