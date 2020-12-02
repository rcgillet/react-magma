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
    "volume_mute"
  ],
  "paths": [
    {
      "d": "M6.99999998,9.99999999 L6.99999998,14 C6.99999998,14.55 7.44999998,15 7.99999998,15 L11,15 L14.29,18.29 C14.92,18.92 16,18.47 16,17.58 L16,6.40999998 C16,5.51999997 14.92,5.06999997 14.29,5.69999997 L11,8.99999999 L7.99999998,8.99999999 C7.44999998,8.99999999 6.99999998,9.44999999 6.99999998,9.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "volume_mute",
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

export const AVVolumeMuteIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    