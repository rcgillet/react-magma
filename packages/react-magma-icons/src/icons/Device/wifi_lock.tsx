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
    "wifi_lock"
  ],
  "paths": [
    {
      "d": "M21.31,9.57999999 L23.9999999,5.99999996 C20.66,3.48999996 16.4999999,1.99999996 11.9999999,1.99999996 C7.49999995,1.99999996 3.33999996,3.48999996 -5.00000894e-08,5.99999996 L10.4,19.87 C11.2,20.94 12.8,20.94 13.6,19.87 L15.4999999,17.34 L15.4999999,14.5 C15.4999999,11.74 17.74,9.49999996 20.4999999,9.49999996 C20.78,9.49999996 21.05,9.53999999 21.31,9.57999999 Z M23,16 L23,14.5 C23,13.12 21.88,12 20.5,12 C19.12,12 18,13.12 18,14.5 L18,16 C17.45,16 17,16.45 17,17 L17,21 C17,21.55 17.45,22 18,22 L23,22 C23.55,22 24,21.55 24,21 L24,17 C24,16.45 23.55,16 23,16 Z M22,16 L19,16 L19,14.5 C19,13.67 19.67,13 20.5,13 C21.33,13 22,13.67 22,14.5 L22,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wifi_lock",
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

export const DeviceWifiLockIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    