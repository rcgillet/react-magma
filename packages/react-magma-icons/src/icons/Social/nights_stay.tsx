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
    "nights_stay"
  ],
  "paths": [
    {
      "d": "M10.64,2.08999996 C11.05,2.03999996 11.36,2.44999996 11.17,2.80999996 C10.18,4.71999997 9.09999999,8.19999998 11.1,12.08 C13.1,15.97 16.89,17.37 19.38,17.5 C19.79,17.53 20.01,18 19.75,18.32 C17.91,20.57 15.12,22.01 11.99,22.01 C10.91,22.01 9.85999999,21.83 8.87999999,21.51 C10.13,20.83 11,19.52 11,18 C11,16.17 9.76999999,14.63 8.09999998,14.15 C7.17999998,12.83 5.65999997,12 3.99999997,12 C3.28999996,12 2.61999996,12.15 1.99999996,12.42 C1.99999996,12.41 1.99999996,12.41 1.98999996,12.41 C1.77999996,7.15999998 5.61999997,2.76999996 10.64,2.08999996 Z M3.99999995,14 C5.29999997,14 6.39999998,14.84 6.81999998,16 L6.81999998,16 L6.99999995,16 C8.09999998,16 8.99999995,16.9 8.99999995,18 C8.99999995,19.1 8.09999998,20 6.99999995,20 L6.99999995,20 L3.99999995,20 C2.33999996,20 0.999999954,18.66 0.999999954,17 C0.999999954,15.34 2.33999996,14 3.99999995,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "nights_stay",
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

export const SocialNightsStayIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    