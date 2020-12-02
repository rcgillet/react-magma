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
    "voice_chat"
  ],
  "paths": [
    {
      "d": "M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 2.00999996,2.89999996 2.00999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M16.38,12.7 L14,10.8 L14,13 C14,13.55 13.55,14 13,14 L6.99999998,14 C6.44999998,14 5.99999998,13.55 5.99999998,13 L5.99999998,6.99999998 C5.99999998,6.44999998 6.44999998,5.99999998 6.99999998,5.99999998 L13,5.99999998 C13.55,5.99999998 14,6.44999998 14,6.99999998 L14,9.19999999 L16.38,7.29999998 C17.03,6.77999998 18,7.23999998 18,8.07999998 L18,11.92 C18,12.76 17.03,13.22 16.38,12.7 L16.38,12.7 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "voice_chat",
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

export const NotificationsVoiceChatIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    