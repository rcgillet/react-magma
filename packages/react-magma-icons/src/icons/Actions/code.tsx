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
    "code"
  ],
  "paths": [
    {
      "d": "M8.69999999,15.9 L4.79999997,12 L8.69999999,8.09999998 C9.08999999,7.70999998 9.08999999,7.08999998 8.69999999,6.69999998 C8.30999998,6.30999998 7.68999998,6.30999998 7.29999998,6.69999998 L2.70999996,11.29 C2.31999996,11.68 2.31999996,12.31 2.70999996,12.7 L7.29999998,17.3 C7.68999998,17.69 8.30999998,17.69 8.69999999,17.3 C9.08999999,16.91 9.08999999,16.29 8.69999999,15.9 L8.69999999,15.9 Z M15.3,15.9 L19.2,12 L15.3,8.09999998 C14.91,7.70999998 14.91,7.08999998 15.3,6.69999998 C15.69,6.30999998 16.31,6.30999998 16.7,6.69999998 L21.29,11.29 C21.68,11.68 21.68,12.31 21.29,12.7 L16.7,17.3 C16.31,17.69 15.69,17.69 15.3,17.3 C14.91,16.91 14.91,16.29 15.3,15.9 L15.3,15.9 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "code",
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

export const ActionsCodeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    