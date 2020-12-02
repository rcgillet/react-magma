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
    "battery_alert"
  ],
  "paths": [
    {
      "d": "M15.67,3.99999996 L14,3.99999996 L14,2.99999996 C14,2.44999996 13.55,1.99999996 13,1.99999996 L11,1.99999996 C10.45,1.99999996 9.99999998,2.44999996 9.99999998,2.99999996 L9.99999998,3.99999996 L8.32999998,3.99999996 C7.59999998,3.99999996 6.99999998,4.59999997 6.99999998,5.32999997 L6.99999998,20.66 C6.99999998,21.4 7.59999998,22 8.33999998,22 L15.66,22 C16.4,22 17,21.4 17,20.67 L17,5.32999997 C17,4.59999997 16.4,3.99999996 15.67,3.99999996 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M13,13 C13,13.55 12.55,14 12,14 C11.45,14 11,13.55 11,13 L11,9.99999999 C11,9.44999999 11.45,8.99999999 12,8.99999999 C12.55,8.99999999 13,9.44999999 13,9.99999999 L13,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "battery_alert",
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

export const DeviceBatteryAlertIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    