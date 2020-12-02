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
    "person_pin_circle"
  ],
  "paths": [
    {
      "d": "M12,11 C10.67,11 7.99999998,11.67 7.99999998,13 L7.99999998,13.16 C8.96999999,14.28 10.4,15 12,15 C13.6,15 15.03,14.28 16,13.16 L16,13 C16,11.67 13.33,11 12,11 Z M12,9.99999998 C13.1,9.99999998 14,9.09999999 14,7.99999998 C14,6.89999998 13.1,5.99999998 12,5.99999998 C10.9,5.99999998 9.99999999,6.89999998 9.99999999,7.99999998 C9.99999999,9.09999999 10.9,9.99999998 12,9.99999998 Z M12,1.99999996 C16.2,1.99999996 20,5.21999997 20,10.2 C20,13.38 17.55,17.12 12.66,21.43 C12.28,21.76 11.71,21.76 11.33,21.43 C6.44999998,17.12 3.99999997,13.38 3.99999997,10.2 C3.99999997,5.21999997 7.79999998,1.99999996 12,1.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "person_pin_circle",
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

export const MapsPersonPinCircleIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    