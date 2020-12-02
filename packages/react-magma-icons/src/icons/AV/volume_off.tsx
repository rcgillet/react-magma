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
    "volume_off"
  ],
  "paths": [
    {
      "d": "M3.62999997,3.62999997 C3.23999996,4.01999997 3.23999996,4.64999997 3.62999997,5.03999997 L7.28999998,8.69999999 L6.99999996,8.99999999 L3.99999996,8.99999999 C3.44999996,8.99999999 2.99999996,9.44999999 2.99999996,9.99999999 L2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 L6.99999996,15 L10.29,18.29 C10.92,18.92 12,18.47 12,17.58 L12,13.41 L16.18,17.59 C15.69,17.96 15.16,18.27 14.58,18.5 C14.22,18.65 14,19.03 14,19.42 C14,20.14 14.73,20.6 15.39,20.33 C16.19,20 16.94,19.56 17.61,19.02 L18.95,20.36 C19.34,20.75 19.97,20.75 20.36,20.36 C20.75,19.97 20.75,19.34 20.36,18.95 L5.04999997,3.62999997 C4.65999997,3.23999996 4.02999997,3.23999996 3.62999997,3.62999997 Z M19,12 C19,12.82 18.85,13.61 18.59,14.34 L20.12,15.87 C20.68,14.7 21,13.39 21,12 C21,8.16999998 18.6,4.88999997 15.22,3.59999996 C14.63,3.36999996 14,3.82999997 14,4.45999997 L14,4.64999997 C14,5.02999997 14.25,5.35999997 14.61,5.49999997 C17.18,6.53999998 19,9.05999999 19,12 Z M10.29,5.70999997 L10.12,5.87999997 L12,7.75999998 L12,6.40999998 C12,5.51999997 10.92,5.07999997 10.29,5.70999997 Z M16.5,12 C16.5,10.23 15.48,8.70999999 14,7.96999998 L14,9.75999999 L16.48,12.24 C16.49,12.16 16.5,12.08 16.5,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "volume_off",
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

export const AVVolumeOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    