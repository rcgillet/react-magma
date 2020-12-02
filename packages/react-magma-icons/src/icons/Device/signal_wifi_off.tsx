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
    "signal_wifi_off"
  ],
  "paths": [
    {
      "d": "M23.64,6.99999996 C23.19,6.65999998 18.71,2.99999996 12,2.99999996 C10.68,2.99999996 9.44999999,3.13999996 8.30999998,3.37999996 L18.43,13.5 L23.64,6.99999996 Z M4.11999997,2.00999996 C3.72999997,1.61999996 3.09999996,1.61999996 2.70999996,2.00999996 C2.31999996,2.39999996 2.31999996,3.02999996 2.70999996,3.41999996 L4.05999997,4.76999997 C1.90999996,5.75999997 0.589999952,6.81999998 0.359999951,6.99999998 L10.44,19.56 C11.24,20.56 12.76,20.56 13.56,19.56 L15.91,16.63 L18.52,19.24 C18.91,19.63 19.54,19.63 19.93,19.24 C20.32,18.85 20.32,18.22 19.93,17.83 L4.11999997,2.00999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "signal_wifi_off",
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

export const DeviceSignalWifiOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    