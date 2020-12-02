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
    "business_center"
  ],
  "paths": [
    {
      "d": "M13,16 L11,16 C10.45,16 9.99999999,15.55 9.99999999,15 L3.00999996,15 L3.00999996,19 C3.00999996,20.1 3.90999997,21 5.00999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,15 L14,15 C14,15.55 13.55,16 13,16 Z M20,6.99999996 L16,6.99999996 C16,4.78999997 14.21,2.99999996 12,2.99999996 C9.78999999,2.99999996 7.99999996,4.78999997 7.99999996,6.99999996 L3.99999996,6.99999996 C2.89999996,6.99999996 1.99999996,7.89999998 1.99999996,8.99999996 L1.99999996,12 C1.99999996,13.11 2.88999996,14 3.99999996,14 L9.99999996,14 L9.99999996,13 C9.99999996,12.45 10.45,12 11,12 L13,12 C13.55,12 14,12.45 14,13 L14,14 L20,14 C21.1,14 22,13.1 22,12 L22,8.99999996 C22,7.89999998 21.1,6.99999996 20,6.99999996 Z M9.99999999,6.99999997 C9.99999999,5.89999997 10.9,4.99999997 12,4.99999997 C13.1,4.99999997 14,5.89999997 14,6.99999997 L9.98999999,6.99999997 L9.99999999,6.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "business_center",
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

export const PlacesBusinessCenterIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    