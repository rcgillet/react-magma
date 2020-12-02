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
    "short_text"
  ],
  "paths": [
    {
      "d": "M4.99999997,8.99999999 L19,8.99999999 C19.55,8.99999999 20,9.44999999 20,9.99999999 C20,10.55 19.55,11 19,11 L4.99999997,11 C4.44999997,11 3.99999997,10.55 3.99999997,9.99999999 C3.99999997,9.44999999 4.44999997,8.99999999 4.99999997,8.99999999 Z M4.99999997,13 L13,13 C13.55,13 14,13.45 14,14 C14,14.55 13.55,15 13,15 L4.99999997,15 C4.44999997,15 3.99999997,14.55 3.99999997,14 C3.99999997,13.45 4.44999997,13 4.99999997,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "short_text",
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

export const EditorShortTextIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    