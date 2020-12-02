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
    "sticky_note_2"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.98999997,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L3.00999996,19 C3.00999996,20.1 3.89999997,21 4.99999996,21 L15,21 L21,15 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M7.99999998,7.99999998 L16,7.99999998 C16.55,7.99999998 17,8.44999999 17,8.99999998 L17,8.99999998 C17,9.54999999 16.55,9.99999998 16,9.99999998 L7.99999998,9.99999998 C7.44999998,9.99999998 6.99999998,9.54999999 6.99999998,8.99999998 L6.99999998,8.99999998 C6.99999998,8.44999999 7.44999998,7.99999998 7.99999998,7.99999998 Z M11,14 L7.99999998,14 C7.44999998,14 6.99999998,13.55 6.99999998,13 L6.99999998,13 C6.99999998,12.45 7.44999998,12 7.99999998,12 L11,12 C11.55,12 12,12.45 12,13 L12,13 C12,13.55 11.55,14 11,14 Z M14,19.5 L14,15 C14,14.45 14.45,14 15,14 L19.5,14 L14,19.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "sticky_note_2",
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

export const ActionsStickyNote2Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    