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
    "format_paint"
  ],
  "paths": [
    {
      "d": "M18,3.99999996 L18,2.99999996 C18,2.44999996 17.55,1.99999996 17,1.99999996 L4.99999997,1.99999996 C4.44999997,1.99999996 3.99999997,2.44999996 3.99999997,2.99999996 L3.99999997,6.99999996 C3.99999997,7.54999998 4.44999997,7.99999996 4.99999997,7.99999996 L17,7.99999996 C17.55,7.99999996 18,7.54999998 18,6.99999996 L18,5.99999996 L19,5.99999996 L19,9.99999996 L9.99999997,9.99999996 C9.44999999,9.99999996 8.99999997,10.45 8.99999997,11 L8.99999997,21 C8.99999997,21.55 9.44999999,22 9.99999997,22 L12,22 C12.55,22 13,21.55 13,21 L13,12 L20,12 C20.55,12 21,11.55 21,11 L21,4.99999996 C21,4.44999997 20.55,3.99999996 20,3.99999996 L18,3.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "format_paint",
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

export const EditorFormatPaintIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    