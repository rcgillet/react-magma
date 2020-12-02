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
    "add_comment"
  ],
  "paths": [
    {
      "d": "M22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,16 C1.99999996,17.1 2.89999996,18 3.99999996,18 L18,18 L22,22 L22,3.99999996 Z M16,11 L13,11 L13,14 C13,14.55 12.55,15 12,15 C11.45,15 11,14.55 11,14 L11,11 L7.99999998,11 C7.44999998,11 6.99999998,10.55 6.99999998,9.99999997 C6.99999998,9.44999999 7.44999998,8.99999997 7.99999998,8.99999997 L11,8.99999997 L11,5.99999997 C11,5.44999997 11.45,4.99999997 12,4.99999997 C12.55,4.99999997 13,5.44999997 13,5.99999997 L13,8.99999997 L16,8.99999997 C16.55,8.99999997 17,9.44999999 17,9.99999997 C17,10.55 16.55,11 16,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "add_comment",
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

export const EditorAddCommentIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    