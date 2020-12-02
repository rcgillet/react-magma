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
    "food_bank"
  ],
  "paths": [
    {
      "d": "M10.8,3.89999997 L4.79999997,8.39999999 C4.29999997,8.77999999 3.99999997,9.36999999 3.99999997,9.99999999 L3.99999997,19 C3.99999997,20.1 4.89999997,21 5.99999997,21 L18,21 C19.1,21 20,20.1 20,19 L20,9.99999999 C20,9.36999999 19.7,8.77999999 19.2,8.39999999 L13.2,3.89999997 C12.49,3.36999996 11.51,3.36999996 10.8,3.89999997 Z M12.5,12.5 C12.5,13.33 11.83,14 11,14 L11,17.5 C11,17.78 10.78,18 10.5,18 L10.5,18 C10.22,18 9.99999999,17.78 9.99999999,17.5 L9.99999999,14 C9.16999999,14 8.49999999,13.33 8.49999999,12.5 L8.49999999,9.99999999 C8.49999999,9.71999999 8.71999999,9.49999999 8.99999999,9.49999999 L8.99999999,9.49999999 C9.27999999,9.49999999 9.49999999,9.71999999 9.49999999,9.99999999 L9.49999999,12.5 L9.99999999,12.5 L9.99999999,9.99999999 C9.99999999,9.71999999 10.22,9.49999999 10.5,9.49999999 L10.5,9.49999999 C10.78,9.49999999 11,9.71999999 11,9.99999999 L11,12.5 L11.5,12.5 L11.5,9.99999999 C11.5,9.71999999 11.72,9.49999999 12,9.49999999 L12,9.49999999 C12.28,9.49999999 12.5,9.71999999 12.5,9.99999999 L12.5,12.5 Z M14.5,18 L14.5,18 C14.22,18 14,17.78 14,17.5 L14,14.5 L13.5,14.5 C13.22,14.5 13,14.28 13,14 L13,11.5 C13,10.62 13.57,9.86999999 14.36,9.60999999 C14.67,9.49999999 15,9.74999999 15,10.09 L15,17.5 C15,17.78 14.78,18 14.5,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "food_bank",
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

export const PlacesFoodBankIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    