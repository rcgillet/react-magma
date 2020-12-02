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
    "airline_seat_flat"
  ],
  "paths": [
    {
      "d": "M22,11 L22,13 L8.99999999,13 L8.99999999,8.99999998 C8.99999999,7.89999998 9.89999999,6.99999998 11,6.99999998 L18,6.99999998 C20.21,6.99999998 22,8.78999999 22,11 Z M1.99999996,15 C1.99999996,15.55 2.44999996,16 2.99999996,16 L7.99999996,16 L7.99999996,17 C7.99999996,17.55 8.44999999,18 8.99999996,18 L15,18 C15.55,18 16,17.55 16,17 L16,16 L21,16 C21.55,16 22,15.55 22,15 C22,14.45 21.55,14 21,14 L2.99999996,14 C2.44999996,14 1.99999996,14.45 1.99999996,15 Z M7.13999998,12.1 C8.29999998,10.91 8.27999998,9.01999999 7.09999998,7.85999998 C5.90999997,6.69999998 4.01999997,6.71999998 2.85999996,7.89999998 C1.69999996,9.08999999 1.71999996,10.98 2.89999996,12.14 C4.08999997,13.3 5.97999997,13.28 7.13999998,12.1 L7.13999998,12.1 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "airline_seat_flat",
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

export const NotificationsAirlineSeatFlatIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    