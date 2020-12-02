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
    "notes"
  ],
  "paths": [
    {
      "d": "M20,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 Z M3.99999996,18 L14,18 C14.55,18 15,17.55 15,17 C15,16.45 14.55,16 14,16 L3.99999996,16 C3.44999996,16 2.99999996,16.45 2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 Z M20,5.99999997 L3.99999996,5.99999997 C3.44999996,5.99999997 2.99999996,6.44999998 2.99999996,6.99999997 L2.99999996,7.00999998 C2.99999996,7.55999998 3.44999996,8.00999998 3.99999996,8.00999998 L20,8.00999998 C20.55,8.00999998 21,7.55999998 21,7.00999998 L21,6.99999997 C21,6.44999998 20.55,5.99999997 20,5.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "notes",
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

export const EditorNotesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    