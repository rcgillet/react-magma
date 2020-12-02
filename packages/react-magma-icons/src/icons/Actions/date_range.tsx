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
    "date_range"
  ],
  "paths": [
    {
      "d": "M19,3.99999996 L18,3.99999996 L18,2.99999996 C18,2.44999996 17.55,1.99999996 17,1.99999996 C16.45,1.99999996 16,2.44999996 16,2.99999996 L16,3.99999996 L7.99999996,3.99999996 L7.99999996,2.99999996 C7.99999996,2.44999996 7.54999998,1.99999996 6.99999996,1.99999996 C6.44999998,1.99999996 5.99999996,2.44999996 5.99999996,2.99999996 L5.99999996,3.99999996 L4.99999996,3.99999996 C3.88999997,3.99999996 3.00999996,4.89999997 3.00999996,5.99999996 L2.99999996,20 C2.99999996,21.1 3.88999997,22 4.99999996,22 L19,22 C20.1,22 21,21.1 21,20 L21,5.99999996 C21,4.89999997 20.1,3.99999996 19,3.99999996 Z M19,19 C19,19.55 18.55,20 18,20 L5.99999997,20 C5.44999997,20 4.99999997,19.55 4.99999997,19 L4.99999997,8.99999999 L19,8.99999999 L19,19 Z M6.99999998,11 L8.99999998,11 L8.99999998,13 L6.99999998,13 L6.99999998,11 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z M15,11 L17,11 L17,13 L15,13 L15,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "date_range",
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

export const ActionsDateRangeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    