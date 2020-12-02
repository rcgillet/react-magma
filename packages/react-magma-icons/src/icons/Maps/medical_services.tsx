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
    "medical_services"
  ],
  "paths": [
    {
      "d": "M20,5.99999996 L16,5.99999996 L16,3.99999996 C16,2.89999996 15.1,1.99999996 14,1.99999996 L9.99999996,1.99999996 C8.89999999,1.99999996 7.99999996,2.89999996 7.99999996,3.99999996 L7.99999996,5.99999996 L3.99999996,5.99999996 C2.89999996,5.99999996 1.99999996,6.89999998 1.99999996,7.99999996 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,7.99999996 C22,6.89999998 21.1,5.99999996 20,5.99999996 Z M9.99999999,3.99999997 L14,3.99999997 L14,5.99999997 L9.99999999,5.99999997 L9.99999999,3.99999997 Z M15,15 L13,15 L13,17 C13,17.55 12.55,18 12,18 C11.45,18 11,17.55 11,17 L11,15 L8.99999998,15 C8.44999999,15 7.99999998,14.55 7.99999998,14 C7.99999998,13.45 8.44999999,13 8.99999998,13 L11,13 L11,11 C11,10.45 11.45,9.99999999 12,9.99999999 C12.55,9.99999999 13,10.45 13,11 L13,13 L15,13 C15.55,13 16,13.45 16,14 C16,14.55 15.55,15 15,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "medical_services",
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

export const MapsMedicalServicesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    