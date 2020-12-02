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
    "work"
  ],
  "paths": [
    {
      "d": "M20,5.99999996 L16,5.99999996 L16,3.99999996 C16,2.88999996 15.11,1.99999996 14,1.99999996 L9.99999996,1.99999996 C8.88999999,1.99999996 7.99999996,2.88999996 7.99999996,3.99999996 L7.99999996,5.99999996 L3.99999996,5.99999996 C2.88999996,5.99999996 2.00999996,6.88999998 2.00999996,7.99999996 L1.99999996,19 C1.99999996,20.11 2.88999996,21 3.99999996,21 L20,21 C21.11,21 22,20.11 22,19 L22,7.99999996 C22,6.88999998 21.11,5.99999996 20,5.99999996 Z M14,5.99999997 L9.99999999,5.99999997 L9.99999999,3.99999997 L14,3.99999997 L14,5.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "work",
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

export const ActionsWorkIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    