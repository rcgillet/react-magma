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
    "expand_less"
  ],
  "paths": [
    {
      "d": "M11.29,8.70999999 L6.69999998,13.3 C6.30999998,13.69 6.30999998,14.32 6.69999998,14.71 C7.08999998,15.1 7.71999998,15.1 8.10999998,14.71 L12,10.83 L15.88,14.71 C16.27,15.1 16.9,15.1 17.29,14.71 C17.68,14.32 17.68,13.69 17.29,13.3 L12.7,8.70999999 C12.32,8.31999998 11.68,8.31999998 11.29,8.70999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "expand_less",
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

export const NavigationExpandLessIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    