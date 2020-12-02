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
    "local_shipping"
  ],
  "paths": [
    {
      "d": "M19.5,7.99999997 L17,7.99999997 L17,5.99999997 C17,4.89999997 16.1,3.99999997 15,3.99999997 L2.99999995,3.99999997 C1.89999996,3.99999997 0.999999954,4.89999997 0.999999954,5.99999997 L0.999999954,15 C0.999999954,16.1 1.89999996,17 2.99999995,17 C2.99999995,18.66 4.33999997,20 5.99999995,20 C7.65999998,20 8.99999995,18.66 8.99999995,17 L15,17 C15,18.66 16.34,20 18,20 C19.66,20 21,18.66 21,17 L22,17 C22.55,17 23,16.55 23,16 L23,12.67 C23,12.24 22.86,11.82 22.6,11.47 L20.3,8.39999999 C20.11,8.14999998 19.81,7.99999997 19.5,7.99999997 Z M5.99999997,18 C5.44999997,18 4.99999997,17.55 4.99999997,17 C4.99999997,16.45 5.44999997,16 5.99999997,16 C6.54999998,16 6.99999997,16.45 6.99999997,17 C6.99999997,17.55 6.54999998,18 5.99999997,18 Z M19.5,9.49999999 L21.46,12 L17,12 L17,9.49999999 L19.5,9.49999999 Z M18,18 C17.45,18 17,17.55 17,17 C17,16.45 17.45,16 18,16 C18.55,16 19,16.45 19,17 C19,17.55 18.55,18 18,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_shipping",
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

export const MapsLocalShippingIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    