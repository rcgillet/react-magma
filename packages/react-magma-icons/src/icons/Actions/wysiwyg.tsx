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
    "wysiwyg"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.11,2.99999996 19,2.99999996 Z M19,19 L4.99999997,19 L4.99999997,6.99999998 L19,6.99999998 L19,19 Z M16,12 L7.99999998,12 C7.44999998,12 6.99999998,11.55 6.99999998,11 L6.99999998,11 C6.99999998,10.45 7.44999998,9.99999999 7.99999998,9.99999999 L16,9.99999999 C16.55,9.99999999 17,10.45 17,11 L17,11 C17,11.55 16.55,12 16,12 Z M12,16 L7.99999998,16 C7.44999998,16 6.99999998,15.55 6.99999998,15 L6.99999998,15 C6.99999998,14.45 7.44999998,14 7.99999998,14 L12,14 C12.55,14 13,14.45 13,15 L13,15 C13,15.55 12.55,16 12,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wysiwyg",
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

export const ActionsWysiwygIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    