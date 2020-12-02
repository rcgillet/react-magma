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
    "swap_vert"
  ],
  "paths": [
    {
      "d": "M16,17.01 L16,11 C16,10.45 15.55,9.99999999 15,9.99999999 C14.45,9.99999999 14,10.45 14,11 L14,17.01 L12.21,17.01 C11.76,17.01 11.54,17.55 11.86,17.86 L14.65,20.64 C14.85,20.83 15.16,20.83 15.36,20.64 L18.15,17.86 C18.47,17.55 18.24,17.01 17.8,17.01 L16,17.01 L16,17.01 Z M8.64999999,3.34999996 L5.85999997,6.13999998 C5.53999997,6.44999998 5.75999997,6.98999998 6.20999998,6.98999998 L7.99999998,6.98999998 L7.99999998,13 C7.99999998,13.55 8.44999999,14 8.99999999,14 C9.54999999,14 9.99999999,13.55 9.99999999,13 L9.99999999,6.98999998 L11.79,6.98999998 C12.24,6.98999998 12.46,6.44999998 12.14,6.13999998 L9.34999999,3.34999996 C9.15999999,3.15999996 8.83999999,3.15999996 8.64999999,3.34999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "swap_vert",
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

export const ActionsSwapVertIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    