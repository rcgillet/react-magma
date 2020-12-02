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
    "rv_hookup"
  ],
  "paths": [
    {
      "d": "M21,17 L20,17 L20,11 C20,9.89999999 19.1,8.99999999 18,8.99999999 L6.99999997,8.99999999 L6.99999997,8.25999998 C6.99999997,7.79999998 6.43999998,7.55999998 6.10999998,7.88999998 L4.36999997,9.62999999 C4.16999997,9.82999999 4.16999997,10.16 4.36999997,10.37 L6.10999998,12.11 C6.43999998,12.44 6.99999997,12.21 6.99999997,11.74 L6.99999997,11 L11,11 L11,14 L4.99999997,14 C4.44999997,14 3.99999997,14.45 3.99999997,15 L3.99999997,17 C3.99999997,18.1 4.89999997,19 5.99999997,19 L7.99999997,19 C7.99999997,20.66 9.33999999,22 11,22 C12.66,22 14,20.66 14,19 L21,19 C21.55,19 22,18.55 22,18 C22,17.45 21.55,17 21,17 Z M11,20 C10.45,20 9.99999999,19.55 9.99999999,19 C9.99999999,18.45 10.45,18 11,18 C11.55,18 12,18.45 12,19 C12,19.55 11.55,20 11,20 Z M18,14 L14,14 L14,11 L17,11 C17.55,11 18,11.45 18,12 L18,14 Z M9.99999999,5.99999998 L17,5.99999998 L17,6.73999998 C17,7.19999998 17.56,7.43999998 17.89,7.10999998 L19.63,5.36999997 C19.83,5.16999997 19.83,4.83999997 19.63,4.62999997 L17.89,2.88999996 C17.56,2.55999996 17,2.78999996 17,3.25999996 L17,3.99999997 L9.99999999,3.99999997 C9.44999999,3.99999997 8.99999999,4.44999997 8.99999999,4.99999997 C8.99999999,5.54999997 9.44999999,5.99999998 9.99999999,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "rv_hookup",
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

export const PlacesRvHookupIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    