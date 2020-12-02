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
    "format_color_reset"
  ],
  "paths": [
    {
      "d": "M18,14 C18,10.91 14.4,6.11999998 12.77,4.12999997 C12.37,3.63999997 11.62,3.63999997 11.22,4.12999997 C10.76,4.69999997 10.14,5.48999997 9.48999999,6.39999998 L17.93,14.84 C17.97,14.56 18,14.28 18,14 Z M19.29,19.01 L6.11999998,5.83999997 C5.72999997,5.44999997 5.09999997,5.44999997 4.70999997,5.83999997 C4.31999997,6.22999998 4.31999997,6.85999998 4.70999997,7.24999998 L7.31999998,9.85999999 C6.54999998,11.33 5.99999997,12.79 5.99999997,14 C5.99999997,17.31 8.68999999,20 12,20 C13.52,20 14.9,19.43 15.95,18.5 L17.87,20.42 C18.26,20.81 18.89,20.81 19.28,20.42 C19.68,20.04 19.68,19.4 19.29,19.01 L19.29,19.01 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "format_color_reset",
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

export const EditorFormatColorResetIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    