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
    "meeting_room"
  ],
  "paths": [
    {
      "d": "M20,19 L19,19 L19,4.99999996 C19,4.44999997 18.55,3.99999996 18,3.99999996 L14,3.99999996 C14,3.44999996 13.55,2.99999996 13,2.99999996 L5.99999996,2.99999996 C5.44999997,2.99999996 4.99999996,3.44999996 4.99999996,3.99999996 L4.99999996,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 L13,21 C13.55,21 14,20.55 14,20 L14,5.99999996 L17,5.99999996 L17,20 C17,20.55 17.45,21 18,21 L20,21 C20.55,21 21,20.55 21,20 C21,19.45 20.55,19 20,19 Z M12,13 L9.99999999,13 L9.99999999,11 L12,11 L12,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "meeting_room",
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

export const PlacesMeetingRoomIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    