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
    "hdr_strong"
  ],
  "paths": [
    {
      "d": "M17,5.99999998 C13.69,5.99999998 11,8.68999999 11,12 C11,15.31 13.69,18 17,18 C20.31,18 23,15.31 23,12 C23,8.68999999 20.31,5.99999998 17,5.99999998 Z M4.99999995,7.99999998 C2.78999996,7.99999998 0.999999954,9.78999999 0.999999954,12 C0.999999954,14.21 2.78999996,16 4.99999995,16 C7.20999998,16 8.99999995,14.21 8.99999995,12 C8.99999995,9.78999999 7.20999998,7.99999998 4.99999995,7.99999998 Z M4.99999996,14 C3.89999997,14 2.99999996,13.1 2.99999996,12 C2.99999996,10.9 3.89999997,9.99999999 4.99999996,9.99999999 C6.09999998,9.99999999 6.99999996,10.9 6.99999996,12 C6.99999996,13.1 6.09999998,14 4.99999996,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "hdr_strong",
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

export const ImageHdrStrongIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    