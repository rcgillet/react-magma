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
    "feedback"
  ],
  "paths": [
    {
      "d": "M20,1.99999996 L4.00999996,1.99999996 C2.90999996,1.99999996 2.00999996,2.89999996 2.00999996,3.99999996 L2.00999996,22 L5.99999997,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M13,14 L11,14 L11,12 L13,12 L13,14 Z M13,8.99999998 C13,9.54999999 12.55,9.99999998 12,9.99999998 C11.45,9.99999998 11,9.54999999 11,8.99999998 L11,6.99999998 C11,6.44999998 11.45,5.99999998 12,5.99999998 C12.55,5.99999998 13,6.44999998 13,6.99999998 L13,8.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "feedback",
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

export const ActionsFeedbackIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    