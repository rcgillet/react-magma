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
    "headset_mic"
  ],
  "paths": [
    {
      "d": "M11.4,1.01999995 C6.61999998,1.32999996 2.99999996,5.51999997 2.99999996,10.31 L2.99999996,17 C2.99999996,18.66 4.33999997,20 5.99999996,20 L6.99999996,20 C8.09999998,20 8.99999996,19.1 8.99999996,18 L8.99999996,14 C8.99999996,12.9 8.09999998,12 6.99999996,12 L4.99999996,12 L4.99999996,10.29 C4.99999996,6.44999998 7.95999998,3.10999996 11.79,2.99999996 C15.76,2.88999996 19,6.05999998 19,9.99999999 L19,12 L17,12 C15.9,12 15,12.9 15,14 L15,18 C15,19.1 15.9,20 17,20 L19,20 L19,21 L13,21 C12.45,21 12,21.45 12,22 C12,22.55 12.45,23 13,23 L18,23 C19.66,23 21,21.66 21,20 L21,9.99999999 C21,4.82999997 16.64,0.679999953 11.4,1.01999995 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "headset_mic",
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

export const HardwareHeadsetMicIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    