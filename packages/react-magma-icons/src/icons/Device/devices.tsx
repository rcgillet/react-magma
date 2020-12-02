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
    "devices"
  ],
  "paths": [
    {
      "d": "M3.99999995,6.99999997 C3.99999995,6.44999998 4.44999997,5.99999997 4.99999995,5.99999997 L21,5.99999997 C21.55,5.99999997 22,5.54999997 22,4.99999997 C22,4.44999997 21.55,3.99999997 21,3.99999997 L3.99999995,3.99999997 C2.89999996,3.99999997 1.99999995,4.89999997 1.99999995,5.99999997 L1.99999995,17 L1.49999995,17 C0.669999953,17 -4.99999473e-08,17.67 -4.99999473e-08,18.5 C-4.99999473e-08,19.33 0.669999953,20 1.49999995,20 L14,20 L14,17 L3.99999995,17 L3.99999995,6.99999997 Z M23,7.99999998 L17,7.99999998 C16.45,7.99999998 16,8.44999999 16,8.99999998 L16,19 C16,19.55 16.45,20 17,20 L23,20 C23.55,20 24,19.55 24,19 L24,8.99999998 C24,8.44999999 23.55,7.99999998 23,7.99999998 Z M22,17 L18,17 L18,9.99999999 L22,9.99999999 L22,17 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "devices",
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

export const DeviceDevicesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    