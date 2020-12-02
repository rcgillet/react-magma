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
    "filter_7"
  ],
  "paths": [
    {
      "d": "M1.99999995,4.99999997 C1.44999996,4.99999997 0.999999954,5.44999997 0.999999954,5.99999997 L0.999999954,21 C0.999999954,22.1 1.89999996,23 2.99999995,23 L18,23 C18.55,23 19,22.55 19,22 C19,21.45 18.55,21 18,21 L3.99999995,21 C3.44999996,21 2.99999995,20.55 2.99999995,20 L2.99999995,5.99999997 C2.99999995,5.44999997 2.54999996,4.99999997 1.99999995,4.99999997 Z M21,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,17 C4.99999997,18.1 5.89999997,19 6.99999997,19 L21,19 C22.1,19 23,18.1 23,17 L23,2.99999995 C23,1.89999996 22.1,0.999999954 21,0.999999954 Z M20,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 L6.99999998,3.99999996 C6.99999998,3.44999996 7.44999998,2.99999996 7.99999998,2.99999996 L20,2.99999996 C20.55,2.99999996 21,3.44999996 21,3.99999996 L21,16 C21,16.55 20.55,17 20,17 Z M13.25,14.51 L16.83,7.33999998 C16.94,7.11999998 17,6.86999998 17,6.61999998 C17,5.71999997 16.28,4.99999997 15.38,4.99999997 L12,4.99999997 C11.45,4.99999997 11,5.44999997 11,5.99999997 C11,6.54999998 11.45,6.99999997 12,6.99999997 L15,6.99999997 L11.64,13.71 C11.34,14.3 11.77,15 12.44,15 L12.45,15 C12.79,15 13.1,14.81 13.25,14.51 L13.25,14.51 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "filter_7",
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

export const ImageFilter7Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    