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
    "payments"
  ],
  "paths": [
    {
      "d": "M23,7.99999998 L23,18 C23,19.1 22.1,20 21,20 L4.99999997,20 C4.44999997,20 3.99999997,19.55 3.99999997,19 C3.99999997,18.45 4.44999997,18 4.99999997,18 L21,18 L21,7.99999998 C21,7.44999998 21.45,6.99999998 22,6.99999998 C22.55,6.99999998 23,7.44999998 23,7.99999998 Z M16,3.99999997 C17.66,3.99999997 19,5.33999997 19,6.99999997 L19,14 C19,15.1 18.1,16 17,16 L3.99999995,16 C2.33999996,16 0.999999954,14.66 0.999999954,13 L0.999999954,6.99999997 C0.999999954,5.33999997 2.33999996,3.99999997 3.99999995,3.99999997 L16,3.99999997 Z M9.99999998,6.99999998 C8.33999998,6.99999998 6.99999998,8.33999998 6.99999998,9.99999998 C6.99999998,11.66 8.33999998,13 9.99999998,13 C11.66,13 13,11.66 13,9.99999998 C13,8.33999998 11.66,6.99999998 9.99999998,6.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "payments",
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

export const NavigationPaymentsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    