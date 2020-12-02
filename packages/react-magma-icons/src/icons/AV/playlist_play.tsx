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
    "playlist_play"
  ],
  "paths": [
    {
      "d": "M4.99999997,9.99999999 L15,9.99999999 C15.55,9.99999999 16,10.45 16,11 C16,11.55 15.55,12 15,12 L4.99999997,12 C4.44999997,12 3.99999997,11.55 3.99999997,11 C3.99999997,10.45 4.44999997,9.99999999 4.99999997,9.99999999 Z M4.99999997,5.99999997 L15,5.99999997 C15.55,5.99999997 16,6.44999998 16,6.99999997 C16,7.54999998 15.55,7.99999997 15,7.99999997 L4.99999997,7.99999997 C4.44999997,7.99999997 3.99999997,7.54999998 3.99999997,6.99999997 C3.99999997,6.44999998 4.44999997,5.99999997 4.99999997,5.99999997 Z M4.99999997,14 L11,14 C11.55,14 12,14.45 12,15 C12,15.55 11.55,16 11,16 L4.99999997,16 C4.44999997,16 3.99999997,15.55 3.99999997,15 C3.99999997,14.45 4.44999997,14 4.99999997,14 Z M14,14.88 L14,19.11 C14,19.5 14.42,19.74 14.76,19.54 L18.29,17.42 C18.61,17.23 18.61,16.76 18.29,16.56 L14.76,14.44 C14.42,14.25 14,14.49 14,14.88 L14,14.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "playlist_play",
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

export const AVPlaylistPlayIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    