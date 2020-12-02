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
    "photo_size_select_small"
  ],
  "paths": [
    {
      "d": "M23,15 L21,15 L21,17 L23,17 L23,15 Z M23,11 L21,11 L21,13 L23,13 L23,11 Z M23,19 L21,19 L21,21 C22,21 23,20 23,19 Z M15,2.99999996 L13,2.99999996 L13,4.99999996 L15,4.99999996 L15,2.99999996 Z M23,6.99999998 L21,6.99999998 L21,8.99999998 L23,8.99999998 L23,6.99999998 Z M21,2.99999996 L21,4.99999996 L23,4.99999996 C23,3.99999996 22,2.99999996 21,2.99999996 Z M2.99999995,21 L11,21 L11,17 C11,15.9 10.1,15 8.99999995,15 L0.999999954,15 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 Z M2.99999995,6.99999998 L0.999999954,6.99999998 L0.999999954,8.99999998 L2.99999995,8.99999998 L2.99999995,6.99999998 Z M15,19 L13,19 L13,21 L15,21 L15,19 Z M19,2.99999996 L17,2.99999996 L17,4.99999996 L19,4.99999996 L19,2.99999996 Z M19,19 L17,19 L17,21 L19,21 L19,19 Z M2.99999995,2.99999996 C1.99999995,2.99999996 0.999999954,3.99999996 0.999999954,4.99999996 L2.99999995,4.99999996 L2.99999995,2.99999996 Z M2.99999995,11 L0.999999954,11 L0.999999954,13 L2.99999995,13 L2.99999995,11 Z M11,2.99999996 L8.99999999,2.99999996 L8.99999999,4.99999996 L11,4.99999996 L11,2.99999996 Z M6.99999997,2.99999996 L4.99999997,2.99999996 L4.99999997,4.99999996 L6.99999997,4.99999996 L6.99999997,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "photo_size_select_small",
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

export const ImagePhotoSizeSelectSmallIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    