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
    "no_stroller"
  ],
  "paths": [
    {
      "d": "M7.99999997,20 C7.99999997,21.1 7.09999998,22 5.99999997,22 C4.89999997,22 3.99999997,21.1 3.99999997,20 C3.99999997,18.9 4.89999997,18 5.99999997,18 C7.09999998,18 7.99999997,18.9 7.99999997,20 Z M14.3,4.09999997 C13.03,3.39999996 11.56,2.99999996 9.99999999,2.99999996 C8.76999999,2.99999996 7.60999998,3.25999996 6.53999998,3.70999997 L10.91,8.07999998 L14.3,4.09999997 Z M20.49,21.9 C20.88,21.51 20.88,20.88 20.49,20.49 L10.67,10.67 L3.50999996,3.50999996 C3.11999996,3.11999996 2.48999996,3.11999996 2.09999996,3.50999996 L2.09999996,3.50999996 C1.70999996,3.89999997 1.70999996,4.52999997 2.09999996,4.91999997 L9.35999999,12.18 L6.69999998,15.3 C6.14999998,15.95 6.60999998,16.95 7.45999998,16.95 L14.12,16.95 L15.29,18.12 C14.41,18.45 13.82,19.37 14.03,20.4 C14.18,21.16 14.81,21.79 15.57,21.94 C16.6,22.15 17.52,21.56 17.85,20.68 L19.05,21.88 C19.46,22.29 20.09,22.29 20.49,21.9 L20.49,21.9 Z M17,6.26999998 C17.58,5.58999997 17.97,4.99999996 18.65,4.99999996 C19.33,4.99999996 19.87,5.51999997 19.98,6.20999998 C20.08,6.65999998 20.48,6.99999996 20.96,6.99999996 C21.51,6.99999996 21.96,6.54999998 21.96,5.99999996 C21.96,5.93999997 21.96,5.88999997 21.95,5.83999997 L21.95,5.82999997 C21.65,4.21999997 20.3,2.99999996 18.65,2.99999996 C16.99,2.99999996 16.11,4.26999997 15.47,5.02999997 L11.97,9.13999999 L17,14.17 L17,6.26999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "no_stroller",
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

export const PlacesNoStrollerIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    