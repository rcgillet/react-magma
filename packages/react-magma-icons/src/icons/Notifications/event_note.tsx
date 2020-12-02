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
    "event_note"
  ],
  "paths": [
    {
      "d": "M16,9.99999999 L7.99999998,9.99999999 C7.44999998,9.99999999 6.99999998,10.45 6.99999998,11 C6.99999998,11.55 7.44999998,12 7.99999998,12 L16,12 C16.55,12 17,11.55 17,11 C17,10.45 16.55,9.99999999 16,9.99999999 Z M19,2.99999995 L18,2.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 L16,2.99999995 L7.99999996,2.99999995 L7.99999996,1.99999995 C7.99999996,1.44999996 7.54999998,0.999999954 6.99999996,0.999999954 C6.44999998,0.999999954 5.99999996,1.44999996 5.99999996,1.99999995 L5.99999996,2.99999995 L4.99999996,2.99999995 C3.88999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,7.99999998 L19,7.99999998 L19,18 C19,18.55 18.55,19 18,19 Z M13,14 L7.99999998,14 C7.44999998,14 6.99999998,14.45 6.99999998,15 C6.99999998,15.55 7.44999998,16 7.99999998,16 L13,16 C13.55,16 14,15.55 14,15 C14,14.45 13.55,14 13,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "event_note",
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

export const NotificationsEventNoteIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    