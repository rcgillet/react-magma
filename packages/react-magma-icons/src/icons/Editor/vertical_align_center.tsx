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
    "vertical_align_center"
  ],
  "paths": [
    {
      "d": "M9.20999999,19 L11,19 L11,22 C11,22.55 11.45,23 12,23 C12.55,23 13,22.55 13,22 L13,19 L14.79,19 C15.24,19 15.46,18.46 15.14,18.15 L12.35,15.36 C12.15,15.16 11.84,15.16 11.64,15.36 L8.84999999,18.15 C8.53999999,18.46 8.75999999,19 9.20999999,19 L9.20999999,19 Z M14.79,4.99999995 L13,4.99999995 L13,1.99999995 C13,1.44999996 12.55,0.999999954 12,0.999999954 C11.45,0.999999954 11,1.44999996 11,1.99999995 L11,4.99999995 L9.20999999,4.99999995 C8.75999999,4.99999995 8.53999999,5.53999997 8.84999999,5.84999997 L11.64,8.63999999 C11.84,8.83999999 12.15,8.83999999 12.35,8.63999999 L15.14,5.84999997 C15.46,5.53999997 15.24,4.99999995 14.79,4.99999995 Z M3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L19,13 C19.55,13 20,12.55 20,12 C20,11.45 19.55,11 19,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "vertical_align_center",
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

export const EditorVerticalAlignCenterIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    