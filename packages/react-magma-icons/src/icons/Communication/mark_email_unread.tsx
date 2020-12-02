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
    "mark_email_unread"
  ],
  "paths": [
    {
      "d": "M19,9.99999997 C20.13,9.99999997 21.16,9.60999999 22,8.97999999 L22,18 C22,19.1 21.1,20 20,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,5.99999997 C1.99999996,4.89999997 2.89999996,3.99999997 3.99999996,3.99999997 L14.1,3.99999997 C14.04,4.31999997 14,4.65999997 14,4.99999997 C14,6.47999998 14.65,7.78999998 15.67,8.70999999 L12,11 L5.29999997,6.80999998 C4.72999997,6.45999998 3.99999996,6.85999998 3.99999996,7.52999998 C3.99999996,7.81999998 4.14999997,8.08999998 4.39999997,8.24999998 L11.47,12.67 C11.79,12.87 12.21,12.87 12.53,12.67 L17.3,9.68999999 C17.84,9.87999999 18.4,9.99999997 19,9.99999997 Z M16,4.99999996 C16,6.65999998 17.34,7.99999996 19,7.99999996 C20.66,7.99999996 22,6.65999998 22,4.99999996 C22,3.33999996 20.66,1.99999996 19,1.99999996 C17.34,1.99999996 16,3.33999996 16,4.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "mark_email_unread",
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

export const CommunicationMarkEmailUnreadIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    