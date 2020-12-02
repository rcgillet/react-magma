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
    "height"
  ],
  "paths": [
    {
      "d": "M13,6.98999998 L14.79,6.98999998 C15.24,6.98999998 15.46,6.44999998 15.14,6.13999998 L12.35,3.35999996 C12.15,3.16999996 11.84,3.16999996 11.64,3.35999996 L8.85999999,6.13999998 C8.53999999,6.44999998 8.75999999,6.98999998 9.20999999,6.98999998 L11,6.98999998 L11,17.01 L9.20999999,17.01 C8.75999999,17.01 8.53999999,17.55 8.85999999,17.86 L11.65,20.64 C11.85,20.83 12.16,20.83 12.36,20.64 L15.15,17.86 C15.47,17.55 15.24,17.01 14.8,17.01 L13,17.01 L13,6.98999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "height",
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

export const EditorHeightIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    