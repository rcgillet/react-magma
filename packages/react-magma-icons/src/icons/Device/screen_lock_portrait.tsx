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
    "screen_lock_portrait"
  ],
  "paths": [
    {
      "d": "M9.99999999,16 L14,16 C14.55,16 15,15.55 15,15 L15,12 C15,11.45 14.55,11 14,11 L14,9.99999998 C14,8.88999999 13.1,7.99999998 12,7.99999998 C10.89,7.99999998 9.99999999,8.89999999 9.99999999,9.99999998 L9.99999999,11 C9.44999999,11 8.99999999,11.45 8.99999999,12 L8.99999999,15 C8.99999999,15.55 9.44999999,16 9.99999999,16 Z M10.8,9.99999999 C10.8,9.33999999 11.34,8.79999999 12,8.79999999 C12.66,8.79999999 13.2,9.33999999 13.2,9.99999999 L13.2,11 L10.8,11 L10.8,9.99999999 L10.8,9.99999999 Z M17,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,21 C4.99999997,22.1 5.89999997,23 6.99999997,23 L17,23 C18.1,23 19,22.1 19,21 L19,2.99999995 C19,1.89999996 18.1,0.999999954 17,0.999999954 Z M17,19 L6.99999998,19 L6.99999998,4.99999997 L17,4.99999997 L17,19 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "screen_lock_portrait",
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

export const DeviceScreenLockPortraitIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    