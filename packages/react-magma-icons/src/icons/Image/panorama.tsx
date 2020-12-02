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
    "panorama"
  ],
  "paths": [
    {
      "d": "M23,18 L23,5.99999997 C23,4.89999997 22.1,3.99999997 21,3.99999997 L2.99999995,3.99999997 C1.89999996,3.99999997 0.999999954,4.89999997 0.999999954,5.99999997 L0.999999954,18 C0.999999954,19.1 1.89999996,20 2.99999995,20 L21,20 C22.1,20 23,19.1 23,18 Z M8.89999999,12.98 L11,15.51 L14.1,11.52 C14.3,11.26 14.7,11.26 14.9,11.53 L18.41,16.21 C18.66,16.54 18.42,17.01 18.01,17.01 L6.01999998,17.01 C5.59999997,17.01 5.36999997,16.53 5.62999997,16.2 L8.11999998,13 C8.30999998,12.74 8.68999999,12.73 8.89999999,12.98 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "panorama",
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

export const ImagePanoramaIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    