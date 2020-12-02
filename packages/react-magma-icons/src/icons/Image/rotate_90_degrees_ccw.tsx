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
    "rotate_90_degrees_ccw"
  ],
  "paths": [
    {
      "d": "M5.92999997,7.82999998 L2.27999996,11.49 C1.49999996,12.27 1.49999996,13.54 2.27999996,14.32 L5.93999997,17.98 C6.71999998,18.76 7.98999998,18.76 8.76999999,17.98 L12.43,14.33 C13.21,13.55 13.21,12.28 12.43,11.5 L8.75999999,7.81999998 C7.96999998,7.03999998 6.70999998,7.03999998 5.92999997,7.82999998 Z M4.39999997,12.19 L6.64999998,9.93999999 C7.03999998,9.54999999 7.66999998,9.54999999 8.06999998,9.93999999 L10.31,12.18 C10.7,12.57 10.7,13.2 10.31,13.59 L8.05999998,15.84 C7.66999998,16.23 7.03999998,16.23 6.63999998,15.84 L4.39999997,13.61 C4.00999997,13.22 4.00999997,12.58 4.39999997,12.19 Z M19.36,6.63999998 C17.61,4.87999997 15.3,3.99999997 13,3.99999997 L13,3.16999996 C13,2.27999996 11.92,1.82999996 11.29,2.45999996 L9.46999999,4.28999997 C9.07999999,4.67999997 9.07999999,5.30999997 9.46999999,5.69999997 L11.3,7.52999998 C11.92,8.15999998 13,7.71999998 13,6.82999998 L13,5.99999998 C15.02,5.99999998 17.03,6.85999998 18.45,8.60999999 C20.5,11.13 20.5,14.88 18.45,17.4 C17.03,19.14 15.02,20 13,20 C12.22,20 11.45,19.87 10.71,19.61 C10.35,19.49 9.95999999,19.6 9.68999999,19.87 C9.18999999,20.37 9.34999999,21.26 10.03,21.49 C10.99,21.83 11.99,22 13,22 C15.3,22 17.61,21.12 19.36,19.36 C22.88,15.85 22.88,10.15 19.36,6.63999998 L19.36,6.63999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "rotate_90_degrees_ccw",
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

export const ImageRotate90DegreesCcwIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    