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
    "swap_horiz"
  ],
  "paths": [
    {
      "d": "M6.13999998,11.86 L3.35999996,14.65 C3.16999996,14.85 3.16999996,15.16 3.35999996,15.36 L6.13999998,18.15 C6.44999998,18.47 6.98999998,18.24 6.98999998,17.8 L6.98999998,16 L13,16 C13.55,16 14,15.55 14,15 C14,14.45 13.55,14 13,14 L6.98999998,14 L6.98999998,12.21 C6.98999998,11.76 6.44999998,11.54 6.13999998,11.86 L6.13999998,11.86 Z M20.65,8.64999999 L17.87,5.85999997 C17.56,5.53999997 17.02,5.76999997 17.02,6.20999998 L17.02,7.99999998 L11,7.99999998 C10.45,7.99999998 9.99999999,8.44999999 9.99999999,8.99999999 C9.99999999,9.54999999 10.45,9.99999999 11,9.99999999 L17.01,9.99999999 L17.01,11.79 C17.01,12.24 17.55,12.46 17.86,12.14 L20.64,9.34999999 C20.84,9.15999999 20.84,8.83999999 20.65,8.64999999 L20.65,8.64999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "swap_horiz",
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

export const ActionsSwapHorizIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    