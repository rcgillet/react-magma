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
    "power_input"
  ],
  "paths": [
    {
      "d": "M1.99999996,9.99999999 C1.99999996,10.55 2.44999996,11 2.99999996,11 L20,11 C20.55,11 21,10.55 21,9.99999999 C21,9.44999999 20.55,8.99999999 20,8.99999999 L2.99999996,8.99999999 C2.44999996,8.99999999 1.99999996,9.44999999 1.99999996,9.99999999 Z M2.99999996,15 L5.99999996,15 C6.54999998,15 6.99999996,14.55 6.99999996,14 C6.99999996,13.45 6.54999998,13 5.99999996,13 L2.99999996,13 C2.44999996,13 1.99999996,13.45 1.99999996,14 C1.99999996,14.55 2.44999996,15 2.99999996,15 Z M9.99999999,15 L13,15 C13.55,15 14,14.55 14,14 C14,13.45 13.55,13 13,13 L9.99999999,13 C9.44999999,13 8.99999999,13.45 8.99999999,14 C8.99999999,14.55 9.44999999,15 9.99999999,15 Z M17,15 L20,15 C20.55,15 21,14.55 21,14 C21,13.45 20.55,13 20,13 L17,13 C16.45,13 16,13.45 16,14 C16,14.55 16.45,15 17,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "power_input",
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

export const HardwarePowerInputIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    