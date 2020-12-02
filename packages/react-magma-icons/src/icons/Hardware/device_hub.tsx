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
    "device_hub"
  ],
  "paths": [
    {
      "d": "M17,16 L13,12 L13,8.81999999 C14.35,8.32999998 15.26,6.92999998 14.93,5.35999997 C14.68,4.17999997 13.7,3.23999996 12.51,3.03999996 C10.63,2.72999996 8.99999996,4.16999997 8.99999996,5.99999998 C8.99999996,7.29999998 9.83999999,8.39999999 11,8.81999999 L11,12 L6.99999996,16 L3.99999996,16 C3.44999996,16 2.99999996,16.45 2.99999996,17 L2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 L6.99999996,21 C7.54999998,21 7.99999996,20.55 7.99999996,20 L7.99999996,17.95 L12,13.75 L16,17.95 L16,20 C16,20.55 16.45,21 17,21 L20,21 C20.55,21 21,20.55 21,20 L21,17 C21,16.45 20.55,16 20,16 L17,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "device_hub",
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

export const HardwareDeviceHubIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    