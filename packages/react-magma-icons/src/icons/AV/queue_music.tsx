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
    "queue_music"
  ],
  "paths": [
    {
      "d": "M14,5.99999998 L3.99999996,5.99999998 C3.44999996,5.99999998 2.99999996,6.44999998 2.99999996,6.99999998 C2.99999996,7.54999998 3.44999996,7.99999998 3.99999996,7.99999998 L14,7.99999998 C14.55,7.99999998 15,7.54999998 15,6.99999998 C15,6.44999998 14.55,5.99999998 14,5.99999998 Z M14,9.99999999 L3.99999996,9.99999999 C3.44999996,9.99999999 2.99999996,10.45 2.99999996,11 C2.99999996,11.55 3.44999996,12 3.99999996,12 L14,12 C14.55,12 15,11.55 15,11 C15,10.45 14.55,9.99999999 14,9.99999999 Z M3.99999996,16 L9.99999996,16 C10.55,16 11,15.55 11,15 C11,14.45 10.55,14 9.99999996,14 L3.99999996,14 C3.44999996,14 2.99999996,14.45 2.99999996,15 C2.99999996,15.55 3.44999996,16 3.99999996,16 Z M19,5.99999998 C17.9,5.99999998 17,6.89999998 17,7.99999998 L17,14.18 C16.69,14.07 16.35,14 16,14 C14.16,14 12.72,15.64 13.05,17.54 C13.26,18.75 14.25,19.74 15.46,19.95 C17.36,20.28 19,18.84 19,17 L19,7.99999998 L21,7.99999998 C21.55,7.99999998 22,7.54999998 22,6.99999998 C22,6.44999998 21.55,5.99999998 21,5.99999998 L19,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "queue_music",
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

export const AVQueueMusicIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    