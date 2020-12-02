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
    "view_column"
  ],
  "paths": [
    {
      "d": "M11,18 L14,18 C14.55,18 15,17.55 15,17 L15,5.99999997 C15,5.44999997 14.55,4.99999997 14,4.99999997 L11,4.99999997 C10.45,4.99999997 9.99999999,5.44999997 9.99999999,5.99999997 L9.99999999,17 C9.99999999,17.55 10.45,18 11,18 Z M4.99999997,18 L7.99999997,18 C8.54999999,18 8.99999997,17.55 8.99999997,17 L8.99999997,5.99999997 C8.99999997,5.44999997 8.54999999,4.99999997 7.99999997,4.99999997 L4.99999997,4.99999997 C4.44999997,4.99999997 3.99999997,5.44999997 3.99999997,5.99999997 L3.99999997,17 C3.99999997,17.55 4.44999997,18 4.99999997,18 Z M16,5.99999997 L16,17 C16,17.55 16.45,18 17,18 L20,18 C20.55,18 21,17.55 21,17 L21,5.99999997 C21,5.44999997 20.55,4.99999997 20,4.99999997 L17,4.99999997 C16.45,4.99999997 16,5.44999997 16,5.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "view_column",
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

export const ActionsViewColumnIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    