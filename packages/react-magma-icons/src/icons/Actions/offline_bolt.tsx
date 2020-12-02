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
    "offline_bolt"
  ],
  "paths": [
    {
      "d": "M12,2.01999996 C6.48999998,2.01999996 2.01999996,6.48999998 2.01999996,12 C2.01999996,17.51 6.48999998,21.98 12,21.98 C17.51,21.98 21.98,17.51 21.98,12 C21.98,6.48999998 17.51,2.01999996 12,2.01999996 Z M11.48,17.88 L11.48,13.74 L8.81999999,13.74 C8.44999999,13.74 8.19999998,13.34 8.37999998,13.01 L12.06,5.83999997 C12.29,5.36999997 13,5.53999997 13,6.06999998 L13,10.26 L15.54,10.26 C15.91,10.26 16.15,10.65 15.99,10.98 L12.43,18.1 C12.19,18.58 11.48,18.41 11.48,17.88 L11.48,17.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "offline_bolt",
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

export const ActionsOfflineBoltIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    