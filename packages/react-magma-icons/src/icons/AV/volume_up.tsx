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
    "volume_up"
  ],
  "paths": [
    {
      "d": "M2.99999996,9.99999999 L2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 L6.99999996,15 L10.29,18.29 C10.92,18.92 12,18.47 12,17.58 L12,6.40999998 C12,5.51999997 10.92,5.06999997 10.29,5.69999997 L6.99999996,8.99999999 L3.99999996,8.99999999 C3.44999996,8.99999999 2.99999996,9.44999999 2.99999996,9.99999999 Z M16.5,12 C16.5,10.23 15.48,8.70999999 14,7.96999998 L14,16.02 C15.48,15.29 16.5,13.77 16.5,12 Z M14,4.44999997 L14,4.64999997 C14,5.02999997 14.25,5.35999997 14.6,5.49999997 C17.18,6.52999998 19,9.05999999 19,12 C19,14.94 17.18,17.47 14.6,18.5 C14.24,18.64 14,18.97 14,19.35 L14,19.55 C14,20.18 14.63,20.62 15.21,20.4 C18.6,19.11 21,15.84 21,12 C21,8.15999998 18.6,4.88999997 15.21,3.59999996 C14.63,3.36999996 14,3.81999997 14,4.44999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "volume_up",
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

export const AVVolumeUpIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    