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
    "filter_3"
  ],
  "paths": [
    {
      "d": "M21,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,17 C4.99999997,18.1 5.89999997,19 6.99999997,19 L21,19 C22.1,19 23,18.1 23,17 L23,2.99999995 C23,1.89999996 22.1,0.999999954 21,0.999999954 Z M20,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 L6.99999998,3.99999996 C6.99999998,3.44999996 7.44999998,2.99999996 7.99999998,2.99999996 L20,2.99999996 C20.55,2.99999996 21,3.44999996 21,3.99999996 L21,16 C21,16.55 20.55,17 20,17 Z M1.99999995,4.99999997 C1.44999996,4.99999997 0.999999954,5.44999997 0.999999954,5.99999997 L0.999999954,21 C0.999999954,22.1 1.89999996,23 2.99999995,23 L18,23 C18.55,23 19,22.55 19,22 C19,21.45 18.55,21 18,21 L3.99999995,21 C3.44999996,21 2.99999995,20.55 2.99999995,20 L2.99999995,5.99999997 C2.99999995,5.44999997 2.54999996,4.99999997 1.99999995,4.99999997 Z M17,13 L17,11.5 C17,10.67 16.33,9.99999997 15.5,9.99999997 C16.33,9.99999997 17,9.32999999 17,8.49999997 L17,6.99999997 C17,5.89999997 16.1,4.99999997 15,4.99999997 L12,4.99999997 C11.45,4.99999997 11,5.44999997 11,5.99999997 C11,6.54999998 11.45,6.99999997 12,6.99999997 L15,6.99999997 L15,8.99999997 L14,8.99999997 C13.45,8.99999997 13,9.44999999 13,9.99999997 C13,10.55 13.45,11 14,11 L15,11 L15,13 L12,13 C11.45,13 11,13.45 11,14 C11,14.55 11.45,15 12,15 L15,15 C16.1,15 17,14.1 17,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "filter_3",
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

export const ImageFilter3Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    