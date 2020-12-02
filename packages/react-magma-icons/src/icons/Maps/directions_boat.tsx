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
    "directions_boat"
  ],
  "paths": [
    {
      "d": "M20,21 C18.71,21 17.42,20.59 16.26,19.86 C16.1,19.76 15.89,19.76 15.73,19.86 C13.42,21.33 10.57,21.33 8.25999998,19.86 C8.09999998,19.76 7.88999998,19.76 7.72999998,19.86 C6.57999998,20.59 5.28999997,21 3.99999996,21 L2.99999996,21 C2.44999996,21 1.99999996,21.45 1.99999996,22 C1.99999996,22.55 2.44999996,23 2.99999996,23 L3.99999996,23 C5.37999997,23 6.73999998,22.65 7.99999996,22.01 C10.52,23.3 13.48,23.3 16,22.01 C17.26,22.66 18.62,23 20,23 L21,23 C21.55,23 22,22.55 22,22 C22,21.45 21.55,21 21,21 L20,21 Z M3.94999997,19 L3.99999997,19 C5.41999997,19 6.69999998,18.3 7.65999998,17.36 C7.84999998,17.18 8.15999998,17.18 8.34999998,17.36 C9.29999999,18.3 10.58,19 12,19 C13.42,19 14.7,18.3 15.66,17.36 C15.85,17.17 16.15,17.17 16.35,17.36 C17.3,18.3 18.58,19 20,19 L20.05,19 L21.94,12.32 C22.02,12.06 22,11.78 21.88,11.54 C21.76,11.3 21.54,11.12 21.28,11.04 L20,10.62 L20,5.99999995 C20,4.89999997 19.1,3.99999995 18,3.99999995 L15,3.99999995 L15,1.99999995 C15,1.44999996 14.55,0.999999954 14,0.999999954 L9.99999999,0.999999954 C9.44999999,0.999999954 8.99999999,1.44999996 8.99999999,1.99999995 L8.99999999,3.99999995 L5.99999997,3.99999995 C4.89999997,3.99999995 3.99999997,4.89999997 3.99999997,5.99999995 L3.99999997,10.62 L2.70999996,11.04 C2.44999996,11.12 2.22999996,11.3 2.10999996,11.54 C1.98999996,11.78 1.95999996,12.06 2.04999996,12.32 L3.94999997,19 Z M6.99999997,5.99999998 L17,5.99999998 C17.55,5.99999998 18,6.44999998 18,6.99999998 L18,9.96999999 L12.62,8.19999998 C12.21,8.06999998 11.78,8.06999998 11.37,8.19999998 L5.99999997,9.96999999 L5.99999997,6.99999998 C5.99999997,6.44999998 6.44999998,5.99999998 6.99999997,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "directions_boat",
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

export const MapsDirectionsBoatIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    