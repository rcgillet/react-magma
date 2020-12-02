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
    "signal_wifi_4_bar_lock"
  ],
  "paths": [
    {
      "d": "M21.55,9.60999999 L23.64,6.99999996 C23.19,6.65999998 18.71,2.99999996 12,2.99999996 C5.27999997,2.99999996 0.809999953,6.65999998 0.359999952,6.99999996 L10.44,19.56 C11.24,20.56 12.76,20.56 13.56,19.56 L15.5,17.14 L15.5,14.5 C15.5,11.7 17.7,9.49999996 20.5,9.49999996 C20.86,9.49999996 21.21,9.53999999 21.55,9.60999999 Z M23,16 L23,14.5 C23,13.1 21.9,12 20.5,12 C19.1,12 18,13.1 18,14.5 L18,16 C17.5,16 17,16.5 17,17 L17,21 C17,21.5 17.5,22 18,22 L23,22 C23.5,22 24,21.5 24,21 L24,17 C24,16.5 23.5,16 23,16 Z M22,16 L19,16 L19,14.5 C19,13.7 19.7,13 20.5,13 C21.3,13 22,13.7 22,14.5 L22,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "signal_wifi_4_bar_lock",
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

export const DeviceSignalWifi4BarLockIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    