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
    "mark_email_read"
  ],
  "paths": [
    {
      "d": "M18.05,21.29 C17.66,21.68 17.03,21.68 16.64,21.29 L14.52,19.17 C14.13,18.78 14.13,18.15 14.52,17.76 L14.52,17.76 C14.91,17.37 15.54,17.37 15.93,17.76 L17.34,19.17 L20.88,15.63 C21.27,15.24 21.9,15.24 22.29,15.63 L22.29,15.63 C22.68,16.02 22.68,16.65 22.29,17.04 L18.05,21.29 Z M12.08,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,5.99999997 C1.99999996,4.89999997 2.89999996,3.99999997 3.99999996,3.99999997 L20,3.99999997 C21.1,3.99999997 22,4.89999997 22,5.99999997 L22,12.68 C21.09,12.25 20.08,12 19,12 C15.13,12 12,15.13 12,19 C12,19.34 12.03,19.67 12.08,20 Z M11.47,12.67 C11.79,12.87 12.21,12.87 12.53,12.67 L19.6,8.24999998 C19.85,8.08999998 20,7.81999998 20,7.52999998 C20,6.85999998 19.27,6.45999998 18.7,6.80999998 L12,11 L5.29999997,6.80999998 C4.72999997,6.45999998 3.99999997,6.85999998 3.99999997,7.52999998 C3.99999997,7.81999998 4.14999997,8.08999998 4.39999997,8.24999998 L11.47,12.67 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "mark_email_read",
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

export const CommunicationMarkEmailReadIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    