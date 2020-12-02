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
    "windows8"
  ],
  "paths": [
    {
      "d": "M2.00733333,11.3333333 L2,4.832 L10,3.74533333 L10,11.3333333 L2.00733333,11.3333333 Z M11.3333333,3.552 L21.9973333,2 L21.9973333,11.3333333 L11.3333333,11.3333333 L11.3333333,3.552 Z M22,12.6666667 L21.9973333,22 L11.3333333,20.5 L11.3333333,12.6666667 L22,12.6666667 Z M10,20.33 L2.00666667,19.234 L2.006,12.6666667 L10,12.6666667 L10,20.33 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "windows8",
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
          "id": "Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const CompaniesWindows8Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    