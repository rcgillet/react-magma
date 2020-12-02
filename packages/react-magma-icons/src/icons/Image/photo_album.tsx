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
    "photo_album"
  ],
  "paths": [
    {
      "d": "M18,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,3.99999996 C20,2.89999996 19.1,1.99999996 18,1.99999996 Z M5.99999997,3.99999997 L11,3.99999997 L11,12 L8.49999997,10.5 L5.99999997,12 L5.99999997,3.99999997 Z M6.62999998,18.19 L8.61999999,15.63 C8.81999999,15.38 9.19999999,15.37 9.39999999,15.62 L11.14,17.72 L13.74,14.38 C13.94,14.12 14.34,14.12 14.53,14.39 L17.4,18.21 C17.65,18.54 17.41,19.01 17,19.01 L7.01999998,19.01 C6.60999998,19 6.36999998,18.52 6.62999998,18.19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "photo_album",
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

export const ImagePhotoAlbumIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    