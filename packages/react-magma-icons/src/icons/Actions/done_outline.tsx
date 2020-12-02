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
    "done_outline"
  ],
  "paths": [
    {
      "d": "M20.47,5.62999997 C20.86,6.01999998 20.86,6.63999998 20.47,7.02999998 L9.12999999,18.37 C8.73999999,18.76 8.11999998,18.76 7.72999998,18.37 L3.52999996,14.17 C3.13999996,13.78 3.13999996,13.16 3.52999996,12.77 C3.91999997,12.38 4.53999997,12.38 4.92999997,12.77 L8.42999999,16.27 L19.07,5.62999997 C19.46,5.23999997 20.08,5.23999997 20.47,5.62999997 Z M18.36,3.50999996 L8.42999999,13.44 L5.63999997,10.65 C4.85999997,9.86999999 3.58999996,9.86999999 2.80999996,10.65 L1.40999996,12.05 C0.629999953,12.83 0.629999953,14.1 1.40999996,14.88 L7.00999998,20.48 C7.78999998,21.26 9.05999999,21.26 9.83999999,20.48 L22.59,7.73999998 C23.37,6.95999998 23.37,5.68999997 22.59,4.90999997 L21.19,3.50999996 C20.4,2.72999996 19.14,2.72999996 18.36,3.50999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "done_outline",
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

export const ActionsDoneOutlineIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    