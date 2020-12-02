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
    "forward_30"
  ],
  "paths": [
    {
      "d": "M18.92,13 C18.42,13 18.01,13.37 17.94,13.86 C17.46,17.23 14.17,19.7 10.52,18.82 C8.26999998,18.28 6.60999998,16.55 6.12999998,14.29 C5.31999997,10.42 8.26999998,6.99999998 12,6.99999998 L12,9.78999999 C12,10.24 12.54,10.46 12.85,10.14 L16.64,6.34999998 C16.84,6.14999998 16.84,5.83999997 16.64,5.63999997 L12.85,1.84999996 C12.54,1.53999996 12,1.75999996 12,2.20999996 L12,4.99999997 C7.05999998,4.99999997 3.15999996,9.47999999 4.15999997,14.6 C4.75999997,17.71 7.05999998,20.1 10.15,20.79 C14.98,21.87 19.3,18.59 19.92,14.12 C20.01,13.53 19.52,13 18.92,13 Z M10.54,15.22 C10.48,15.27 10.42,15.31 10.34,15.34 C10.26,15.37 10.17,15.38 10.07,15.38 C9.97999999,15.38 9.89999999,15.37 9.81999999,15.34 C9.73999999,15.31 9.67999999,15.28 9.61999999,15.23 C9.55999999,15.18 9.51999999,15.13 9.48999999,15.06 C9.45999999,14.99 9.43999999,14.92 9.43999999,14.84 L8.58999999,14.84 C8.58999999,15.05 8.62999999,15.23 8.70999999,15.39 C8.78999999,15.55 8.89999999,15.67 9.03999999,15.77 C9.17999999,15.87 9.32999999,15.95 9.49999999,16 C9.66999999,16.05 9.84999999,16.07 10.03,16.07 C10.24,16.07 10.44,16.04 10.63,15.99 C10.82,15.94 10.97,15.85 11.11,15.75 C11.25,15.65 11.35,15.51 11.43,15.36 C11.51,15.21 11.55,15.03 11.55,14.83 C11.55,14.6 11.49,14.39 11.37,14.22 C11.25,14.05 11.07,13.92 10.83,13.83 C10.93,13.78 11.03,13.73 11.11,13.66 C11.19,13.59 11.26,13.52 11.31,13.44 C11.36,13.36 11.41,13.28 11.44,13.19 C11.47,13.1 11.48,13.01 11.48,12.92 C11.48,12.72 11.44,12.55 11.37,12.39 C11.3,12.23 11.2,12.11 11.07,12.01 C10.94,11.91 10.79,11.83 10.61,11.78 C10.43,11.73 10.24,11.7 10.02,11.7 C9.82999999,11.7 9.63999999,11.73 9.47999999,11.78 C9.31999999,11.83 9.15999999,11.91 9.03999999,12.01 C8.91999999,12.11 8.80999999,12.23 8.73999999,12.38 C8.66999999,12.53 8.62999999,12.68 8.62999999,12.86 L9.47999999,12.86 C9.47999999,12.79 9.49999999,12.72 9.52999999,12.66 C9.55999999,12.6 9.59999999,12.55 9.64999999,12.51 C9.69999999,12.47 9.75999999,12.44 9.82999999,12.41 C9.89999999,12.38 9.96999999,12.38 10.05,12.38 C10.15,12.38 10.23,12.39 10.3,12.42 C10.37,12.45 10.43,12.48 10.48,12.53 C10.53,12.58 10.56,12.64 10.59,12.7 C10.62,12.76 10.63,12.84 10.63,12.92 C10.63,13.1 10.58,13.24 10.47,13.35 C10.36,13.46 10.21,13.51 9.98999999,13.51 L9.55999999,13.51 L9.55999999,14.17 L10.01,14.17 C10.12,14.17 10.21,14.18 10.3,14.21 C10.39,14.24 10.46,14.27 10.52,14.32 C10.58,14.37 10.63,14.44 10.66,14.52 C10.69,14.6 10.71,14.7 10.71,14.81 C10.71,14.9 10.7,14.98 10.67,15.05 C10.64,15.12 10.59,15.16 10.54,15.22 L10.54,15.22 Z M14.44,11.78 C14.26,11.71 14.07,11.68 13.85,11.68 C13.63,11.68 13.44,11.71 13.26,11.78 C13.08,11.85 12.93,11.96 12.81,12.11 C12.69,12.26 12.58,12.45 12.52,12.68 C12.46,12.91 12.42,13.18 12.42,13.5 L12.42,14.24 C12.42,14.56 12.46,14.84 12.53,15.06 C12.6,15.28 12.7,15.48 12.83,15.63 C12.96,15.78 13.11,15.89 13.29,15.96 C13.47,16.03 13.66,16.06 13.88,16.06 C14.1,16.06 14.29,16.03 14.47,15.96 C14.65,15.89 14.8,15.78 14.92,15.63 C15.04,15.48 15.14,15.29 15.21,15.06 C15.28,14.83 15.31,14.56 15.31,14.24 L15.31,13.5 C15.31,13.18 15.27,12.9 15.2,12.68 C15.13,12.46 15.03,12.26 14.9,12.11 C14.77,11.96 14.62,11.85 14.44,11.78 Z M14.45,14.35 C14.45,14.54 14.44,14.7 14.41,14.83 C14.38,14.96 14.35,15.07 14.3,15.15 C14.25,15.23 14.19,15.29 14.11,15.32 C14.03,15.35 13.95,15.37 13.86,15.37 C13.77,15.37 13.68,15.35 13.61,15.32 C13.54,15.29 13.47,15.23 13.42,15.15 C13.37,15.07 13.33,14.96 13.3,14.83 C13.27,14.7 13.26,14.54 13.26,14.35 L13.26,13.38 C13.26,13.19 13.27,13.03 13.3,12.9 C13.33,12.77 13.36,12.67 13.42,12.59 C13.48,12.51 13.53,12.45 13.61,12.42 C13.69,12.39 13.77,12.37 13.86,12.37 C13.95,12.37 14.04,12.39 14.11,12.42 C14.18,12.45 14.25,12.51 14.3,12.59 C14.35,12.67 14.39,12.77 14.42,12.9 C14.45,13.03 14.46,13.19 14.46,13.38 L14.46,14.35 L14.45,14.35 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "forward_30",
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

export const AVForward30Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    