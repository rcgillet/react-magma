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
    "open_in_full"
  ],
  "paths": [
    {
      "d": "M21,8.58999999 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L15.41,2.99999996 C14.52,2.99999996 14.07,4.07999997 14.7,4.70999997 L16.29,6.29999998 L6.28999998,16.3 L4.69999997,14.71 C4.07999997,14.08 2.99999996,14.52 2.99999996,15.41 L2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 L8.58999999,21 C9.47999999,21 9.92999999,19.92 9.29999999,19.29 L7.70999998,17.7 L17.71,7.69999998 L19.3,9.28999999 C19.92,9.91999999 21,9.47999999 21,8.58999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "open_in_full",
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

export const ActionsOpenInFullIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    