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
    "battery_std"
  ],
  "paths": [
    {
      "d": "M15.67,3.99999996 L14,3.99999996 L14,2.99999996 C14,2.44999996 13.55,1.99999996 13,1.99999996 L11,1.99999996 C10.45,1.99999996 9.99999998,2.44999996 9.99999998,2.99999996 L9.99999998,3.99999996 L8.32999998,3.99999996 C7.59999998,3.99999996 6.99999998,4.59999997 6.99999998,5.32999997 L6.99999998,20.66 C6.99999998,21.4 7.59999998,22 8.33999998,22 L15.66,22 C16.4,22 17,21.4 17,20.67 L17,5.32999997 C17,4.59999997 16.4,3.99999996 15.67,3.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "battery_std",
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

export const DeviceBatteryStdIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    