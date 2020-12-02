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
    "no_meeting_room"
  ],
  "paths": [
    {
      "d": "M14,5.99999996 L17,5.99999996 L17,13.88 L19,15.88 L19,4.99999996 C19,4.44999997 18.55,3.99999996 18,3.99999996 L14,3.99999996 C14,3.44999996 13.55,2.99999996 13,2.99999996 L6.11999998,2.99999996 L14,10.88 L14,5.99999996 Z M21.17,20.88 L12,11.71 L12,13 L9.99999999,13 L9.99999999,11 L11.29,11 L3.11999996,2.82999996 C2.72999996,2.43999996 2.09999996,2.43999996 1.70999996,2.82999996 C1.31999996,3.21999996 1.31999996,3.84999997 1.70999996,4.23999997 L4.99999997,7.53999998 L4.99999997,19 L3.99999997,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999997,21 L13,21 C13.55,21 14,20.55 14,20 L14,16.54 L19.75,22.29 C20.14,22.68 20.77,22.68 21.16,22.29 C21.56,21.9 21.56,21.27 21.17,20.88 L21.17,20.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "no_meeting_room",
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

export const PlacesNoMeetingRoomIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    