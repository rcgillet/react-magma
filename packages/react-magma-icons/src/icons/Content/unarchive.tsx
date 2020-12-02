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
    "unarchive"
  ],
  "paths": [
    {
      "d": "M20.55,5.21999997 L19.16,3.53999996 C18.88,3.20999996 18.47,2.99999996 18,2.99999996 L5.99999996,2.99999996 C5.52999997,2.99999996 5.11999997,3.20999996 4.84999997,3.54999996 L3.45999996,5.21999997 C3.16999996,5.56999997 2.99999996,6.00999998 2.99999996,6.49999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.49999996 C21,6.00999998 20.83,5.56999997 20.55,5.21999997 Z M12.35,9.84999999 L17.5,15 L14,15 L14,17 L9.99999998,17 L9.99999998,15 L6.49999998,15 L11.65,9.84999999 C11.84,9.65999999 12.16,9.65999999 12.35,9.84999999 L12.35,9.84999999 Z M5.11999997,4.99999997 L5.93999997,3.99999997 L17.94,3.99999997 L18.87,4.99999997 L5.11999997,4.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "unarchive",
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

export const ContentUnarchiveIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    