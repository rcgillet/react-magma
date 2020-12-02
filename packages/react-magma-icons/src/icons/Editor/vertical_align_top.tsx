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
    "vertical_align_top"
  ],
  "paths": [
    {
      "d": "M9.20999999,11 L11,11 L11,20 C11,20.55 11.45,21 12,21 C12.55,21 13,20.55 13,20 L13,11 L14.79,11 C15.24,11 15.46,10.46 15.14,10.15 L12.35,7.35999998 C12.15,7.15999998 11.84,7.15999998 11.64,7.35999998 L8.84999999,10.15 C8.53999999,10.46 8.75999999,11 9.20999999,11 L9.20999999,11 Z M3.99999997,3.99999996 C3.99999997,4.54999997 4.44999997,4.99999996 4.99999997,4.99999996 L19,4.99999996 C19.55,4.99999996 20,4.54999997 20,3.99999996 C20,3.44999996 19.55,2.99999996 19,2.99999996 L4.99999997,2.99999996 C4.44999997,2.99999996 3.99999997,3.44999996 3.99999997,3.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "vertical_align_top",
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

export const EditorVerticalAlignTopIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    