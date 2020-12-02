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
    "wheelchair_pickup"
  ],
  "paths": [
    {
      "d": "M4.49999997,3.99999996 C4.49999997,2.88999996 5.38999997,1.99999996 6.49999997,1.99999996 C7.60999998,1.99999996 8.49999997,2.88999996 8.49999997,3.99999996 C8.49999997,5.10999997 7.60999998,5.99999996 6.49999997,5.99999996 C5.38999997,5.99999996 4.49999997,5.10999997 4.49999997,3.99999996 Z M9.99999996,10.95 L9.99999996,8.99999998 C9.99999996,7.89999998 9.09999999,6.99999998 7.99999996,6.99999998 L4.99999996,6.99999998 C3.89999997,6.99999998 2.99999996,7.89999998 2.99999996,8.99999998 L2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 L4.99999996,15 L4.99999996,21 C4.99999996,21.55 5.44999997,22 5.99999996,22 L8.49999996,22 L8.49999996,21.89 C7.25999998,20.63 6.49999996,18.9 6.49999996,17 C6.49999996,14.42 7.90999998,12.16 9.99999996,10.95 Z M16.5,17 C16.5,18.65 15.15,20 13.5,20 C11.85,20 10.5,18.65 10.5,17 C10.5,15.89 11.11,14.94 12,14.42 L12,12.26 C9.97999999,12.9 8.49999999,14.77 8.49999999,17 C8.49999999,19.76 10.74,22 13.5,22 C16.26,22 18.5,19.76 18.5,17 L16.5,17 Z M19,14 L15,14 L15,8.99999998 C15,8.44999999 14.55,7.99999998 14,7.99999998 L14,7.99999998 C13.45,7.99999998 13,8.44999999 13,8.99999998 L13,15 C13,15.55 13.45,16 14,16 L18.46,16 L20.38,18.88 C20.69,19.34 21.31,19.46 21.77,19.16 L21.77,19.16 C22.23,18.85 22.35,18.23 22.05,17.77 L19.84,14.45 C19.65,14.17 19.33,14 19,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wheelchair_pickup",
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

export const PlacesWheelchairPickupIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    