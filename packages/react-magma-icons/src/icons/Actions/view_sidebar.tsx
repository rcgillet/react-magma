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
    "view_sidebar"
  ],
  "paths": [
    {
      "d": "M15,20 L2.99999996,20 C2.44999996,20 1.99999996,19.55 1.99999996,19 L1.99999996,4.99999997 C1.99999996,4.44999997 2.44999996,3.99999997 2.99999996,3.99999997 L15,3.99999997 C15.55,3.99999997 16,4.44999997 16,4.99999997 L16,19 C16,19.55 15.55,20 15,20 Z M19,7.99999997 L21,7.99999997 C21.55,7.99999997 22,7.54999998 22,6.99999997 L22,4.99999997 C22,4.44999997 21.55,3.99999997 21,3.99999997 L19,3.99999997 C18.45,3.99999997 18,4.44999997 18,4.99999997 L18,6.99999997 C18,7.54999998 18.45,7.99999997 19,7.99999997 Z M19,20 L21,20 C21.55,20 22,19.55 22,19 L22,17 C22,16.45 21.55,16 21,16 L19,16 C18.45,16 18,16.45 18,17 L18,19 C18,19.55 18.45,20 19,20 Z M19,14 L21,14 C21.55,14 22,13.55 22,13 L22,11 C22,10.45 21.55,9.99999999 21,9.99999999 L19,9.99999999 C18.45,9.99999999 18,10.45 18,11 L18,13 C18,13.55 18.45,14 19,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "view_sidebar",
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

export const ActionsViewSidebarIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    