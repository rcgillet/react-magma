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
    "cloud_queue"
  ],
  "paths": [
    {
      "d": "M19.35,10.04 C18.67,6.58999998 15.64,3.99999997 11.9999999,3.99999997 C9.10999999,3.99999997 6.59999998,5.63999997 5.34999997,8.03999998 C2.33999996,8.35999998 -5.00000183e-08,10.91 -5.00000183e-08,14 C-5.00000183e-08,17.31 2.68999996,20 5.99999995,20 L18.9999999,20 C21.76,20 23.9999999,17.76 23.9999999,15 C23.9999999,12.36 21.95,10.22 19.35,10.04 Z M19,18 L5.99999996,18 C3.78999997,18 1.99999996,16.21 1.99999996,14 C1.99999996,11.79 3.78999997,9.99999997 5.99999996,9.99999997 L6.70999998,9.99999997 C7.36999998,7.68999998 9.47999999,5.99999997 12,5.99999997 C15.04,5.99999997 17.5,8.45999999 17.5,11.5 L17.5,12 L19,12 C20.66,12 22,13.34 22,15 C22,16.66 20.66,18 19,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "cloud_queue",
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

export const FileCloudQueueIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    