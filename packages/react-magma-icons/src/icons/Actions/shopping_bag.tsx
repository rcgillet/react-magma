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
    "shopping_bag"
  ],
  "paths": [
    {
      "d": "M18,5.99999996 L16,5.99999996 C16,3.78999997 14.21,1.99999996 12,1.99999996 C9.78999999,1.99999996 7.99999997,3.78999997 7.99999997,5.99999996 L5.99999997,5.99999996 C4.89999997,5.99999996 3.99999997,6.89999998 3.99999997,7.99999996 L3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,7.99999996 C20,6.89999998 19.1,5.99999996 18,5.99999996 Z M9.99999998,9.99999998 C9.99999998,10.55 9.54999999,11 8.99999998,11 C8.44999999,11 7.99999998,10.55 7.99999998,9.99999998 L7.99999998,7.99999998 L9.99999998,7.99999998 L9.99999998,9.99999998 Z M12,3.99999997 C13.1,3.99999997 14,4.89999997 14,5.99999997 L9.99999999,5.99999997 C9.99999999,4.89999997 10.9,3.99999997 12,3.99999997 Z M16,9.99999998 C16,10.55 15.55,11 15,11 C14.45,11 14,10.55 14,9.99999998 L14,7.99999998 L16,7.99999998 L16,9.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "shopping_bag",
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

export const ActionsShoppingBagIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    