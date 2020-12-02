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
    "local_pharmacy"
  ],
  "paths": [
    {
      "d": "M18.89,4.99999997 L18.36,4.99999997 L19.07,3.02999996 C19.31,2.37999996 18.97,1.65999996 18.32,1.42999996 C17.67,1.18999995 16.95,1.52999996 16.71,2.17999996 L15.69,4.99999997 L5.09999997,4.99999997 C3.72999997,4.99999997 2.76999996,6.33999998 3.19999996,7.62999998 L4.99999997,13 L3.20999996,18.37 C2.76999996,19.66 3.73999997,21 5.09999997,21 L18.88,21 C20.24,21 21.21,19.66 20.78,18.37 L19,13 L20.78,7.62999998 C21.21,6.33999998 20.25,4.99999997 18.89,4.99999997 Z M15,14 L13,14 L13,16 C13,16.55 12.55,17 12,17 C11.45,17 11,16.55 11,16 L11,14 L8.99999998,14 C8.44999999,14 7.99999998,13.55 7.99999998,13 C7.99999998,12.45 8.44999999,12 8.99999998,12 L11,12 L11,9.99999999 C11,9.44999999 11.45,8.99999999 12,8.99999999 C12.55,8.99999999 13,9.44999999 13,9.99999999 L13,12 L15,12 C15.55,12 16,12.45 16,13 C16,13.55 15.55,14 15,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_pharmacy",
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

export const MapsLocalPharmacyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    