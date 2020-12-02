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
    "outlet"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M8.99999998,12 C8.44999999,12 7.99999998,11.55 7.99999998,11 L7.99999998,7.99999998 C7.99999998,7.44999998 8.44999999,6.99999998 8.99999998,6.99999998 C9.54999999,6.99999998 9.99999998,7.44999998 9.99999998,7.99999998 L9.99999998,11 C9.99999998,11.55 9.54999999,12 8.99999998,12 Z M13,18 L11,18 C10.45,18 9.99999999,17.55 9.99999999,17 L9.99999999,16.11 C9.99999999,15.11 10.68,14.19 11.66,14.03 C12.92,13.82 14,14.79 14,16 L14,17 C14,17.55 13.55,18 13,18 Z M16,11 C16,11.55 15.55,12 15,12 C14.45,12 14,11.55 14,11 L14,7.99999998 C14,7.44999998 14.45,6.99999998 15,6.99999998 C15.55,6.99999998 16,7.44999998 16,7.99999998 L16,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "outlet",
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

export const ActionsOutletIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    