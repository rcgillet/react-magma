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
    "movie_filter"
  ],
  "paths": [
    {
      "d": "M21.5,3.99999997 L18,3.99999997 L19.74,6.60999998 C19.85,6.77999998 19.73,6.99999997 19.53,6.99999997 L17.53,6.99999997 C17.2,6.99999997 16.88,6.82999998 16.7,6.54999998 L15,3.99999997 L13,3.99999997 L14.74,6.60999998 C14.85,6.77999998 14.73,6.99999997 14.53,6.99999997 L12.53,6.99999997 C12.2,6.99999997 11.88,6.82999998 11.7,6.54999998 L9.99999996,3.99999997 L7.99999996,3.99999997 L9.73999999,6.60999998 C9.84999999,6.77999998 9.72999999,6.99999997 9.52999999,6.99999997 L7.52999998,6.99999997 C7.19999998,6.99999997 6.88999998,6.82999998 6.69999998,6.54999998 L4.99999996,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.89999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,4.49999997 C22,4.21999997 21.78,3.99999997 21.5,3.99999997 Z M11.25,15.25 L9.99999997,18 L8.74999999,15.25 L5.99999997,14 L8.74999999,12.75 L9.99999997,9.99999999 L11.25,12.75 L14,14 L11.25,15.25 Z M16.94,11.94 L16,14 L15.06,11.94 L13,11 L15.06,10.06 L16,7.99999998 L16.94,10.06 L19,11 L16.94,11.94 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "movie_filter",
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

export const ImageMovieFilterIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    