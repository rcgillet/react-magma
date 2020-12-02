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
    "filter_drama"
  ],
  "paths": [
    {
      "d": "M19.35,10.04 C18.67,6.58999998 15.64,3.99999997 11.9999999,3.99999997 C9.10999999,3.99999997 6.60999998,5.63999997 5.35999997,8.03999998 C2.34999996,8.35999998 -5.00000183e-08,10.9 -5.00000183e-08,14 C-5.00000183e-08,17.31 2.68999996,20 5.99999995,20 L18.9999999,20 C21.76,20 23.9999999,17.76 23.9999999,15 C23.9999999,12.36 21.95,10.22 19.35,10.04 Z M19,18 L6.16999998,18 C4.07999997,18 2.21999996,16.47 2.01999996,14.39 C1.78999996,12.01 3.65999997,9.99999999 5.99999997,9.99999999 C7.91999998,9.99999999 9.52999999,11.36 9.90999999,13.17 C10.01,13.65 10.41,14 10.89,14 C11.5,14 12,13.45 11.88,12.85 C11.45,10.61 9.76999999,8.81999999 7.58999998,8.21999998 C8.68999999,6.75999998 10.48,5.84999997 12.48,6.01999998 C15.36,6.26999998 17.49,8.83999999 17.49,11.73 L17.49,12 L18.86,12 C20.31,12 21.65,12.97 21.93,14.4 C22.32,16.31 20.85,18 19,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "filter_drama",
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

export const ImageFilterDramaIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    