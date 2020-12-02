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
    "movie"
  ],
  "paths": [
    {
      "d": "M18,3.99999997 L19.82,7.63999998 C19.9,7.79999998 19.78,7.99999997 19.6,7.99999997 L17.62,7.99999997 C17.24,7.99999997 16.89,7.78999998 16.73,7.44999998 L15,3.99999997 L13,3.99999997 L14.82,7.63999998 C14.9,7.79999998 14.78,7.99999997 14.6,7.99999997 L12.62,7.99999997 C12.24,7.99999997 11.89,7.78999998 11.73,7.44999998 L9.99999996,3.99999997 L7.99999996,3.99999997 L9.81999999,7.63999998 C9.89999999,7.79999998 9.77999999,7.99999997 9.59999999,7.99999997 L7.61999998,7.99999997 C7.23999998,7.99999997 6.88999998,7.78999998 6.71999998,7.44999998 L4.99999996,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,4.99999997 C22,4.44999997 21.55,3.99999997 21,3.99999997 L18,3.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "movie",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const AVMovieIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    