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
    "mic_off"
  ],
  "paths": [
    {
      "d": "M15,10.6 L15,4.99999996 C15,3.33999996 13.66,1.99999996 12,1.99999996 C10.46,1.99999996 9.20999999,3.15999996 9.03999999,4.64999997 L15,10.6 Z M18.08,11 C17.67,11 17.31,11.3 17.25,11.71 C17.2,12.03 17.13,12.35 17.03,12.64 L18.3,13.91 C18.6,13.31 18.82,12.66 18.93,11.97 C19,11.46 18.6,11 18.08,11 Z M3.70999997,3.55999996 C3.31999996,3.94999997 3.31999996,4.57999997 3.70999997,4.96999997 L8.99999999,10.27 L8.99999999,10.7 C8.99999999,11.89 9.59999999,13.02 10.63,13.61 C11.38,14.04 12.04,14.05 12.65,13.92 L14.31,15.58 C13.6,15.91 12.81,16.1 12,16.1 C9.45999999,16.1 7.11999998,14.33 6.74999998,11.71 C6.68999998,11.3 6.32999998,11 5.91999997,11 C5.39999997,11 4.99999997,11.46 5.06999997,11.97 C5.52999997,14.93 8.02999998,17.27 11,17.72 L11,20 C11,20.55 11.45,21 12,21 C12.55,21 13,20.55 13,20 L13,17.72 C13.91,17.59 14.77,17.27 15.55,16.82 L19.04,20.31 C19.43,20.7 20.06,20.7 20.45,20.31 C20.84,19.92 20.84,19.29 20.45,18.9 L5.11999997,3.55999996 C4.72999997,3.16999996 4.09999997,3.16999996 3.70999997,3.55999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "mic_off",
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

export const AVMicOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    