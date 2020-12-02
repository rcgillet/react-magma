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
    "cloud_done"
  ],
  "paths": [
    {
      "d": "M19.35,10.04 C18.67,6.58999998 15.64,3.99999997 11.9999999,3.99999997 C9.10999999,3.99999997 6.59999998,5.63999997 5.34999997,8.03999998 C2.33999996,8.35999998 -5.00000006e-08,10.91 -5.00000006e-08,14 C-5.00000006e-08,17.31 2.68999996,20 5.99999995,20 L18.9999999,20 C21.76,20 23.9999999,17.76 23.9999999,15 C23.9999999,12.36 21.95,10.22 19.35,10.04 Z M10.71,16.29 C10.32,16.68 9.68999999,16.68 9.29999999,16.29 L7.19999998,14.2 C6.80999998,13.81 6.80999998,13.18 7.19999998,12.79 C7.58999998,12.4 8.21999998,12.4 8.60999999,12.79 L9.99999999,14.18 L14.48,9.69999999 C14.87,9.30999999 15.5,9.30999999 15.89,9.69999999 C16.28,10.09 16.28,10.72 15.89,11.11 L10.71,16.29 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "cloud_done",
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

export const FileCloudDoneIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    