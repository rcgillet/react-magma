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
    "streetview"
  ],
  "paths": [
    {
      "d": "M18,12.5 C19.05,12.5 20.06,12.69 21,13.02 L21,13.02 L21,19 C21,20.1 20.1,21 19,21 L19,21 L12,21 L12,15.5 C12,15.03 12.22,14.6 12.56,14.33 C14.07,13.2 15.97,12.5 18,12.5 Z M12.24,2.99999996 C11.77,3.89999997 11.5,4.91999997 11.5,5.99999996 C11.5,7.79999998 12.23,9.41999999 13.41,10.59 L13.41,10.59 L3.58999996,20.41 C3.22999996,20.05 2.99999996,19.55 2.99999996,19 L2.99999996,19 L2.99999996,4.99999996 C2.99999996,3.89999997 3.89999997,2.99999996 4.99999996,2.99999996 L4.99999996,2.99999996 Z M18,0.999999954 C20.7614238,0.999999954 23,3.23857621 23,5.99999995 C23,8.76142374 20.7614238,11 18,11 C15.2385763,11 13,8.76142374 13,5.99999995 C13,3.23857621 15.2385763,0.999999954 18,0.999999954 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "streetview",
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

export const MapsStreetviewIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    