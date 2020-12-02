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
    "replay_5"
  ],
  "paths": [
    {
      "d": "M12,4.99999997 L12,2.20999996 C12,1.75999996 11.46,1.53999996 11.15,1.85999996 L7.34999998,5.64999997 C7.14999998,5.84999997 7.14999998,6.15999998 7.34999998,6.35999998 L11.14,10.15 C11.46,10.46 12,10.24 12,9.78999999 L12,6.99999998 C15.73,6.99999998 18.68,10.42 17.86,14.29 C17.39,16.55 15.72,18.28 13.47,18.82 C9.82999999,19.7 6.53999998,17.22 6.04999998,13.86 C5.98999997,13.37 5.56999997,13 5.07999997,13 C4.47999997,13 3.99999997,13.53 4.07999997,14.13 C4.70999997,18.6 9.01999999,21.88 13.85,20.8 C16.94,20.11 19.24,17.72 19.84,14.61 C20.84,9.47999999 16.94,4.99999997 12,4.99999997 Z M10.69,13.9 L10.94,11.73 L13.33,11.73 L13.33,12.44 L11.63,12.44 L11.52,13.36 C11.55,13.34 11.59,13.33 11.63,13.31 C11.67,13.29 11.72,13.27 11.78,13.26 C11.84,13.25 11.9,13.23 11.96,13.22 C12.02,13.21 12.09,13.2 12.16,13.2 C12.37,13.2 12.55,13.23 12.71,13.3 C12.87,13.37 13.01,13.46 13.12,13.58 C13.23,13.7 13.32,13.85 13.37,14.03 C13.42,14.21 13.46,14.41 13.46,14.63 C13.46,14.82 13.43,15 13.37,15.17 C13.31,15.34 13.22,15.49 13.1,15.62 C12.98,15.75 12.83,15.86 12.65,15.93 C12.47,16 12.26,16.05 12.01,16.05 C11.83,16.05 11.65,16.02 11.48,15.97 C11.31,15.92 11.16,15.83 11.02,15.73 C10.88,15.63 10.78,15.49 10.7,15.34 C10.62,15.19 10.57,15.01 10.57,14.81 L11.41,14.81 C11.43,14.99 11.49,15.13 11.6,15.22 C11.71,15.31 11.85,15.37 12.02,15.37 C12.13,15.37 12.22,15.35 12.29,15.31 C12.36,15.27 12.43,15.21 12.47,15.14 C12.51,15.07 12.55,14.99 12.58,14.89 C12.61,14.79 12.61,14.69 12.61,14.58 C12.61,14.47 12.6,14.37 12.57,14.27 C12.54,14.17 12.5,14.1 12.44,14.03 C12.38,13.96 12.31,13.91 12.23,13.88 C12.15,13.85 12.04,13.83 11.93,13.83 C11.85,13.83 11.78,13.84 11.73,13.85 C11.68,13.86 11.62,13.88 11.58,13.9 C11.54,13.92 11.5,13.95 11.46,13.97 C11.42,13.99 11.39,14.03 11.36,14.06 L10.69,13.9 L10.69,13.9 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "replay_5",
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

export const AVReplay5Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    