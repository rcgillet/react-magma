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
    "no_photography"
  ],
  "paths": [
    {
      "d": "M10.94,8.11999998 L7.47999998,4.65999997 L8.39999999,3.64999997 C8.77999999,3.23999996 9.31999999,2.99999996 9.87999999,2.99999996 L14.12,2.99999996 C14.68,2.99999996 15.22,3.23999996 15.59,3.64999997 L16.83,4.99999996 L20,4.99999996 C21.1,4.99999996 22,5.89999997 22,6.99999996 L22,19 C22,19.05 21.99,19.1 21.98,19.16 L16.88,14.06 C16.96,13.71 17,13.36 17,13 C17,10.24 14.76,7.99999996 12,7.99999996 C11.64,7.99999996 11.29,8.03999998 10.94,8.11999998 Z M19.78,22.61 L18.17,21 L3.99999997,21 C2.89999996,21 1.99999996,20.1 1.99999996,19 L1.99999996,6.99999998 C1.99999996,6.40999998 2.26999996,5.87999997 2.67999996,5.50999997 L1.38999996,4.21999997 C0.999999954,3.82999997 0.999999954,3.19999996 1.38999996,2.80999996 L1.38999996,2.80999996 C1.77999996,2.41999996 2.40999996,2.41999996 2.79999996,2.80999996 L21.18,21.19 C21.57,21.58 21.57,22.21 21.18,22.6 L21.18,22.6 C20.8,23 20.17,23 19.78,22.61 Z M14.49,17.32 L12.99,15.82 C12.67,15.92 12.35,16 12,16 C10.34,16 8.99999998,14.66 8.99999998,13 C8.99999998,12.65 9.07999999,12.33 9.18999999,12.02 L7.68999998,10.52 C7.24999998,11.24 6.99999998,12.09 6.99999998,13 C6.99999998,15.76 9.23999999,18 12,18 C12.91,18 13.76,17.75 14.49,17.32 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "no_photography",
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

export const PlacesNoPhotographyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    