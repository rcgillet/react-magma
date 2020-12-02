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
    "fence"
  ],
  "paths": [
    {
      "d": "M21,11 L21,11 C21,10.45 20.55,9.99999999 20,9.99999999 L19,9.99999999 L19,6.99999998 L16.71,4.70999997 C16.32,4.31999997 15.69,4.31999997 15.3,4.70999997 L14,5.99999998 L12.71,4.70999997 C12.32,4.31999997 11.69,4.31999997 11.3,4.70999997 L9.99999996,5.99999998 L8.70999999,4.70999997 C8.31999998,4.31999997 7.68999998,4.31999997 7.29999998,4.70999997 L4.99999996,6.99999998 L4.99999996,9.99999999 L3.99999996,9.99999999 C3.44999996,9.99999999 2.99999996,10.45 2.99999996,11 L2.99999996,11 C2.99999996,11.55 3.44999996,12 3.99999996,12 L4.99999996,12 L4.99999996,14 L3.99999996,14 C3.44999996,14 2.99999996,14.45 2.99999996,15 L2.99999996,15 C2.99999996,15.55 3.44999996,16 3.99999996,16 L4.99999996,16 L4.99999996,19 C4.99999996,19.55 5.44999997,20 5.99999996,20 L18,20 C18.55,20 19,19.55 19,19 L19,16 L20,16 C20.55,16 21,15.55 21,15 L21,15 C21,14.45 20.55,14 20,14 L19,14 L19,12 L20,12 C20.55,12 21,11.55 21,11 Z M16,6.82999998 L17,7.82999998 L17,9.99999999 L15,9.99999999 L15,7.82999998 L15.41,7.41999998 L16,6.82999998 Z M12,6.82999998 L12.59,7.41999998 L13,7.82999998 L13,9.99999999 L11,9.99999999 L11,7.82999998 L11.41,7.41999998 L12,6.82999998 Z M11,14 L11,12 L13,12 L13,14 L11,14 Z M13,16 L13,18 L11,18 L11,16 L13,16 Z M6.99999998,7.82999998 L7.99999998,6.82999998 L8.58999999,7.41999998 L8.99999998,7.82999998 L8.99999998,9.99999999 L6.99999998,9.99999999 L6.99999998,7.82999998 Z M6.99999998,12 L8.99999998,12 L8.99999998,14 L6.99999998,14 L6.99999998,12 Z M6.99999998,16 L8.99999998,16 L8.99999998,18 L6.99999998,18 L6.99999998,16 Z M17,18 L15,18 L15,16 L17,16 L17,18 Z M17,14 L15,14 L15,12 L17,12 L17,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "fence",
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

export const PlacesFenceIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    