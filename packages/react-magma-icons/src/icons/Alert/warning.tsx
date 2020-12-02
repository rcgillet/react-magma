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
    "warning"
  ],
  "paths": [
    {
      "d": "M4.46999997,21 L19.53,21 C21.07,21 22.03,19.33 21.26,18 L13.73,4.98999997 C12.96,3.65999997 11.04,3.65999997 10.27,4.98999997 L2.73999996,18 C1.96999996,19.33 2.92999996,21 4.46999997,21 Z M12,14 C11.45,14 11,13.55 11,13 L11,11 C11,10.45 11.45,9.99999999 12,9.99999999 C12.55,9.99999999 13,10.45 13,11 L13,13 C13,13.55 12.55,14 12,14 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "warning",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const AlertWarningIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    