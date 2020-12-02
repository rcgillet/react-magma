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
    "wc"
  ],
  "paths": [
    {
      "d": "M5.27999997,20.64 L5.27999997,14.4 L4.79999997,14.4 C4.27199997,14.4 3.83999997,13.968 3.83999997,13.44 L3.83999997,9.11999999 C3.83999997,8.06399998 4.70399997,7.19999998 5.75999997,7.19999998 L8.63999999,7.19999998 C9.69599999,7.19999998 10.56,8.06399998 10.56,9.11999999 L10.56,13.44 C10.56,13.968 10.128,14.4 9.59999999,14.4 L9.11999999,14.4 L9.11999999,20.64 C9.11999999,21.168 8.68799999,21.6 8.15999998,21.6 L6.23999998,21.6 C5.71199997,21.6 5.27999997,21.168 5.27999997,20.64 Z M17.28,20.64 L17.28,15.84 L18.8256,15.84 C19.4784,15.84 19.9392,15.1968 19.7376,14.5728 L17.7216,8.51519999 C17.4528,7.72799998 16.7232,7.19999998 15.8976,7.19999998 L15.7824,7.19999998 C14.9568,7.19999998 14.2176,7.72799998 13.9584,8.51519999 L11.9424,14.5728 C11.7312,15.1968 12.192,15.84 12.8544,15.84 L14.4,15.84 L14.4,20.64 C14.4,21.168 14.832,21.6 15.36,21.6 L16.32,21.6 C16.848,21.6 17.28,21.168 17.28,20.64 Z M7.19999998,6.23999998 C8.26559998,6.23999998 9.11999999,5.38559997 9.11999999,4.31999997 C9.11999999,3.25439996 8.26559998,2.39999996 7.19999998,2.39999996 C6.13439998,2.39999996 5.27999997,3.25439996 5.27999997,4.31999997 C5.27999997,5.38559997 6.13439998,6.23999998 7.19999998,6.23999998 Z M15.84,6.23999998 C16.9056,6.23999998 17.76,5.38559997 17.76,4.31999997 C17.76,3.25439996 16.9056,2.39999996 15.84,2.39999996 C14.7744,2.39999996 13.92,3.25439996 13.92,4.31999997 C13.92,5.38559997 14.7744,6.23999998 15.84,6.23999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wc",
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

export const NotificationsWcIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    