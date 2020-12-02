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
    "checkroom"
  ],
  "paths": [
    {
      "d": "M21.6,18.2 L13,11.75 L13,10.84 C14.65,10.35 15.8,8.66999999 15.43,6.78999998 C15.17,5.47999997 14.13,4.38999997 12.82,4.08999997 C11.06,3.68999997 9.44999999,4.61999997 8.79999999,6.06999998 C8.49999999,6.73999998 8.97999999,7.49999998 9.70999999,7.49999998 L9.70999999,7.49999998 C10.1,7.49999998 10.46,7.27999998 10.61,6.92999998 C10.84,6.37999998 11.37,5.99999998 12,5.99999998 C12.83,5.99999998 13.5,6.66999998 13.5,7.49999998 C13.5,8.33999998 12.81,9.01999999 11.97,8.99999999 C11.43,8.98999999 11,9.44999999 11,9.98999999 L11,11.75 L2.39999996,18.2 C1.62999996,18.78 2.03999996,20 2.99999996,20 L12,20 L21,20 C21.96,20 22.37,18.78 21.6,18.2 Z M5.99999997,18 L12,13.5 L18,18 L5.99999997,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "checkroom",
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

export const PlacesCheckroomIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    