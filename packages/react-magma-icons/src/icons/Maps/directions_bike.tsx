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
    "directions_bike"
  ],
  "paths": [
    {
      "d": "M15.5,5.49999996 C16.6,5.49999996 17.5,4.59999997 17.5,3.49999996 C17.5,2.39999996 16.6,1.49999996 15.5,1.49999996 C14.4,1.49999996 13.5,2.39999996 13.5,3.49999996 C13.5,4.59999997 14.4,5.49999996 15.5,5.49999996 Z M4.99999995,12 C2.19999996,12 -5.00000894e-08,14.2 -5.00000894e-08,17 C-5.00000894e-08,19.8 2.19999996,22 4.99999995,22 C7.79999998,22 9.99999995,19.8 9.99999995,17 C9.99999995,14.2 7.79999998,12 4.99999995,12 Z M4.99999996,20.5 C3.09999996,20.5 1.49999996,18.9 1.49999996,17 C1.49999996,15.1 3.09999996,13.5 4.99999996,13.5 C6.89999998,13.5 8.49999996,15.1 8.49999996,17 C8.49999996,18.9 6.89999998,20.5 4.99999996,20.5 Z M10.8,10.5 L13.2,8.09999998 L14,8.89999999 C15.06,9.95999999 16.38,10.68 17.96,10.92 C18.56,11.01 19.1,10.53 19.1,9.91999999 C19.1,9.42999999 18.73,9.00999999 18.25,8.92999999 C17.14,8.74999999 16.23,8.21999998 15.5,7.49999997 L13.6,5.59999997 C13.1,5.19999997 12.6,4.99999997 12,4.99999997 C11.4,4.99999997 10.9,5.19999997 10.6,5.59999997 L7.79999998,8.39999999 C7.39999998,8.79999999 7.19999998,9.29999999 7.19999998,9.79999999 C7.19999998,10.4 7.39999998,10.9 7.79999998,11.2 L11,14 L11,18 C11,18.55 11.45,19 12,19 C12.55,19 13,18.55 13,18 L13,13.6 C13,13.08 12.8,12.59 12.45,12.22 L10.8,10.5 Z M19,12 C16.2,12 14,14.2 14,17 C14,19.8 16.2,22 19,22 C21.8,22 24,19.8 24,17 C24,14.2 21.8,12 19,12 Z M19,20.5 C17.1,20.5 15.5,18.9 15.5,17 C15.5,15.1 17.1,13.5 19,13.5 C20.9,13.5 22.5,15.1 22.5,17 C22.5,18.9 20.9,20.5 19,20.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "directions_bike",
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

export const MapsDirectionsBikeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    