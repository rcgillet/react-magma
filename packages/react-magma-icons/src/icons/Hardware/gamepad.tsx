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
    "gamepad"
  ],
  "paths": [
    {
      "d": "M15,7.28999998 L15,2.99999996 C15,2.44999996 14.55,1.99999996 14,1.99999996 L9.99999999,1.99999996 C9.44999999,1.99999996 8.99999999,2.44999996 8.99999999,2.99999996 L8.99999999,7.28999998 C8.99999999,7.41999998 9.04999999,7.54999998 9.14999999,7.63999998 L11.65,10.14 C11.85,10.34 12.16,10.34 12.36,10.14 L14.86,7.63999998 C14.95,7.54999998 15,7.42999998 15,7.28999998 Z M7.28999998,8.99999999 L2.99999996,8.99999999 C2.44999996,8.99999999 1.99999996,9.44999999 1.99999996,9.99999999 L1.99999996,14 C1.99999996,14.55 2.44999996,15 2.99999996,15 L7.28999998,15 C7.41999998,15 7.54999998,14.95 7.63999998,14.85 L10.14,12.35 C10.34,12.15 10.34,11.84 10.14,11.64 L7.63999998,9.13999999 C7.54999998,9.04999999 7.42999998,8.99999999 7.28999998,8.99999999 Z M8.99999999,16.71 L8.99999999,21 C8.99999999,21.55 9.44999999,22 9.99999999,22 L14,22 C14.55,22 15,21.55 15,21 L15,16.71 C15,16.58 14.95,16.45 14.85,16.36 L12.35,13.86 C12.15,13.66 11.84,13.66 11.64,13.86 L9.13999999,16.36 C9.04999999,16.45 8.99999999,16.57 8.99999999,16.71 Z M16.35,9.14999999 L13.85,11.65 C13.65,11.85 13.65,12.16 13.85,12.36 L16.35,14.86 C16.44,14.95 16.57,15.01 16.7,15.01 L21,15.01 C21.55,15.01 22,14.56 22,14.01 L22,10.01 C22,9.45999999 21.55,9.00999999 21,9.00999999 L16.71,9.00999999 C16.57,8.99999999 16.45,9.04999999 16.35,9.14999999 L16.35,9.14999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "gamepad",
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

export const HardwareGamepadIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    