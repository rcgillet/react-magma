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
    "airline_seat_legroom_normal"
  ],
  "paths": [
    {
      "d": "M4.99999996,12 L4.99999996,3.99999996 C4.99999996,3.44999996 4.54999997,2.99999996 3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 L2.99999996,12 C2.99999996,14.76 5.23999997,17 7.99999996,17 L13,17 C13.55,17 14,16.55 14,16 C14,15.45 13.55,15 13,15 L7.99999996,15 C6.33999998,15 4.99999996,13.66 4.99999996,12 Z M20.5,18 L19,18 L19,11 C19,9.89999999 18.1,8.99999996 17,8.99999996 L12,8.99999996 L12,2.99999996 L5.99999997,2.99999996 L5.99999997,11 C5.99999997,12.65 7.34999998,14 8.99999997,14 L16,14 L16,19 C16,20.1 16.9,21 18,21 L20.5,21 C21.33,21 22,20.33 22,19.5 C22,18.67 21.33,18 20.5,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "airline_seat_legroom_normal",
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

export const NotificationsAirlineSeatLegroomNormalIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    