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
    "format_clear"
  ],
  "paths": [
    {
      "d": "M18.5,7.99999997 C19.33,7.99999997 20,7.32999998 20,6.49999997 C20,5.66999997 19.33,4.99999997 18.5,4.99999997 L6.38999998,4.99999997 L9.38999998,7.99999997 L11.22,7.99999997 L10.67,9.27999999 L12.76,11.37 L14.21,7.99999997 L18.5,7.99999997 Z M17.44,18.88 L4.11999997,5.55999997 C3.72999997,5.16999997 3.09999996,5.16999997 2.70999996,5.55999997 C2.31999996,5.94999997 2.31999996,6.57999998 2.70999996,6.96999998 L8.96999999,13.23 L7.31999998,17.07 C6.92999998,17.99 7.59999998,19 8.58999999,19 C9.13999999,19 9.63999999,18.67 9.85999999,18.16 L11.07,15.33 L16.02,20.28 C16.41,20.67 17.04,20.67 17.43,20.28 C17.83,19.9 17.83,19.27 17.44,18.88 L17.44,18.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "format_clear",
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

export const EditorFormatClearIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    