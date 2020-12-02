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
    "add_alarm"
  ],
  "paths": [
    {
      "d": "M15,12 L13,12 L13,9.99999999 C13,9.44999999 12.55,8.99999999 12,8.99999999 C11.45,8.99999999 11,9.44999999 11,9.99999999 L11,12 L8.99999998,12 C8.44999999,12 7.99999998,12.45 7.99999998,13 C7.99999998,13.55 8.44999999,14 8.99999998,14 L11,14 L11,16 C11,16.55 11.45,17 12,17 C12.55,17 13,16.55 13,16 L13,14 L15,14 C15.55,14 16,13.55 16,13 C16,12.45 15.55,12 15,12 Z M21.18,5.00999997 L18.1,2.44999996 C17.68,2.09999996 17.05,2.14999996 16.69,2.57999996 C16.34,2.99999996 16.4,3.62999997 16.82,3.98999997 L19.89,6.54999998 C20.31,6.89999998 20.94,6.84999998 21.3,6.41999998 C21.66,5.99999997 21.6,5.36999997 21.18,5.00999997 L21.18,5.00999997 Z M4.09999997,6.54999998 L7.16999998,3.98999997 C7.59999998,3.62999997 7.65999998,2.99999996 7.29999998,2.57999996 C6.94999998,2.14999996 6.31999998,2.09999996 5.89999997,2.44999996 L2.81999996,5.00999997 C2.39999996,5.36999997 2.33999996,5.99999997 2.69999996,6.41999998 C3.04999996,6.84999998 3.67999997,6.89999998 4.09999997,6.54999998 Z M12,3.99999997 C7.02999998,3.99999997 2.99999996,8.02999998 2.99999996,13 C2.99999996,17.97 7.02999998,22 12,22 C16.97,22 21,17.97 21,13 C21,8.02999998 16.97,3.99999997 12,3.99999997 Z M12,20 C8.13999998,20 4.99999997,16.86 4.99999997,13 C4.99999997,9.13999999 8.13999998,5.99999997 12,5.99999997 C15.86,5.99999997 19,9.13999999 19,13 C19,16.86 15.86,20 12,20 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "add_alarm",
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

export const DeviceAddAlarmIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    