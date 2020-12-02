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
    "hotel"
  ],
  "paths": [
    {
      "d": "M6.99999997,13 C8.65999999,13 9.99999997,11.66 9.99999997,9.99999998 C9.99999997,8.33999998 8.65999999,6.99999998 6.99999997,6.99999998 C5.33999997,6.99999998 3.99999997,8.33999998 3.99999997,9.99999998 C3.99999997,11.66 5.33999997,13 6.99999997,13 Z M19,6.99999997 L13,6.99999997 C11.9,6.99999997 11,7.89999998 11,8.99999997 L11,14 L2.99999995,14 L2.99999995,5.99999997 C2.99999995,5.44999997 2.54999996,4.99999997 1.99999995,4.99999997 C1.44999996,4.99999997 0.999999954,5.44999997 0.999999954,5.99999997 L0.999999954,19 C0.999999954,19.55 1.44999996,20 1.99999995,20 C2.54999996,20 2.99999995,19.55 2.99999995,19 L2.99999995,17 L21,17 L21,19 C21,19.55 21.45,20 22,20 C22.55,20 23,19.55 23,19 L23,11 C23,8.78999999 21.21,6.99999997 19,6.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "hotel",
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

export const MapsHotelIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    