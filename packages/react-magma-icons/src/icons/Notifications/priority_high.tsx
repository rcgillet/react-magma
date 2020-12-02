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
    "priority_high"
  ],
  "paths": [
    {
      "d": "M12,17 C13.1045695,17 14,17.8954305 14,19 C14,20.1045695 13.1045695,21 12,21 C10.8954305,21 9.99999999,20.1045695 9.99999999,19 C9.99999999,17.8954305 10.8954305,17 12,17 Z M12,2.99999996 C13.1,2.99999996 14,3.89999997 14,4.99999996 L14,4.99999996 L14,13 C14,14.1 13.1,15 12,15 C10.9,15 9.99999999,14.1 9.99999999,13 L9.99999999,13 L9.99999999,4.99999996 C9.99999999,3.89999997 10.9,2.99999996 12,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "priority_high",
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

export const NotificationsPriorityHighIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    