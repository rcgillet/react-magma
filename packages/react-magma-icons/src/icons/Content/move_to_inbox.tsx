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
    "move_to_inbox"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.98999997,2.99999996 C3.87999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.87999997,21 4.98999997,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M19,15 L15.87,15 C15.4,15 15.02,15.34 14.89,15.8 C14.54,17.07 13.37,18 12,18 C10.63,18 9.45999999,17.07 9.10999999,15.8 C8.97999999,15.34 8.59999999,15 8.12999998,15 L4.98999997,15 L4.98999997,5.99999997 C4.98999997,5.44999997 5.43999997,4.99999997 5.98999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,15 Z M16,9.99999998 L14,9.99999998 L14,6.99999998 L9.99999998,6.99999998 L9.99999998,9.99999998 L7.99999998,9.99999998 L11.65,13.65 C11.85,13.85 12.16,13.85 12.36,13.65 L16,9.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "move_to_inbox",
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

export const ContentMoveToInboxIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    