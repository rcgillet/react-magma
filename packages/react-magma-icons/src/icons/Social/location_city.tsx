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
    "location_city"
  ],
  "paths": [
    {
      "d": "M15,11 L15,5.82999997 C15,5.29999997 14.79,4.78999997 14.41,4.41999997 L12.7,2.70999996 C12.31,2.31999996 11.68,2.31999996 11.29,2.70999996 L9.58999999,4.40999997 C9.20999999,4.78999997 8.99999996,5.29999997 8.99999996,5.82999997 L8.99999996,6.99999998 L4.99999996,6.99999998 C3.89999997,6.99999998 2.99999996,7.89999998 2.99999996,8.99999999 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,11.9 20.1,11 19,11 L15,11 Z M6.99999997,19 L4.99999997,19 L4.99999997,17 L6.99999997,17 L6.99999997,19 Z M6.99999997,15 L4.99999997,15 L4.99999997,13 L6.99999997,13 L6.99999997,15 Z M6.99999997,11 L4.99999997,11 L4.99999997,8.99999999 L6.99999997,8.99999999 L6.99999997,11 Z M13,19 L11,19 L11,17 L13,17 L13,19 Z M13,15 L11,15 L11,13 L13,13 L13,15 Z M13,11 L11,11 L11,8.99999999 L13,8.99999999 L13,11 Z M13,6.99999997 L11,6.99999997 L11,4.99999997 L13,4.99999997 L13,6.99999997 Z M19,19 L17,19 L17,17 L19,17 L19,19 Z M19,15 L17,15 L17,13 L19,13 L19,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "location_city",
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

export const SocialLocationCityIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    